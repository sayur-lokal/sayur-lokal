import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Tipe data untuk user
interface User {
  email: string;
  role: string;
  username?: string;
  name?: string;
}

// Tipe data untuk state
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

// State awal
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

// Membuat slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

// Export actions
export const { setUser, clearUser } = authSlice.actions;

// Selectors
export const selectUser = (state: RootState) => state.authReducer.user;
export const selectIsAuthenticated = (state: RootState) => state.authReducer.isAuthenticated;

// Export reducer
export default authSlice.reducer;