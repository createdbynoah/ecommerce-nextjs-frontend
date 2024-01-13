import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';

const CartHeader = ({ hideCart, totalItems }) => {
  return (
    <div className="cart-header">
      <button type="button" className="btn-back" onClick={hideCart}>
        <AiOutlineLeft />
        <span className="btn-back-text">Back</span>
      </button>
      <div className="cart-heading">
        <h2>
          Your Cart<span className="cart-count"> ({totalItems})</span>
        </h2>
      </div>
    </div>
  );
};

export default CartHeader;
