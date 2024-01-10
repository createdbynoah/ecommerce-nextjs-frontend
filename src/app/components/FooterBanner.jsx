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
    imageUrl,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{description}</p>
          <Link href={`/product/SLUG`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <img src={imageUrl} alt="" className="footer-banner-image" />
      </div>
    </div>
  );
};

export default FooterBanner;
