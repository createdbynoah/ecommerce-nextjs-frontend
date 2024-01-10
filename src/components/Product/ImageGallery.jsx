'use client';
import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="image-container">
        <img
          src={images.length !== 0 && images[index].url}
          alt=""
          className="product-detail-image"
        />
      </div>
      <div className="small-images-container">
        {images.map((image, i) => (
          <img
            src={image.url}
            className={
              i === index ? 'small-image selected-image' : 'small-image'
            }
            onMouseEnter={() => setIndex(i)}
            key={image.key}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
