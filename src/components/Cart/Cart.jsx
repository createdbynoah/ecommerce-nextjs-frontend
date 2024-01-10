'use client';
import React, { useRef } from 'react';

import { toast } from 'react-hot-toast';

import { useStateContext } from '@/context/StateContext';
import { CartFooter, CartHeader, CartItems, EmptyCart } from '@/components';

const Cart = () => {
  const cartRef = useRef();
  const { totalItems, totalPrice, cartItems, setShowCart, toggleCartItemQty } =
    useStateContext();

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <CartHeader
          hideCart={() => setShowCart(false)}
          totalItems={totalItems}
        />
        {cartItems.length === 0 && (
          <EmptyCart hideCart={() => setShowCart(false)} />
        )}
        <CartItems changeItemQty={toggleCartItemQty} items={cartItems} />
        {cartItems.length && (
          <CartFooter totalPrice={totalPrice} cartRef={cartRef} />
        )}
      </div>
    </div>
  );
};

export default Cart;
