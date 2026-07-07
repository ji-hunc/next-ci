import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({
    status: "ok",
    servedFrom: process.env.SERVED_FROM ?? "local",
    time: new Date().toISOString(),
  });
}
