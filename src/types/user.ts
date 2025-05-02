import { z } from "zod";

/**
 * Parses raw data into a User object using userSchema validation.
 * Throws a ZodError if the data does not match the schema.
 * @param raw The raw data to parse.
 * @returns The parsed User object.
 */
export const parseUser = (raw: any): User => {
    const parsed = userSchema.safeParse(raw);
    if (!parsed.success) {
        // Throw the ZodError directly for more detailed validation errors
        throw parsed.error;
    }

    return parsed.data;
};

export const userSchema = z.object({
  id: z.string().describe("Unique identifier for the user"),
  name: z.string().min(1).describe("Full name of the user"),
  email: z.string().email().describe("Email address of the user (must be a valid email format)"),
  hashed_password: z.string().optional().describe("Hashed password for the user (optional, e.g., for OAuth users)"),
  role: z.enum(["admin", "seller", "buyer"]).describe("Role of the user (admin, seller, or buyer)"),
  address: z.string().describe("Physical address of the user"),
  createdAt: z.string().describe("Timestamp when the user was created (as a string)"),
});

export type User = z.infer<typeof userSchema>;