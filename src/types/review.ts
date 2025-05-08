import { z } from "zod";

export const validateReviewRating = (rating: unknown) => {
    return reviewSchema.shape.rating.safeParse(rating);
  };

export type Review = z.infer<typeof reviewSchema>

export const reviewSchema = z.object({
    productId: z.string().min(1, "Invalid product ID"),
    buyerId: z.string().min(1, "Invalid buyer ID"),
    rating: z.number().min(1).max(5),
    comment: z.string().min(1).optional(),
    createdAt: z.string().optional(),
})