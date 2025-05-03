import { userSchema } from "@/types/user";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch user
export const fetchCurrentUser = createAsyncThunk(
  "currentUser/fetchCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("/api/auth/user");
      if (!res.ok) {
        throw new Error("Failed to fetch user");
      }
      const json = await res.json();
      const validatedUser = userSchema.parse(json); // Zod validation

      return validatedUser;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);