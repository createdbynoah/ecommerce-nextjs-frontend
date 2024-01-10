'use client';
import React from 'react';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useStateContext } from '@/context/StateContext';

const ProductQuantity = ({ product, increaseQty, decreaseQty, quantity }) => {
  return (
    <div className="quantity">
      <h3>Quantity:</h3>
      <p className="quantity-desc">
        <span className="minus" onClick={decreaseQty}>
          <AiOutlineMinus />
        </span>
        <span className="num" onClick="">
          {quantity}
        </span>
        <span className="plus" onClick={increaseQty}>
          <AiOutlinePlus />
        </span>
      </p>
    </div>
  );
};

export default ProductQuantity;
