"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { performSearch, setQuery } from "@/redux/features/search-slice";
import { SearchResultsGrid } from "@/components/Search/SearchResultsGrid";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";

const SearchPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const results = useAppSelector((state) => state.searchslice.products || []);

  useEffect(() => {
    if (query) {
      dispatch(setQuery(query));
      dispatch(performSearch(query));
    }
  }, [dispatch, query]);

  return (
    <div className="p-6">
    {results.length > 0 ? (
      <SearchResultsGrid products={results} />
    ) : (
      <p className="text-gray-600">No results found for “{query}”.</p>
    )}
  </div>
);
}

export default SearchPage;
