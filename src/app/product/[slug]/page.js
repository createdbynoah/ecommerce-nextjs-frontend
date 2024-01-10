import React from 'react';

import { getProduct, getAllProducts } from '../../../lib/client';
import {
  ImageGallery,
  Product,
  ProductDetails,
  ProductButtons,
  ProductQuantity,
  ProductMarquee,
} from '@/components';

const ProductPage = async ({ params }) => {
  const product = await getProduct(params.slug);
  const { name, price, description, imageUrls } = product;
  const products = await getAllProducts();

  return (
    <div>
      <ProductDetails product={product} products={products} />
      <ProductMarquee products={products} />
    </div>
  );
};

export default ProductPage;
