import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.products = action.payload.products;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
    },

    addToCart: (state, action) => {
      const item = action.payload;
      const existingProduct = state.products.find(
        (p) => p.product_id === item.product_id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...item, quantity: 1 });
      }

      state.totalQuantity = state.products.reduce(
        (acc, p) => acc + (p.quantity || 0),
        0
      );
      state.totalPrice = state.products.reduce(
        (acc, p) => acc + p.product_price * (p.quantity || 0),
        0
      );
    },
  },
});

export const { setCart, addToCart } = cartSlice.actions;

export const createStore = () =>
  configureStore({
    reducer: { cart: cartSlice.reducer },
  });

export const useCart = () => useSelector((state) => state.cart);
