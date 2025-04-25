
import argon2 from "argon2"

export const ERR_USER_NOT_FOUND = new Error("user not found")
export const ERR_PASSWORD_NOT_MATCH = new Error("invalid email and/or password")

export const hashPassword = (
  password: string,
): Promise<string> => {
  return argon2.hash(password);
};

export const compareHash = (hash: string, password: string): Promise<boolean> =>
  argon2.verify(hash, password);
