import { z } from "zod";

export type Review = z.infer<typeof reviewSchema>

export const reviewSchema = z.object({
    productId: z.number(),
    buyerId: z.number(),
    rating: z.number().min(1).max(5),
    comment: z.string().min(1).optional(),
    createdAt: z.string().optional()
})