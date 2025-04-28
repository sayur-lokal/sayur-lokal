import { z } from "zod";

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
})

export type SignInRequest = z.infer<typeof signInSchema>