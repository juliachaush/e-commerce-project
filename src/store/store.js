import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { loadState, saveState } from "@/src/lib/localStorage";

const persistedState = loadState();

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
        existingProduct.sumByProduct =
          existingProduct.product_price * existingProduct.quantity;
      } else {
        state.products.push({
          ...item,
          quantity: 1,
          sumByProduct: item.product_price,
        });
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
          existingProduct.sumByProduct -= item.product_price;
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

    clearCart: (state, action) => {
      state.products = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { setCart, addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export const createStore = () => {
  const store = configureStore({
    reducer: { cart: cartSlice.reducer },
    preloadedState: loadState() || { cart: initialState },
  });

  store.subscribe(() => {
    saveState(store.getState().cart);
  });

  return store;
};
export const useCart = () => useSelector((state) => state.cart);
