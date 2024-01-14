'use client';
import React from 'react';
import { Tooltip, Fade, useMediaQuery } from '@mui/material';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { IoMdInformationCircle } from 'react-icons/io';

import { ImageGallery, ProductButtons, ProductQuantity } from '@/components';

import { useStateContext } from '@/context/StateContext';

const ProductDetails = ({ product }) => {
  const {
    name,
    description,
    condition,
    priceDisplay,
    imageUrls,
    stock,
    outOfStock,
  } = product;
  const { onAddToCart, qty, incQty, decQty, setShowCart, cartItems } =
    useStateContext();

  const isMobile = useMediaQuery('(max-width: 800px)');

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
          <div className="condition">
            <div className={`rating ${condition.class}`}>
              {[...Array(4)].map((_, i) =>
                i < condition.rating ? (
                  <AiFillStar key={i} />
                ) : (
                  <AiOutlineStar key={i} />
                )
              )}
            </div>
            <p className="separator">—</p>
            <p>{condition.title}</p>
            <Tooltip
              arrow
              TransitionComponent={Fade}
              enterTouchDelay={50}
              enterDelay={350}
              leaveDelay={100}
              leaveTouchDelay={1000}
              title={condition.description}
              placement={isMobile ? 'top' : 'right'}
            >
              <span className="tooltip-icon">
                <IoMdInformationCircle />
              </span>
            </Tooltip>
          </div>
          <h4>Details: </h4>
          <p>{description}</p>
          <p className="price">{priceDisplay}</p>
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
