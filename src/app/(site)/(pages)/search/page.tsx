'use client';
import { useSearchParams } from "next/navigation";
import shopData from "@/components/Shared/DummyData/shopData";
import HeaderSearch from "@/components/Header/HeaderSearch";
import ProductTitle from "@/components/Shared/InfoProps/ProductTitle";
// import { AppDispatch, useAppSelector } from "@/redux/store";
// import { useDispatch } from "react-redux";

const SearchPage = () => {
  // const dispatch = useDispatch<AppDispatch>();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const category = searchParams.get('category');

  // const results = useAppSelector((state) => state.searchslice.products || []);

  const filteredProducts = shopData.filter(product => {
    const matchesQuery = product.title.toLowerCase().includes(query);
    const matchesCategory = category ? (product.category ?? "").includes(category) : true;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="max-w-[1170px] mx-auto px-4 py-6">
      <HeaderSearch />
      <h2 className="text-xl font-semibold mb-4">
        Hasil pencarian untuk: "{query}"
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border p-2 rounded shadow-sm">
            <ProductTitle 
              title={product.title} 
              link={`/shop-details/${product.id}`} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};
<<<<<<< HEAD
=======

>>>>>>> 71f575c (wip/search-dynamic)

  
export default SearchPage;
