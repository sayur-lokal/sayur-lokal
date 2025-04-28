
import { User } from "@/lib/user";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


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
      const data: User = await res.json();
      return data;
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
  name: "currentUser",
  initialState,
  reducers: {
    clearUser(state) {
      state.user = null;
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

export const { clearUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;