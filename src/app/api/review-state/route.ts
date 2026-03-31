import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const STATE_PATH = path.join(process.cwd(), "review-state.json");

export async function GET() {
  try {
    const data = fs.readFileSync(STATE_PATH, "utf-8");
    return NextResponse.json(JSON.parse(data));
  } catch {
    return NextResponse.json({});
  }
}

export async function POST(req: Request) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Dev only" }, { status: 403 });
  }

  const state = await req.json();
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
  return NextResponse.json({ success: true });
}
