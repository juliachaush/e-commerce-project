"use client";

import { createContext, useState } from "react";

const useCartState = () => {
  products: [];
};

export const CartContext = createContext({});

export const useCart = () => {
  const cart = useContext(CartContext);

  if (!cart) {
    throw new Error("useCart must be used within Cart Provider");
  }
  return cart;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useCartState();

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};
