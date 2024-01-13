import React from 'react';
import { Checkbox } from '@mui/material';

import { formatPrice } from '@/lib/utils';

const CartFooter = ({
  totalPrice,
  handleCheckout,
  handleTosChecked,
  isTosChecked,
}) => {
  return (
    <div className="cart-bottom">
      <div className="total">
        <div className="subtotal">
          <h3>Subtotal:</h3>

          <h3>{formatPrice(totalPrice)}</h3>
        </div>
        <div className="subtotal">
          <div className="shipping">
            <h4>Shipping:</h4>
            <p>(Shipping calculated at checkout)</p>
          </div>
          <h4>TBD</h4>
        </div>
      </div>
      <div className="tos">
        <Checkbox disableRipple onChange={handleTosChecked} />
        <p>
          By placing your order, you agree to the{' '}
          <a href="/terms-of-service">terms of service</a>. All sales are final.
        </p>
      </div>
      <div className="btn-container">
        <button
          type="button"
          className={`btn ${!isTosChecked && 'disabled'} `}
          onClick={handleCheckout}
          disabled={!isTosChecked}
        >
          Pay with Stripe
        </button>
      </div>
    </div>
  );
};

export default CartFooter;
