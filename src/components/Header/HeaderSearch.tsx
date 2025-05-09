
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce/index";

export const HeaderSearch = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get('query') || '';
    const [input, setInput] = useState(initialQuery);
    const debouncedQuery = useDebounce(input, 400);

  // Navigate when debounced query changes
  useEffect(() => {
    if (debouncedQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(debouncedQuery)}`);
    }
  }, [debouncedQuery]);

  return (
    <div className="mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Cari produk..."
        className="w-full border border-gray-300 p-2 rounded"
      />
    </div>
  );
};

export default HeaderSearch;
