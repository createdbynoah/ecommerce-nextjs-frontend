'use client';
import React, { useEffect } from 'react';

import { Product } from '@/components';
import { useStateContext } from '@/context/StateContext';

const FilteredProducts = ({ products, className }) => {
  const { filteredProducts, setFilteredProducts } = useStateContext();

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className={className}>
      {console.log('filteredProducts', filteredProducts)}
      {filteredProducts.length !== 0 &&
        filteredProducts.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      {filteredProducts.length === 0 && (
        <div className="products-empty">
          <p className="shrug">🤷</p>
          <p>Nothing to see here...</p>
        </div>
      )}
    </div>
  );
};

export default FilteredProducts;
