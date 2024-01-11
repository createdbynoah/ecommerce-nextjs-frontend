import React from 'react';

import { getProduct, getAllProducts } from '@/lib/client';
import { ProductDetails, ProductMarquee } from '@/components';

const ProductPage = async ({ params }) => {
  const product = await getProduct(params.slug);
  const products = await getAllProducts();

  return (
    <>
      <ProductDetails product={product} products={products} />
      <ProductMarquee products={products} />
    </>
  );
};

export default ProductPage;
