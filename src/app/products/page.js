import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { getAllProducts, getCategories } from '@/lib/client';
import { FilteredProducts, CategoryFilter } from '@/components';

const ProductPage = async () => {
  const products = await getAllProducts();
  const categories = await getCategories();

  return (
    <>
      <div className="products-heading">
        <h2>
          <span className="text-primary">Everything</span> I'm Selling
        </h2>
        <p>All items listed are currently available for purchase. </p>
      </div>
      <CategoryFilter products={products} categories={categories} />
      <FilteredProducts
        products={products}
        className="all-products-container"
      />
      <div className="pagination">
        <div className="page-buttons">
          <button type="button">
            <FaChevronLeft />
          </button>
          {[...Array(5)].map((_, i) => (
            <button key={i} type="button" className="page">
              {i + 1}
            </button>
          ))}
          <button>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
