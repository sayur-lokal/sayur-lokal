import SingleGridItem from "@/components/Shop/SingleGridItem";
import { Product } from "@/types/product"; 

interface Props {
  products: Product[];
}

export const SearchResultsGrid: React.FC<Props> = ({ products }) => {
    if (!products.length) {
        return <p className="text-gray-500">No matching products found.</p>;
      }
  
    return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <SingleGridItem key={product.id} item={product} />
      ))}
    </div>
  );
};
