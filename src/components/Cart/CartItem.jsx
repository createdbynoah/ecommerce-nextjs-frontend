import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { QuantityButtons } from '@/components';

const CartItem = ({ item, changeItemQty, removeItemFromCart }) => {
  const { quantity } = item;
  return (
    <div className="product" key={item._id}>
      <img src={item?.imageUrls[0].url} alt="" className="cart-product-image" />
      <div className="item-desc">
        <div className="flex top">
          <h5>{item.name}</h5>
          <p className="price">${item.price}</p>
        </div>
        <div className="flex bottom">
          <QuantityButtons
            quantity={quantity}
            increaseQty={() => changeItemQty(item._id, 'inc')}
            decreaseQty={() => changeItemQty(item._id, 'dec')}
            stock={item.stock}
            totalQty={quantity}
          />
          <button
            type="button"
            className="remove-item"
            onClick={() => removeItemFromCart(item)}
          >
            <TiDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
