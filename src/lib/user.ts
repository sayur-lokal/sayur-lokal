import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  email: z.string().email(),
  hashed_password: z.string().optional(),
  role: z.enum(["admin", "seller", "buyer"]),
});

export type User = z.infer<typeof userSchema>;
