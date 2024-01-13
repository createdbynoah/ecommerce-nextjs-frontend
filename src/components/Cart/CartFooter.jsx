import React from 'react';

import { formatPrice } from '@/lib/utils';

const CartFooter = ({ totalPrice, cartRef, handleCheckout }) => {
  return (
    <div className="cart-bottom">
      <div className="total">
        <h3>Subtotal:</h3>
        <h3>{formatPrice(totalPrice)}</h3>
      </div>
      <div className="btn-container">
        <button type="button" className="btn" onClick={handleCheckout}>
          Pay with Stripe
        </button>
      </div>
    </div>
  );
};

export default CartFooter;
