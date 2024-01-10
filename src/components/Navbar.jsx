'use client';
import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import { useStateContext } from '@/context/StateContext';
import { Cart } from '@/components';

const Navbar = () => {
  const { totalItems, showCart, setShowCart } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">BuyMyGear.</Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalItems}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
