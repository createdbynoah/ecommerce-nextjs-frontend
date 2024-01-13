'use client';
import React, { useState } from 'react';

import {
  AiOutlinePlusCircle,
  AiFillPlusCircle,
  AiOutlineMinusCircle,
  AiFillMinusCircle,
} from 'react-icons/ai';

const QuantityButtons = ({
  quantity,
  stock,
  increaseQty,
  decreaseQty,
  totalQty,
}) => {
  const [isAddHovered, setIsAddHovered] = useState(false);
  const [isMinusHovered, setIsMinusHovered] = useState(false);

  const handleIncreaseQty = () => {
    if (totalQty < stock && stock > 0) {
      increaseQty();
    }
  };

  const handleDecreaseQty = () => {
    if (quantity > 1) {
      decreaseQty();
    }
  };

  return (
    <div className="quantity-btns">
      <button
        type="button"
        className={`minus ${quantity <= 1 ? 'disabled' : ''}`}
        onClick={handleDecreaseQty}
        onMouseEnter={() => setIsMinusHovered(true)}
        onMouseLeave={() => setIsMinusHovered(false)}
      >
        {isMinusHovered && quantity > 1 ? (
          <AiFillMinusCircle />
        ) : (
          <AiOutlineMinusCircle />
        )}
      </button>
      <span className="num">{quantity}</span>
      <button
        type="button"
        className={`plus ${totalQty >= stock ? 'disabled' : ''}`}
        onClick={handleIncreaseQty}
        onMouseEnter={() => setIsAddHovered(true)}
        onMouseLeave={() => setIsAddHovered(false)}
      >
        {isAddHovered && totalQty < stock ? (
          <AiFillPlusCircle />
        ) : (
          <AiOutlinePlusCircle />
        )}
      </button>
    </div>
  );
};

export default QuantityButtons;
