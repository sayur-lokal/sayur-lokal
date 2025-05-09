import { Product } from "@/types/product";
import shopData from "@/components/Shared/DummyData/shopData";
import ProductItem from "@/components/Common/ProductItem";

const SimilarProducts = ({ currentProduct }: { currentProduct: Product }) => {
  const similar = shopData.filter(
    (item) =>
      item.id !== currentProduct.id &&
      item.category?.some((cat) => currentProduct.category?.includes(cat))
  );

  return (
    <section>
      <h3>Produk Serupa Lainnya</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {similar.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default SimilarProducts;
