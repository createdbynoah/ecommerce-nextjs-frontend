import Link from 'next/link';
import React from 'react';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div className="row">
        <div className="col a">
          <p className="beats-solo">{heroBanner.smallText}</p>
          <h3>{heroBanner.midText}</h3>
          <h1>{heroBanner.largeText1}</h1>
          <Link href="/products">
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
        </div>
        <div className="col col-image">
          <img src={heroBanner.imageUrls.url} alt="headphones" className="" />
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
