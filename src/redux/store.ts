import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import quickViewReducer from "./features/quickView-slice";
import cartReducer from "./features/cart-slice";
import wishlistReducer from "./features/wishlist-slice";
import productDetailReducer from "./features/product-details";
import currentUserReducer from "./features/currentUser-slice";
import reviewReducer from "./features/review-slice";
import sellerInventoryReducer from "./features/sellerInventory-slice";
import statusReducer from"./features/globalStatus-slice";

export const store = configureStore({
  reducer: {
    statusslice: statusReducer,
    viewslice: quickViewReducer,
    cartslice: cartReducer,
    wishslice: wishlistReducer,
    detailprodslice: productDetailReducer,
    currentuser: currentUserReducer,
    reviewslice: reviewReducer,
    sellerslice: sellerInventoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();