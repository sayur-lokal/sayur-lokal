import { Product } from "@/types/product";
import Price from "../Price";


interface Props {
  product: Product;
}


export const ProductDetailCard = ({ product }: Props) => {
  return (
    <div className="text-base text-gray-700 leading-relaxed space-y-2">
      <div>
        <span className="font-semibold">Price:</span>{" "}
        <span className="text-blue font-bold">
          <Price price={product.discountedPrice ?? product.price} />
        </span>
        {product.discountedPrice && (
          <span className="line-through ml-2 text-gray-500">
            <Price price={product.price} />
          </span>
        )}
      </div>
      <div>
        <span className="font-semibold">Category:</span> {product.categoryId}
      </div>
      {/* <div>
        <span className="font-semibold">Shop:</span> {product.shopId}
      </div> */}
    </div>
  );
};