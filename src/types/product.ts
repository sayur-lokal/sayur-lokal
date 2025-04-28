import { z } from "zod"

export const productSchema = z.object({
    id: z.string().describe("unique identifier of the product"),
    title: z.string(),
    reviews: z.number(),
    price: z.number(),
    discountedPrice: z.number(),
    categoryId: z.number(),
    shopId: z.number(),
    description: z.string().optional(),
    ingredients: z.array(z.string()).optional(),
    createdAt: z.string(),
    imgs: z.array(z.object({
        thumbnails: z.array(z.string()),
        previews: z.array(z.string())
    })).optional()
})

export type Product = z.infer<typeof productSchema>;
