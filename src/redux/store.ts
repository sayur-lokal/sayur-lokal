import { configureStore } from "@reduxjs/toolkit";
import quickViewReducer from "./features/quickView-slice";
import cartReducer from "./features/cart-slice";
import wishlistReducer from "./features/wishlist-slice";
import productDetailsReducer from "./features/product-details";
import currentUserSlice from "./features/currentUser-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import reviewSlice from "./features/review-slice";
import sellerInventory from "./features/sellerInventory-slice";


export const store = configureStore({
  reducer: {
    quickViewReducer,
    cartReducer,
    wishlistReducer,
    productDetailsReducer,
    currentUserSlice,
    reviewSlice,
    sellerInventory,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
