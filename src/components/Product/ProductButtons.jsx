import React from 'react';

const ProductButtons = ({ product, addToCart, quantity, handleBuyNow }) => {
  return (
    <div className="buttons">
      <button
        type="button"
        className="add-to-cart"
        onClick={() => addToCart(product, quantity)}
      >
        Add to Cart
      </button>
      <button type="button" className="buy-now" onClick={handleBuyNow}>
        Buy Now
      </button>
    </div>
  );
};

export default ProductButtons;
