import React from "react";
import Price from "../../Price";

interface ProductPriceProps {
  price: number;
  discountedPrice?: number;
}

const ProductPrice = ({ price, discountedPrice }: ProductPriceProps) => {
  const hasDiscount = discountedPrice && discountedPrice < price;

  return (
    <div className="flex items-center gap-2 font-medium text-lg">
      <span className="text-dark">
        <Price price={hasDiscount ? discountedPrice : price} />
      </span>
      {hasDiscount && (
        <span className="text-dark-4 line-through">
          <Price price={price} />
        </span>
      )}
    </div>
  );
};

export default ProductPrice;