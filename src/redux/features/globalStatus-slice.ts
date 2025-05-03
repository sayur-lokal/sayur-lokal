//global handling for loading and error
import { createSlice, isPending, isRejected, isFulfilled } from "@reduxjs/toolkit";

type StatusState = {
  loading: boolean;
  error: string | null;
};

const initialState: StatusState = {
  loading: false,
  error: null,
};

const statusSlice = createSlice({
  name: "statusslice",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(isRejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error?.message || "Something went wrong. Please try again.";
      })
      .addMatcher(isFulfilled, (state) => {
        state.loading = false;
        state.error = null;
      });
  },
});

export const { clearError } = statusSlice.actions;
export default statusSlice.reducer;