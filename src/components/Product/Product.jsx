'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  TbShoppingBagPlus,
  TbShoppingBagCheck,
  TbShoppingBagX,
} from 'react-icons/tb';
import { LuTrash2 } from 'react-icons/lu';

import { useStateContext } from '@/context/StateContext';

const Product = ({ product }) => {
  const { onAddToCart, cartItems, onRemoveFromCart } = useStateContext();
  const [isHovered, setIsHovered] = useState(false);

  const { imageUrls, name, slug, price } = product;

  const handleAddToCart = (product) => {
    if (cartItems.find((item) => item._id === product._id)) {
      onRemoveFromCart(product);
    } else {
      onAddToCart(product);
    }
  };

  return (
    <div>
      <div className="product-card">
        <Link href={`/product/${slug.current}`}>
          <div className="row image-container">
            <img
              src={imageUrls && imageUrls.length !== 0 && imageUrls[0].url}
              alt={name}
              width={250}
              height={250}
              className="product-image"
            />
          </div>
        </Link>
        <div className="row">
          <Link href={`/product/${slug.current}`}>
            <div className="col">
              <p className="product-name ">{name}</p>
              <p className="product-price">${price}</p>
            </div>
          </Link>
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
        </div>
      </div>
    </div>
  );
};

export default Product;
