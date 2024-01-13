import React from 'react';
import { QuantityButtons } from '@/components';

const ProductQuantity = ({
  increaseQty,
  decreaseQty,
  quantity,
  stock,
  totalQty,
}) => {
  return (
    <div className="quantity">
      <div className="quantity-title">
        <h3>Quantity:</h3>
        <p>({stock} available)</p>
      </div>
      {!!stock ? (
        <QuantityButtons
          quantity={quantity}
          stock={stock}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          totalQty={totalQty}
        />
      ) : (
        <p className="out-of-stock-text">Out of stock</p>
      )}
    </div>
  );
};

export default ProductQuantity;
