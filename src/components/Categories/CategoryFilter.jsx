'use client';
import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

import { useStateContext } from '@/context/StateContext';

const CategoryFilter = ({ categories, products }) => {
  const { onFilterProducts, selectedCategory, setSelectedCategory } =
    useStateContext();

  const handleFilterProducts = async (category, products) => {
    if (category === selectedCategory) {
      return;
    }
    setSelectedCategory(category);
    await onFilterProducts(category, products);
  };

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div
          className={`category ${
            selectedCategory === category.name && 'active'
          }`}
          key={category._id}
          onClick={() => handleFilterProducts(category.name, category.products)}
        >
          {category.name} {category.products && `(${category.products.length})`}
        </div>
      ))}
      <div
        className={`category ${selectedCategory === 'All' && 'active'}`}
        onClick={() => handleFilterProducts('All', products)}
      >
        All
      </div>
    </div>
  );
};

export default CategoryFilter;
