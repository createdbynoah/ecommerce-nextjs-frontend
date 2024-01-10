import Link from 'next/link';
import React from 'react';

import { urlFor } from '../../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={heroBanner.imageUrl}
          alt="headphones"
          className="hero-banner-image"
        />
        <div>
          <Link href="/product/ID">
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
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
