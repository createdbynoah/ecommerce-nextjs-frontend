import React from 'react';
import Image from 'next/image';

import { client, getAssets } from '../lib/client';

import {
  Product,
  Footer,
  FooterBanner,
  HeroBanner,
  Navbar,
} from './components';

const Home = async () => {
  const { products, categories, banners } = await getAssets();
  console.log('products', products);
  console.log('categories', categories);
  console.log('banners', banners);

  return (
    <>
      <Navbar />
      <HeroBanner />
      {console.log('banners', banners)}
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => {
          return product.name;
        })}
      </div>
      <FooterBanner />
    </>
  );
};

export default Home;
