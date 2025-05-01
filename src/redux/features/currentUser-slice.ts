//for user info in more than one place
import { User, userSchema } from "@/lib/user";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


type CurrentUserState = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

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

const initialState: CurrentUserState = {
  user: null,
  loading: false,
  error: null,
};

const currentUserSlice = createSlice({
  name: "currentuser",
  initialState,
    reducers: {
      setUser(state, action: PayloadAction<User>) {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      },
      clearUser(state) {
        state.user = null;
        state.loading = false;
        state.error = null;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setUser, clearUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;