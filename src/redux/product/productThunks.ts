import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

// Replace this with your real API call
export const fetchProductById = createAsyncThunk<Product, string>(
  "productDetails/fetchProductById",
  async (productId) => {
    const res = await fetch(`/api/products/${productId}`);
    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }
    const data = await res.json();
    return data;
  }
);
