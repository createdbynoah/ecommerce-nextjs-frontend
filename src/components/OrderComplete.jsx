'use client';
import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '@/context/StateContext';
import { celebrate } from '@/lib/utils';

const OrderComplete = () => {
  const { setCartItems, setTotalItems, setTotalPrice } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalItems(0);
    setTotalPrice(0);
    celebrate();
  }, []);

  return (
    <div className="success">
      <p className="icon">
        <BsBagCheckFill />
      </p>
      <h2>Thank you for your order!</h2>
      <div className="description">
        <p className="email-msg">Check your email inbox for your receipt.</p>
        <p>
          If you have any questions, please email{' '}
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
      </div>
      <Link href="/">
        <button type="button" width="300px" className="btn">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default OrderComplete;
