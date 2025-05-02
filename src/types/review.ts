import { z } from "zod";

export type Review = z.infer<typeof reviewSchema>

export const reviewSchema = z.object({
    productId: z.number(),
    buyerId: z.number(),
    rating: z.number(),
    comment: z.string().optional(),
    createdAt: z.string().optional()
})