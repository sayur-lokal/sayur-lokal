import { User, userSchema } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCurrentUser } from "./thunks/currentUserThunks";


type CurrentUserState = {
  user: User | null;
};


const initialState: CurrentUserState = {
  user: null,
};

const currentUserSlice = createSlice({
  name: "currentuser",
  initialState,
    reducers: {
      setUser(state, action: PayloadAction<User>) {
        state.user = action.payload;  
      },
      clearUser(state) {
        state.user = null;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { setUser, clearUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;