import React from 'react';
import { useMediaQuery } from '@mui/material';
import { TiDeleteOutline } from 'react-icons/ti';
import { QuantityButtons } from '@/components';

const CartItem = ({ item, changeItemQty, removeItemFromCart }) => {
  const { quantity } = item;
  const isMobile = useMediaQuery('(max-width: 800px)');
  return (
    <div className="product" key={item._id}>
      <div className="row">
        {!isMobile && (
          <img
            src={item?.imageUrls[0].url}
            alt=""
            className="cart-product-image"
          />
        )}
        {isMobile && (
          <>
            <img
              src={item?.imageUrls[0].url}
              alt=""
              className="cart-product-image"
            />
            <QuantityButtons
              quantity={quantity}
              increaseQty={() => changeItemQty(item._id, 'inc')}
              decreaseQty={() => changeItemQty(item._id, 'dec')}
              stock={item.stock}
              totalQty={quantity}
            />
          </>
        )}
      </div>
      <div className="item-desc">
        <div className="flex top">
          <h5>{item.name}</h5>
          {!isMobile && <p className="price">{item.priceDisplay}</p>}
        </div>
        {!isMobile && (
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
              Remove
            </button>
          </div>
        )}
        {isMobile && (
          <div className="flex bottom">
            <p className="price">{item.priceDisplay}</p>
            <button
              type="button"
              className="remove-item"
              onClick={() => removeItemFromCart(item)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;
