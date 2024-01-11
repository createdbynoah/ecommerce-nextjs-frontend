import React from 'react';
import Link from 'next/link';

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
  return (
    <div className="footer-banner-container">
      <div className="banner-grid">
        <div className="grid__item left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="grid__item center">
          <img src={imageUrls.url} alt="" className="footer-banner-image" />
        </div>
        <div className="grid__item right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{description}</p>
          <div className="flex-item">
            <Link href={`/product/${product.slug.current}`}>
              <button type="button">{buttonText}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
