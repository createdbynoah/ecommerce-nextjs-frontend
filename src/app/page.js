import React from 'react';

import { getAssets } from '@/lib/client';

import { Product, FooterBanner, HeroBanner } from '@/components';

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
      <div className="categories-container">
        {['Cameras', 'Lighting', 'Audio', 'Photo', 'Video', 'All'].map(
          (category, index) => (
            <div className="category" key={index}>
              {category}
            </div>
          )
        )}
      </div>
      <div className="products-container">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      {/* <div className="products-container">
        <Products />
      </div> */}
      <FooterBanner footerBanner={banners && banners[0]} />
    </>
  );
};

export default Home;
