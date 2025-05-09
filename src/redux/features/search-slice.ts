import shopData from '@/components/Shared/DummyData/shopData';
import { defaultProduct, Product } from '@/types/product';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  products: Product[] | null;
  length: number;
  recentSearches: string[];
  currentQuery: string;
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
    recentSearches: [],
    currentQuery: "",
    products: null,
    length: 0,
    loading: false,
    error: null,
};

const MAX_RECENTS = 5;

//for dummy
export const performSearch = createAsyncThunk<Product[], string>(
    'search/performSearch',
    async (query: string) => {
      const allProducts = shopData; 
      return allProducts.filter(p => 
        p.title.toLowerCase().includes(query.toLowerCase()));
    }
  );
//for real BE
// export const performSearch = createAsyncThunk<Product[], string>(
//   "search/performSearch",
//   async (query) => {
//     const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
//     if (!res.ok) throw new Error("Search failed");
//     return await res.json();
//   }
// );
  const searchSlice = createSlice({
    name: 'searchslice',
    initialState,
    reducers: {
      setQuery(state, action: PayloadAction<string>) {
        state.currentQuery = action.payload;
      },
      addRecentSearch(state, action: PayloadAction<string>) {
        const term = action.payload.trim();
  
        // Remove duplicate if it exists already
      state.recentSearches = state.recentSearches.filter((t) => t.toLowerCase() !== term.toLowerCase());

      // Add to front
      state.recentSearches.unshift(term);

      // Limit to MAX_RECENTS
      if (state.recentSearches.length > MAX_RECENTS) {
        state.recentSearches = state.recentSearches.slice(0, MAX_RECENTS);
      }
    },
    clearRecentSearches(state) {
      state.recentSearches = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(performSearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(performSearch.fulfilled, (state, action) => {
        state.products = action.payload;
        state.length = action.payload.length;
        state.loading = false;
      })
      .addCase(performSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to search";
      });
  },
});
  
  export const { setQuery, addRecentSearch, clearRecentSearches } = searchSlice.actions;
  export default searchSlice.reducer;