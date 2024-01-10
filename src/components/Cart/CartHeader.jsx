import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';

const CartHeader = ({ hideCart, totalItems }) => {
  return (
    <button type="button" className="cart-heading" onClick={hideCart}>
      <AiOutlineLeft />
      <span className="heading">Your Cart</span>
      <span className="cart-num-items">({totalItems})</span>
    </button>
  );
};

export default CartHeader;
