import { z } from "zod";
import bcrypt from "bcrypt";

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
  saltRounds: number = 10
): Promise<string> => {
  return bcrypt.hash(password, saltRounds);
};

export const compareHash = (hash: string, password: string): Promise<boolean> =>
  bcrypt.compare(password, hash);
