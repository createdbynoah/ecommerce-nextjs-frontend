'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  TbShoppingBagPlus,
  TbShoppingBagCheck,
  TbShoppingBagX,
} from 'react-icons/tb';

import { useStateContext } from '@/context/StateContext';

const Product = ({ product }) => {
  const { onAddToCart, cartItems, onRemoveFromCart } = useStateContext();
  const [isHovered, setIsHovered] = useState(false);

  const { imageUrls, name, slug, price, condition, outOfStock, stock } =
    product;

  const handleAddToCart = (product) => {
    if (cartItems.find((item) => item._id === product._id)) {
      onRemoveFromCart(product);
    } else {
      onAddToCart(product);
    }
  };

  return (
    <div>
      <div className={`product-card ${outOfStock && 'out-of-stock'}`}>
        <Link href={`/product/${slug.current}`}>
          <div className="row image-container">
            <img
              src={imageUrls && imageUrls.length !== 0 && imageUrls[0].url}
              alt={name}
              width={250}
              height={250}
              className="product-image"
            />
            <div
              className={`condition ${
                condition ? condition.class : 'no-condition'
              }`}
            >
              <span>{condition ? condition.title : 'Used'}</span>
            </div>
          </div>
        </Link>
        <div className="row">
          <Link href={`/product/${slug.current}`}>
            <div className="col">
              <p className="product-name ">{name}</p>
              <div className="price-quantity">
                <span className="product-price">${price}</span>
                {stock > 0 && (
                  <span className="product-stock">({stock} available)</span>
                )}
              </div>
            </div>
          </Link>
          {!outOfStock && (
            <div
              className={`col btn-add ${
                cartItems.find((item) => item._id === product._id)
                  ? isHovered
                    ? 'hovered'
                    : 'added'
                  : 'not-added'
              }`}
            >
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => handleAddToCart(product)}
                type="button"
              >
                {cartItems.find((item) => item._id === product._id) ? (
                  isHovered ? (
                    <TbShoppingBagX />
                  ) : (
                    <TbShoppingBagCheck />
                  )
                ) : (
                  <TbShoppingBagPlus />
                )}
              </button>
            </div>
          )}
          {outOfStock && (
            <div className="col out-of-stock-text">Out of Stock</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
