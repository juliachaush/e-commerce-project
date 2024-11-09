import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      console.log("item from addToCart reducer", item);

      let salePrice = Number(item.sale_price);
      console.log("salePrice", salePrice);

      const existingProduct = state.products?.find(
        (p) => p.product_id === item.product_id
      );

      if (existingProduct) {
        existingProduct.quantity += item.quantity;
        existingProduct.sumByProduct =
          (existingProduct.sale_price > 0
            ? existingProduct.sale_price
            : existingProduct.product_price) * existingProduct.quantity;
      } else {
        state.products?.push({
          ...item,
          quantity: item.quantity,
          sumByProduct:
            (salePrice > 0 ? salePrice : item.product_price) * item.quantity,
        });
      }

      state.totalQuantity = state.products?.reduce(
        (acc, p) => acc + (p.quantity || 0),
        0
      );

      state.totalPrice = state.products?.reduce((acc, p) => {
        return (
          acc +
          (p.sale_price > 0 ? p.sale_price : p.product_price) *
            (p.quantity || 0)
        );
      }, 0);
    },

    removeFromCart: (state, action) => {
      const item = action.payload;
      const existingProduct = state.products.find(
        (p) => p.product_id === item.product_id
      );

      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          state.products = state.products.filter(
            (p) => p.product_id !== item.product_id
          );
        } else {
          existingProduct.quantity -= 1;
          existingProduct.sumByProduct -=
            item.sale_price > 0.0 ? item.sale_price : item.product_price;
        }
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

    removeItemFromCart: (state, action) => {
      const item = action.payload;
      const existingProduct = state.products.find(
        (p) => p.product_id === item.product_id
      );

      if (existingProduct) {
        state.products = state.products.filter(
          (p) => p.product_id !== item.product_id
        );
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

    clearCart: (state, action) => {
      state.products = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, removeItemFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;

export const useCart = () => useSelector((state) => state.cart);
