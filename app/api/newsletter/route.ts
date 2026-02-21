import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {

  try {

    const body = await req.json();
    console.log("BODY:", body);

    const { email } = body;

    const result = await db.execute(
      "INSERT INTO subscribers (email) VALUES (?)",
      [email]
    );

    console.log("RESULT:", result);

    return NextResponse.json({ success: true });

  } catch (error: any) {

    console.error("MYSQL ERROR:", error);

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}