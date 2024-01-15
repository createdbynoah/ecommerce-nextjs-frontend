import React from 'react';

import { getAssets } from '@/lib/client';

import {
  Product,
  FooterBanner,
  HeroBanner,
  CategoryFilter,
  FilteredProducts,
} from '@/components';

const Home = async () => {
  const { products, categories, banners } = await getAssets();

  return (
    <>
      <HeroBanner heroBanner={banners.length && banners[0]} />
      <div className="products-heading">
        <h2>
          <span className="text-primary">Gear</span> I'm Selling
        </h2>
        <p>All items listed are currently available for purchase. </p>
      </div>
      <CategoryFilter categories={categories} products={products} />
      <FilteredProducts products={products} className={'products-container'} />
      <FooterBanner footerBanner={banners && banners[0]} />
    </>
  );
};

export default Home;
