import { reviewSchema } from "@/types/review";
import { validateReviewRating } from "@/types/review";
import { z } from "zod";

/**
 * Use this when you're working with validated review data (e.g. from your frontend form or typed DB query).
 */
type Review = z.infer<typeof reviewSchema>;

export const ProductRating = (reviews: Review[] = []): number => {
  const validReviews = reviews.filter(review => 
    validateReviewRating(review.rating).success
  );

  if (validReviews.length === 0) return 0;
  
  const total = validReviews.reduce((sum, review) => sum + review.rating, 0);
  return Number((total / validReviews.length).toFixed(1));
};


/**
 * Use this when you're working with untyped or external data (e.g. raw backend API response).
 */
export const calculateRating = (reviews: { rating: number }[] = []): number => {
  if (reviews.length === 0) return 0;
  
  const validRatings = reviews.map(r => r.rating).filter(r => r >= 1 && r <= 5);
  if (validRatings.length === 0) return 0;
  
  const average = validRatings.reduce((sum, r) => sum + r, 0) / validRatings.length;
  return Number(average.toFixed(1));
};
