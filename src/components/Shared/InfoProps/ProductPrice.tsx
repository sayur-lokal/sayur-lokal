import React from "react";
import Price from "../../Price";

interface ProductPriceProps {
  price: number;
  discountedPrice?: number;
}

const ProductPrice = ({ price, discountedPrice }: ProductPriceProps) => {
  const hasDiscount = discountedPrice && discountedPrice < price;

  return (
    <div className="flex flex-col">
      {hasDiscount ? (
        <>
          <span className="text-dark font-semibold text-xl">
            <Price price={discountedPrice} />
          </span>
          <span className="text-dark-4 line-through text-base">
            <Price price={price} />
          </span>
        </>
      ) : (
        <span className="text-dark font-semibold text-xl">
          <Price price={price} />
        </span>
      )}
    </div>
  );
};

export default ProductPrice;