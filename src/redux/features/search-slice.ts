import shopData from '@/components/Shared/DummyData/shopData';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  products: never[];
  length: number;
  recentSearches: string[];
  currentQuery: string;
}

const initialState: SearchState = {
  recentSearches: [],
  currentQuery: "",
};

const MAX_RECENTS = 5;


export const performSearch = createAsyncThunk(
    'search/performSearch',
    async (query: string) => {
      const allProducts = shopData; 
      return allProducts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));
    }
  );
  

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
});
  
  export const { setQuery, addRecentSearch, clearRecentSearches } = searchSlice.actions;
  export default searchSlice.reducer;