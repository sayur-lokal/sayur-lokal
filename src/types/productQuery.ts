import { z } from "zod"
import { ValidationError } from "./errors"
import { commaSeparatedStringArray } from "./utils"
import { productSchema } from "./product";

export const parseProductQuery = (raw: any): ProductQuery => {
    const parsed = productQuerySchema.safeParse(raw)
    if (!parsed.success) {
        throw new ValidationError(parsed.error.toString())
    }

    return parsed.data
}

export const productQuerySchema = z.object({
    page: z.coerce.number().gte(1).catch(1).describe("Page number for pagination, starting from 1"),
    limit: z.coerce.number().gte(1).default(10).describe("Number of products to return per page"),
    category: commaSeparatedStringArray
        .optional()
        .describe("filter products by their category name, separate multiple categories with comma"),
    name: z.string().optional().describe("filter products by the product name"),
    price_min: z.number().gte(0).optional().describe("Minimum price for filtering products"),
    price_max: z.number().gte(0).optional().describe("Maximum price for filtering products")
}).refine(data => {
    if (data.price_min !== undefined && data.price_max !== undefined) {
        return data.price_max >= data.price_min;
    }
    return true;
}, {
    message: "Maximum price cannot be less than minimum price",
    path: ["price_max"],
})

export type ProductQuery = z.infer<typeof productQuerySchema>

export const productQueryResult = z.object({
    data: z.array(productSchema),
    total: z.number(),
    page: z.number(),
    limit: z.number()
})

export type ProductQueryResult = z.infer<typeof productQueryResult>