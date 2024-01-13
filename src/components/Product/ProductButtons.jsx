import React from 'react';

const ProductButtons = ({
  product,
  addToCart,
  quantity,
  handleBuyNow,
  isMaxQtyInCart,
}) => {
  const { outOfStock } = product;

  const isDisabled = outOfStock || isMaxQtyInCart;
  return (
    <div className="buttons">
      <button
        type="button"
        className={`add-to-cart ${isDisabled ? 'disabled' : ''}`}
        onClick={() => addToCart(product, quantity)}
        disabled={isDisabled}
      >
        {isDisabled
          ? outOfStock
            ? 'Not Available'
            : 'Max Qty Added'
          : 'Add to Cart'}
      </button>
      <button
        type="button"
        className={`buy-now ${isDisabled ? 'disabled' : ''}`}
        onClick={handleBuyNow}
        disabled={isDisabled}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductButtons;
