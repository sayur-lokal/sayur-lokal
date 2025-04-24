import { z } from "zod";
import argon2 from "argon2"

export const userSchema = z.object({
id: z.string(),
  name: z.string().min(1),
  email: z.string().email(),
  hashed_password: z.string(),
  role: z.enum(["admin", "seller", "buyer"]),
});

export type User = z.infer<typeof userSchema>;

export const hashPassword = (
  password: string,
): Promise<string> => {
  return argon2.hash(password);
};

export const compareHash = (hash: string, password: string): Promise<boolean> =>
  argon2.verify(hash, password);
