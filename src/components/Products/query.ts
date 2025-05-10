import { z } from "zod";

export const querySchema = z.object({
    sortBy: z.enum(["sales", "price", "date", "name", "rating", "discount"]).catch("rating").optional(),
    sortOrder: z.enum(["desc", "asc"]).catch("asc").optional(),
    category: z.string().transform(value => value.split(",").map(value => value.trim())).pipe(z.string().array()).catch([]),
    priceMin: z.coerce.number().optional(),
    priceMax: z.coerce.number().optional()
});

export type Query = z.infer<typeof querySchema>;