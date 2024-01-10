import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

const CartItem = ({ item, changeItemQty, removeItemFromCart }) => {
  return (
    <div className="product" key={item._id}>
      <img src={item?.imageUrls[0].url} alt="" className="cart-product-image" />
      <div className="item-desc">
        <div className="flex top">
          <h5>{item.name}</h5>
          <h4>${item.price}</h4>
        </div>
        <div className="flex bottom">
          <div>
            <p className="quantity-desc">
              <span
                className="minus"
                onClick={() => changeItemQty(item._id, 'dec')}
              >
                <AiOutlineMinus />
              </span>
              <span className="num">{item.quantity}</span>
              <span
                className="plus"
                onClick={() => changeItemQty(item._id, 'inc')}
              >
                <AiOutlinePlus />
              </span>
            </p>
          </div>
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
