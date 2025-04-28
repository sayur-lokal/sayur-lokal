import { z } from "zod"
import { commaSeparatedStringArray } from "./utils";

/**
 * Parses raw product data into a Product type.
 * @param raw - The raw data to parse.
 * @returns The parsed Product object.
 * @throws Error if parsing fails.
 */
export const parseProduct = (raw: any): Product => {
    const parsed = productSchema.safeParse(raw)
    if (!parsed.success) {
        throw new Error(parsed.error.toString())
    }

    return parsed.data
}

// Schema for product images
const ProductImageSchema = z.object({
    thumbnails: z.array(z.string().url("Invalid thumbnail URL")).min(1, "At least one thumbnail URL is required").describe("list of thumbnail image URLs"),
    previews: z.array(z.string().url("Invalid preview URL")).min(1, "At least one preview URL is required").describe("list of preview image URLs")
}).describe("Product image object with thumbnail and preview URLs");

export const productSchema = z.object({
    id: z.string().min(1, "ID cannot be empty").describe("unique identifier of the product"),
    title: z.string().min(1, "Title cannot be empty").max(255, "Title cannot exceed 255 characters").describe("title of the product"),
    reviews: z.number().int("Reviews must be an integer").nonnegative("Reviews cannot be negative").describe("number of reviews for the product"),
    price: z.number().nonnegative("Price cannot be negative").describe("original price of the product"),
    discountedPrice: z.number().nonnegative("Discounted price cannot be negative").describe("discounted price of the product"),
    category: commaSeparatedStringArray.describe("the category list of the product"),
    shopId: z.number().int("Shop ID must be an integer").positive("Shop ID must be positive").describe("ID of the shop selling the product"),
    description: z.string().max(1000, "Description cannot exceed 1000 characters").optional().describe("description of the product"),
    ingredients: z.array(z.string().min(1, "Ingredient cannot be empty")).optional().describe("list of ingredients in the product"),
    createdAt: z.string().datetime("Invalid date format for createdAt").describe("date and time when the product was created"),
    imgs: z.array(ProductImageSchema).optional().describe("Array of product image objects")
}).refine(data => data.discountedPrice <= data.price, {
    message: "Discounted price cannot be greater than the original price",
    path: ["discountedPrice"],
}).describe("Schema for validating product data");

export type Product = z.infer<typeof productSchema>;
