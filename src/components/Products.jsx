'use client';
import React, { useState, useEffect } from 'react';

import { client, urlFor } from '../lib/client';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const initialProducts = await client.fetch(`*[_type == "product"]`);
      const products = initialProducts.map((product) => {
        return {
          ...product,
          imageUrls: product.image.map((imageUrl) => urlFor(imageUrl)),
        };
      });
      setProducts(products);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </>
  );
};

export default Products;
