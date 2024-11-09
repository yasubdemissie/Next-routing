import { NextResponse } from "next/server";

export async function GET() {
  //   const { params } = context;
  return NextResponse.json({
    status: 200,
    body: "Hello World",
    name: "Yasub demissie",
    age: 22,
    department: "Software Engineering",
  });
}
