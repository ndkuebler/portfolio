import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { CONCEPTS } from "@/app/concepts/concepts-data";

const redisUrl = process.env.UPSTASH_REDIS_REST_KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

const redis =
  redisUrl && redisToken
    ? new Redis({ url: redisUrl, token: redisToken })
    : null;

const VALID_SLUGS = new Set(CONCEPTS.map((c) => c.slug).filter(Boolean));

function getFingerprint(req: NextRequest): string {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const ua = req.headers.get("user-agent") ?? "unknown";
  const lang = req.headers.get("accept-language") ?? "unknown";
  // Simple hash from string
  const raw = `${ip}|${ua}|${lang}`;
  let hash = 0;
  for (let i = 0; i < raw.length; i++) {
    const chr = raw.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return `fp_${Math.abs(hash).toString(36)}`;
}

// POST: Record a vote
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { slug, vote } = body as { slug: string; vote: string };

    if (!slug || !VALID_SLUGS.has(slug)) {
      return NextResponse.json({ error: "Invalid concept" }, { status: 400 });
    }
    if (vote !== "like" && vote !== "pass") {
      return NextResponse.json({ error: "Invalid vote" }, { status: 400 });
    }

    if (!redis) {
      return NextResponse.json({ success: true, offline: true });
    }

    const fingerprint = getFingerprint(req);
    const voterKey = `voters:${fingerprint}`;

    // Check if already voted on this concept
    const alreadyVoted = await redis.sismember(voterKey, slug);
    if (alreadyVoted) {
      return NextResponse.json({ success: true, alreadyVoted: true });
    }

    // Record vote atomically
    const voteKey = `votes:${slug}`;
    const field = vote === "like" ? "likes" : "passes";
    await redis.hincrby(voteKey, field, 1);

    // Track that this fingerprint voted on this concept
    await redis.sadd(voterKey, slug);
    // Set TTL of 30 days on voter key (only if new)
    const ttl = await redis.ttl(voterKey);
    if (ttl === -1) {
      await redis.expire(voterKey, 60 * 60 * 24 * 30);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Vote error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// GET: View vote tallies (protected)
export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("key");
  if (key !== "nk2026") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!redis) {
    return NextResponse.json({ error: "Redis not configured" }, { status: 503 });
  }

  try {
    const votableConcepts = CONCEPTS.filter((c) => c.slug);
    const results = await Promise.all(
      votableConcepts.map(async (concept) => {
        const data = (await redis.hgetall(`votes:${concept.slug}`)) as {
          likes?: string;
          passes?: string;
        } | null;
        const likes = Number(data?.likes ?? 0);
        const passes = Number(data?.passes ?? 0);
        const total = likes + passes;
        return {
          slug: concept.slug,
          title: concept.title,
          thumb: concept.thumb,
          likes,
          passes,
          total,
          likePercent: total > 0 ? Math.round((likes / total) * 100) : 0,
        };
      })
    );

    results.sort((a, b) => b.likePercent - a.likePercent || b.total - a.total);

    return NextResponse.json({ results });
  } catch (err) {
    console.error("Vote fetch error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
