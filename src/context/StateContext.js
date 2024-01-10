'use client';
import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setshowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [qty, setQty] = useState(1);

  const onAddToCart = (product, qty) => {
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
        cartItems,
        onAddToCart,
        totalPrice,
        totalItems,
        qty,
        incQty,
        decQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
