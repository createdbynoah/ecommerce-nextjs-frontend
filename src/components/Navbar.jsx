'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { TbShoppingBag } from 'react-icons/tb';

import { useStateContext } from '@/context/StateContext';
import { Cart } from '@/components';

const Navbar = () => {
  const { totalItems, showCart, setShowCart } = useStateContext();

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        nav.classList.add('shadow');
      } else {
        nav.classList.remove('shadow');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const nav = document.querySelector('nav');
    if (showCart) {
      document.body.classList.add('no-scroll');
      nav.classList.remove('shadow');
    } else {
      document.body.classList.remove('no-scroll');
      if (window.scrollY > 0) {
        nav.classList.add('shadow');
      }
    }
  }, [showCart]);

  return (
    <div className="navbar-container">
      <div className="nav">
        <p className="logo">
          <Link href="/">BuyMyGear.</Link>
        </p>
        <div className="nav-links">
          <Link href="/products">All Products</Link>
          <Link href="/faq">FAQ</Link>
        </div>
      </div>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <TbShoppingBag />
        <span className="cart-item-qty">{totalItems}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
