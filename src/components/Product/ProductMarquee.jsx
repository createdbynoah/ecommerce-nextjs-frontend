import React from 'react';
import { Product } from '@/components';

const ProductMarquee = ({ products }) => {
  return (
    <div className="maylike-products-wrapper">
      <h2>You may also like</h2>
      <div className="marquee">
        <div className="maylike-products-container">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductMarquee;
