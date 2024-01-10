'use client';
import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import { useStateContext } from '@/context/StateContext';

const Navbar = () => {
  const { totalItems } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">BuyMyGear.</Link>
      </p>
      <button type="button" className="cart-icon" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalItems}</span>
      </button>
    </div>
  );
};

export default Navbar;
