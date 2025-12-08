import { connectTODb } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const { db } = await connectTODb();
  const data = await db
    .collection("subscribedNewsLetterUsers")
    .find({})
    .toArray();
  console.log(data);
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { db } = await connectTODb();
    const result = await db
      .collection("subscribedNewsLetterUsers")
      .insertOne(body);

    return NextResponse.json(
      { success: true, insertedId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to insert data" },
      { status: 500 }
    );
  }
}
