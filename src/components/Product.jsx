import React from 'react';
import Link from 'next/link';

import { client, urlFor } from '../lib/client';

const Product = ({ product: { imageUrls, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={imageUrls.length !== 0 && imageUrls[0]}
            alt={name}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
          <div className="product-card-info"></div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
