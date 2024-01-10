import React from 'react';

import { CartItem } from '@/components';

const CartItems = ({ items, changeItemQty, removeItemFromCart }) => {
  return (
    <div className="product-container">
      {items.length &&
        items.map((item) => (
          <CartItem
            key={item._id}
            item={item}
            changeItemQty={changeItemQty}
            removeItemFromCart={removeItemFromCart}
          />
        ))}
    </div>
  );
};

export default CartItems;