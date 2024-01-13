'use client';
import React from 'react';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { ImageGallery, ProductButtons, ProductQuantity } from '@/components';

import { useStateContext } from '@/context/StateContext';

const ProductDetails = ({ product }) => {
  const { name, description, price, imageUrls, stock, outOfStock } = product;
  const { onAddToCart, qty, incQty, decQty, setShowCart, cartItems } =
    useStateContext();

  const cartItem = cartItems.find((item) => item._id === product._id);
  const totalQty = cartItem ? cartItem.quantity + qty : qty;

  const isMaxQtyInCart = cartItem && cartItem.quantity >= stock;

  const handleBuyNow = () => {
    onAddToCart(product, qty);
    setShowCart(true);
  };

  return (
    <>
      <div className="product-detail-container">
        <ImageGallery images={imageUrls} />
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{description}</p>
          <p className="price">${price}</p>
          <ProductQuantity
            increaseQty={incQty}
            decreaseQty={decQty}
            quantity={qty}
            stock={stock}
            totalQty={totalQty}
          />
          {!outOfStock && (
            <ProductButtons
              product={product}
              quantity={qty}
              addToCart={onAddToCart}
              handleBuyNow={handleBuyNow}
              isMaxQtyInCart={isMaxQtyInCart}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
