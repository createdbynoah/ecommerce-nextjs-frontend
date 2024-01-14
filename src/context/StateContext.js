'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

import { getProductsByCategory } from '@/lib/client';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [qty, setQty] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const localCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (localCartItems) {
      setCartItems(localCartItems);
    }
  }, []);

  useEffect(() => {
    const localTotalPrice = JSON.parse(localStorage.getItem('totalPrice'));
    if (localTotalPrice) {
      setTotalPrice(localTotalPrice);
    }
  }, []);

  useEffect(() => {
    const localTotalItems = JSON.parse(localStorage.getItem('totalItems'));
    if (localTotalItems) {
      setTotalItems(localTotalItems);
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
  }, [totalPrice]);

  useEffect(() => {
    localStorage.setItem('totalItems', JSON.stringify(totalItems));
  }, [totalItems]);

  let foundProduct;
  let index;

  const onFilterProducts = async (category, products) => {
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filteredProducts = await getProductsByCategory(category);
      if (!filteredProducts) {
        setFilteredProducts([]);
      } else {
        setFilteredProducts(filteredProducts);
      }
    }
  };

  const onAddToCart = (product, qty = 1) => {
    const exist = cartItems.find((item) => item._id === product._id);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * qty);
    setTotalItems((prevTotalItems) => prevTotalItems + qty);
    if (exist) {
      const newCartItems = cartItems.map((itemInCart) => {
        if (itemInCart._id === product._id) {
          return { ...itemInCart, quantity: itemInCart.quantity + qty };
        }
      });
      setCartItems(newCartItems);
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, quantity: qty },
      ]);
    }
    toast.success(`${qty} ${product.name} added to cart`);
    setQty(1);
  };

  const onRemoveFromCart = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);
    setCartItems((prevCartItems) => {
      if (prevCartItems.length === 1) {
        localStorage.setItem('cartItems', JSON.stringify([]));
        return [];
      } else {
        return newCartItems;
      }
    });
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalItems((prevTotalItems) => prevTotalItems - foundProduct.quantity);
    toast.error(
      `${foundProduct.quantity} ${foundProduct.name} removed from cart`
    );
  };

  const toggleCartItemQty = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((item) => item._id === id);

    if (value === 'inc') {
      foundProduct.quantity++;
      setCartItems((prevCartItems) => [
        ...prevCartItems.slice(0, index),
        foundProduct,
        ...prevCartItems.slice(index + 1),
      ]);

      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalItems((prevTotalItems) => prevTotalItems + 1);
    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        foundProduct.quantity--;
        setCartItems((prevCartItems) => [
          ...prevCartItems.slice(0, index),
          foundProduct,
          ...prevCartItems.slice(index + 1),
        ]);

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalItems((prevTotalItems) => prevTotalItems - 1);
      }
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty <= 1) {
        return 1;
      }
      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        toggleCartItemQty,
        onAddToCart,
        onRemoveFromCart,
        totalPrice,
        setTotalPrice,
        totalItems,
        setTotalItems,
        qty,
        incQty,
        decQty,
        filteredProducts,
        setFilteredProducts,
        onFilterProducts,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
