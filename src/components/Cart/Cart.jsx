'use client';
import React, { useState, useEffect } from 'react';

import { toast } from 'react-hot-toast';

import { useStateContext } from '@/context/StateContext';
import { CartFooter, CartHeader, CartItems, EmptyCart } from '@/components';
import getStripe from '@/lib/stripeClient';

const Cart = () => {
  const [isTosChecked, setIsTosChecked] = useState(false); // [1
  const {
    totalItems,
    totalPrice,
    cartItems,
    showCart,
    setShowCart,
    toggleCartItemQty,
    onRemoveFromCart,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();
    console.log('cartItems in Cart', cartItems);

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartItems }),
    });

    if (response.status === 500) {
      toast.error('Something went wrong, please try again later.');
      return;
    }

    const data = await response.json();
    console.log('data in Cart', data);
    toast.loading('Redirecting to Stripe...');
    stripe.redirectToCheckout({ sessionId: data.id });
  };

  const emptyCart = cartItems.length === 0;

  return (
    <div className="cart-wrapper">
      <div
        className={`cart-container ${showCart ? 'show' : ''} ${
          emptyCart ? 'empty' : ''
        }`}
      >
        <CartHeader
          hideCart={() => setShowCart(false)}
          totalItems={totalItems}
        />
        {emptyCart && <EmptyCart hideCart={() => setShowCart(false)} />}
        {!emptyCart && (
          <>
            <CartItems
              changeItemQty={toggleCartItemQty}
              items={cartItems}
              removeItemFromCart={onRemoveFromCart}
            />
            <CartFooter
              totalPrice={totalPrice}
              handleCheckout={handleCheckout}
              isTosChecked={isTosChecked}
              handleTosChecked={() => setIsTosChecked(!isTosChecked)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
