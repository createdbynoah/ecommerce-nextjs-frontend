import React from 'react';
import Image from 'next/image';
import NextBadge from '../../../public/nextjs-gray.svg';
import SanityBadge from '../../../public/sanity.svg';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        Made with ❤️ and{' '}
        <span>
          <a href="https://nextjs.org/" target="_blank">
            <Image
              src={NextBadge}
              alt="NextJS badge logo"
              className="footer-logo next-js"
              height={24}
            />
          </a>
        </span>
        {' + '}
        <span>
          <a href="https://www.sanity.io/" target="_blank">
            <Image
              src={SanityBadge}
              alt="Sanity badge logo"
              height={18}
              className="footer-logo sanity"
            />
          </a>
        </span>
        by{' '}
        <a href="https://noahrodgers.dev" target="_blank" className="link-text">
          Noah Rodgers
        </a>
      </p>
      {/* <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p> */}
    </div>
  );
};

export default Footer;
