import React from 'react';

const ProductButtons = ({ product, addToCart, quantity, handleBuyNow }) => {
  const { outOfStock } = product;
  return (
    <div className="buttons">
      <button
        type="button"
        className={`add-to-cart ${outOfStock ? 'disabled' : ''}`}
        onClick={() => addToCart(product, quantity)}
        disabled={outOfStock}
      >
        Add to Cart
      </button>
      <button
        type="button"
        className={`buy-now ${outOfStock ? 'disabled' : ''}`}
        onClick={handleBuyNow}
        disabled={outOfStock}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductButtons;
