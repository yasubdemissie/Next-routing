import { NextResponse } from "next/server";

export async function POST(request, context) {
  const {
    params: { userId },
  } = context;
  const body = await request?.json();
  return NextResponse.json({ status: 200, owner: "Program", body, id: userId });
}
