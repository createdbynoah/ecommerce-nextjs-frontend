'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TbShoppingBag } from 'react-icons/tb';
import { useMediaQuery } from '@mui/material';

import BuyMyGearLight from '../../public/images/buymygear-light.svg';
import BuyMyGearDark from '../../public/images/buymygear-dark.svg';
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

  const isMobile = useMediaQuery('(max-width: 800px)');
  const isDark = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <div className="navbar-container">
      <div className="nav">
        <p className="logo">
          <Link href="/">
            <Image
              src={isDark ? BuyMyGearDark : BuyMyGearLight}
              height={isMobile ? 22 : 28}
            ></Image>
          </Link>
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
