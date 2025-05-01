import { Product } from "@/types/product";

interface Props {
  product: Product;
}

const ProductAttributes = ({ product }: Props) => {
  const { productAttrb } = product;

  const hasAttributes =
    productAttrb?.productType || productAttrb?.isEcoFriendly || productAttrb?.isOrganic;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Product Attributes</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {productAttrb?.productType && (
          <li>
            <strong>Type:</strong> {productAttrb.productType}
          </li>
        )}
        {productAttrb?.isEcoFriendly && (
          <li>
            <strong>Eco-Friendly:</strong> Yes
          </li>
        )}
        {productAttrb?.isOrganic && (
          <li>
            <strong>Organic:</strong> Yes
          </li>
        )}
        {!hasAttributes && <li>No product attributes available.</li>}
      </ul>
    </div>
  );
};

export default ProductAttributes;
