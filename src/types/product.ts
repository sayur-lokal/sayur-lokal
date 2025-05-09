import { z } from "zod";
import { commaSeparatedStringArray } from "./utils";
import { reviewSchema } from "./review";

/**
 * Parses raw product data into a Product type.
 * @param raw - The raw data to parse.
 * @returns The parsed Product object.
 * @throws Error if parsing fails.
 */
export const parseProduct = (raw: any): Product => {
  const parsed = productSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error(parsed.error.toString());
  }

  return parsed.data;
}

// Schema for product images
const ProductImageSchema = z
  .object({
    thumbnails: z
      .array(z.string().url("Invalid thumbnail URL"))
      .min(1, "At least one thumbnail URL is required")
      .describe("list of thumbnail image URLs"),
    previews: z
      .array(z.string().url("Invalid preview URL"))
      .min(1, "At least one preview URL is required")
      .describe("list of preview image URLs"),
  })
  .describe("Product image object with thumbnail and preview URLs");

export const productSchema = z
  .object({
    id: z
      .string()
      .min(1, "ID cannot be empty")
      .describe("unique identifier of the product"),
    title: z
      .string()
      .min(1, "Title cannot be empty")
      .max(255, "Title cannot exceed 255 characters")
      .describe("title of the product"),
    reviews: z.array(reviewSchema)
      .describe("number of reviews for the product")
      .optional(),
    price: z
      .number()
      .nonnegative("Price cannot be negative")
      .describe("original price of the product"),
    discountedPrice: z
      .number()
      .nonnegative("Discounted price cannot be negative")
      .describe("discounted price of the product"),
    category: z.union([
      commaSeparatedStringArray,
      z.array(z.string())
    ])
      .optional()
      .describe("Tags for flexible categorization/labels, e.g., cocok dibeli barengan, produk serupa, promo, etc"),
    shopId: z
      .number()
      .int("Shop ID must be an integer")
      .positive("Shop ID must be positive")
      .describe("ID of the shop selling the product"),
    stock: z
      .number()
      .int("Stock must be an integer")
      .nonnegative("Stock cannot be negative")
      .optional()
      .describe("Available quantity of the product"),
    description: z
      .string()
      .max(1000, "Description cannot exceed 1000 characters")
      .optional()
      .describe("description of the product"),
    ingredients: z
      .array(z.string().min(1, "Ingredient cannot be empty"))
      .optional()
      .describe("list of ingredients in the product"),
    createdAt: z
      .string()
      .datetime("Invalid date format for createdAt")
      .describe("date and time when the product was created"),
    imgs: ProductImageSchema
      .optional()
      .describe("Array of product image objects"),
    productAttrb: z.object({
      productType: z.enum(["standard", "premium"]).optional().describe("e.g. eco-friendly/organic"),
      isEcoFriendly: z.boolean().optional(),
      isOrganic: z.boolean().optional(),
      description: z.string().optional(),
    }).optional(),
  })
  .refine((data) => data.discountedPrice <= data.price, {
    message: "Discounted price cannot be greater than the original price",
    path: ["discountedPrice"],
  })
  .describe("Schema for validating product data");

export type Product = z.infer<typeof productSchema>;

export const defaultProduct = (): Product => ({
    title: "",
    price: 0,
    discountedPrice: 0,
    category: ["0"],
    shopId: 0,
    id: "",
    stock: 0,
    description: "",
    createdAt: "",
    imgs: {
      thumbnails: [],
      previews: [],
    },
    productAttrb:{
    productType: "standard", // e.g. eco-friendly/organic
    isEcoFriendly: false,
    isOrganic: false,
    },
    ingredients: [""],// only for meal kits
    reviews: [{
      productId: "", 
      buyerId: "",   
      rating: 0,
      comment: "",
      createdAt: new Date().toISOString(),
    }],
  })
