'use client';
import React from 'react';
import Link from 'next/link';
import { useMediaQuery } from '@mui/material';

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    description,
    midText,
    product,
    buttonText,
    imageUrls,
  },
}) => {
  const isMobile = useMediaQuery('(max-width: 800px)');
  return (
    <div className="footer-banner-container">
      <div className="banner-grid">
        <div className="grid__item a">
          <p>{discount}</p>
          <div className="heading-text">
            <h3>{largeText1}</h3>
            <h3>{largeText2}</h3>
          </div>
          <p>{saleTime}</p>
        </div>

        <div className="grid__item b">
          {!isMobile && (
            <img src={imageUrls.url} alt="" className="footer-banner-image" />
          )}
          {isMobile && (
            <div className="flex-item">
              <Link href={`/product/${product.slug.current}`}>
                <button type="button">{buttonText}</button>
              </Link>
            </div>
          )}
        </div>
        <div className="grid__item c">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{description}</p>
          {!isMobile && (
            <div className="flex-item">
              <Link href="/products">
                <button type="button">{buttonText}</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
