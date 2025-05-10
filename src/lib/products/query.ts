import { productSchema } from "@/types/product";
import { z } from "zod";

export const querySchema = z.object({
    sortBy: z.enum(["sales", "price", "date", "name", "rating", "discount"]).catch("rating").optional(),
    sortOrder: z.enum(["desc", "asc"]).catch("asc").optional(),
    category: z.string().transform(value => value.split(",").map(value => value.trim())).pipe(z.string().array()).catch([]),
    priceMin: z.coerce.number().optional(),
    priceMax: z.coerce.number().optional(),
    page: z.coerce.number().gte(1).default(1),
    limit: z.coerce.number().gte(1).lte(100).default(10),
    name: z.string().optional(),
});

export type Query = z.infer<typeof querySchema>;

export const queryResult = z.object({
    products: z.array(productSchema),
    total: z.number(),
    page: z.number(),
    limit: z.number(),
    totalPages: z.number(),
    hasNextPage: z.boolean(),
    hasPrevPage: z.boolean(),
    offset: z.number(),
    sortBy: z.enum(["sales", "price", "date", "name", "rating", "discount"]).catch("rating").optional(),
    sortOrder: z.enum(["desc", "asc"]).catch("asc").optional(),
    category: z.string().transform(value => value.split(",").map(value => value.trim())).pipe(z.string().array()).catch([]).optional(),
    priceMin: z.coerce.number().optional(),
    priceMax: z.coerce.number().optional(),
    name: z.string().optional(),
})

export type QueryResult = z.infer<typeof queryResult>;
export const defaultQueryResult = (): QueryResult => ({
    products: [],
    total: 0,
    page: 1,
    limit: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPrevPage: false,
    offset: 0,
})