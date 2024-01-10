import React from 'react';

const CartFooter = ({ totalPrice, cartRef }) => {
  return (
    <div className="cart-bottom">
      <div className="total">
        <h3>Subtotal:</h3>
        <h3>${totalPrice}</h3>
      </div>
      <div className="btn-container">
        <button type="button" className="btn" onclick="">
          Pay with Stripe
        </button>
      </div>
    </div>
  );
};

export default CartFooter;
