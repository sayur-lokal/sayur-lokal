import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import authReducer from './features/auth-slice';
import quickViewReducer from "./features/quickView-slice";
import cartReducer from "./features/cart-slice";
import wishlistReducer from "./features/wishlist-slice";
import productDetailReducer from "./features/product-details";
import currentUserReducer from "./features/currentUser-slice";
import reviewReducer from "./features/review-slice";
import sellerInventoryReducer from "./features/sellerInventory-slice";
import searchReducer from "./features/search-slice";
import recentlyViewdReducer from "./features/recentlyViewd-slice";

export const store = configureStore({
  reducer: {
    searchslice: searchReducer,
    viewslice: quickViewReducer,
    recentlyviewdslice: recentlyViewdReducer,
    cartslice: cartReducer,
    wishslice: wishlistReducer,
    detailprodslice: productDetailReducer,
    currentuser: currentUserReducer,
    reviewslice: reviewReducer,
    sellerslice: sellerInventoryReducer,
    authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// export const useAppDispatch = () => useDispatch<AppDispatch>();
