import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const SECRET_KEY = "nk2026";
const RESULTS_PATH = path.join(process.cwd(), "ideation-results.json");

// GET — read saved results
export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("key");
  if (key !== SECRET_KEY) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  try {
    const data = await fs.readFile(RESULTS_PATH, "utf-8");
    return NextResponse.json(JSON.parse(data));
  } catch {
    return NextResponse.json({ results: {}, savedAt: null });
  }
}

// POST — save results
export async function POST(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("key");
  if (key !== SECRET_KEY) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const payload = {
      results: body.results,
      approved: body.approved,
      rejected: body.rejected,
      savedAt: new Date().toISOString(),
    };
    await fs.writeFile(RESULTS_PATH, JSON.stringify(payload, null, 2));
    return NextResponse.json({ ok: true, savedAt: payload.savedAt });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
