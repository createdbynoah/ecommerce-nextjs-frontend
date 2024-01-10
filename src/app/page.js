import React from 'react';
import Image from 'next/image';

import { client, getAssets } from '../lib/client';

import {
  Product,
  Products,
  Footer,
  FooterBanner,
  HeroBanner,
  Navbar,
} from './components';

const Home = async () => {
  const { products, categories, banners } = await getAssets();

  return (
    <>
      <Navbar />
      <HeroBanner heroBanner={banners.length && banners[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      {/* <div className="products-container">
        <Products />
      </div> */}
      <FooterBanner />
    </>
  );
};

export default Home;
