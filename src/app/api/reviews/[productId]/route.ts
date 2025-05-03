//GET reviews

import { NextRequest, NextResponse } from "next/server";

const mockReviews = [
  {
    productId: 101,
    user: "Alice",
    rating: 4,
    comment: "Very fresh and organic!",
    createdAt: new Date().toISOString(),
  },
  {
    productId: 103,
    user: "Bob",
    rating: 5,
    comment: "Great quality. Will buy again!",
    createdAt: new Date().toISOString(),
  },
];

export async function GET(
  req: NextRequest,
  { params }: { params: { productId: string } }
) {
  const productId = Number(params.productId);

  const reviews = mockReviews.filter(
    (r) => r.productId === productId
  );

  return NextResponse.json(reviews);
}

