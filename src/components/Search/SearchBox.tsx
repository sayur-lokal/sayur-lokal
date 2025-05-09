

import { setQuery, addRecentSearch } from "@/redux/features/search-slice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";



const POPULAR_SEARCHES = ["Siap Saji", "Jamur", "Paket Masak", "Organic", "Eco Friendly"];

export const SearchBox = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const currentQuery = useAppSelector((state) => state.searchslice.currentQuery);
    const recentSearched = useAppSelector((state) => state.searchslice.recentSearches);
  

    const handleSearch = (term: string) => {
        const trimmed = term.trim();
        if (!trimmed) return;

        dispatch(setQuery(trimmed));
        dispatch(addRecentSearch(trimmed));
        router.push(`/search?query=${encodeURIComponent(trimmed)}`);
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-xl max-w-md mx-auto">
        <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-300"
            placeholder="Search for..."
            value={currentQuery}
            onChange={(e) => dispatch(setQuery(e.target.value))}
            onKeyDown={(e) => e.key === "Enter" && handleSearch(currentQuery)}
        />

        <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Popular Searches</h4>
            <div className="flex flex-wrap gap-2">
            {POPULAR_SEARCHES.map((term) => (
                <button
                key={term}
                onClick={() => handleSearch(term)}
                className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full hover:bg-green-200"
                >
                {term}
                </button>
            ))}
            </div>
        </div>

        {recentSearched.length > 0 && (
            <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Your Recent Searches</h4>
            <div className="flex flex-wrap gap-2">
                {recentSearched.map((term) => (
                <button
                    key={term}
                    onClick={() => handleSearch(term)}
                    className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full hover:bg-gray-200"
                >
                    {term}
                </button>
                ))}
            </div>
            </div>
        )}
        </div>
    );
    };
