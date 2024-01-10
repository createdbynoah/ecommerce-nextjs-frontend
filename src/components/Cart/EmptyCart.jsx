import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

const EmptyCart = ({ hideCart }) => {
  return (
    <div className="empty-cart">
      <AiOutlineShopping size={150} />
      <h3>Your shopping cart is empty.</h3>
      <Link href="/">
        <button type="button" className="btn" onClick={hideCart}>
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
