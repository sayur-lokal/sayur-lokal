//POST a review
import { NextRequest, NextResponse } from "next/server";
import { reviewSchema } from "@/types/review";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = reviewSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.format() },
      { status: 400 }
    );
  }

  const newReview = {
    ...parsed.data,
    createdAt: new Date().toISOString(),
  };

  // Save to database here — for now, return mock
  return NextResponse.json(newReview, { status: 201 });
}