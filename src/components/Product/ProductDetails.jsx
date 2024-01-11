'use client';
import React from 'react';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { ImageGallery, ProductButtons, ProductQuantity } from '@/components';

import { useStateContext } from '@/context/StateContext';

const ProductDetails = ({ product }) => {
  const { name, description, price, imageUrls } = product;
  const { onAddToCart, qty, incQty, decQty, setShowCart } = useStateContext();

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
            product={product}
            increaseQty={incQty}
            decreaseQty={decQty}
            quantity={qty}
          />
          <ProductButtons
            product={product}
            quantity={qty}
            addToCart={onAddToCart}
            handleBuyNow={handleBuyNow}
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
