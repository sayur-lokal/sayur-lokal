import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import quickViewReducer from "./features/quickView-slice";
import cartReducer from "./features/cart-slice";
import wishlistReducer from "./features/wishlist-slice";
import productDetailReducer from "./features/product-details";
import currentUserReducer from "./features/currentUser-slice";
import reviewReducer from "./features/review-slice";
import sellerInventoryReducer from "./features/sellerInventory-slice";
// import productReducer from "./features/product-slice";

export const store = configureStore({
  reducer: {
    // productslice: productReducer,
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
