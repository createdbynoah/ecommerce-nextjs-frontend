import React from 'react';

const ProductButtons = ({ product, addToCart, quantity }) => {
  return (
    <div className="buttons">
      <button
        type="button"
        className="add-to-cart"
        onClick={() => addToCart(product, quantity)}
      >
        Add to Cart
      </button>
      <button type="button" className="buy-now" onClick="">
        Buy Now
      </button>
    </div>
  );
};

export default ProductButtons;
