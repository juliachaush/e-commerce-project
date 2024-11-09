import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { initialState } from "../features/cart/cartSlice";
import { loadState, saveState } from "@/src/lib/localStorage";

const persistedState = loadState();

export const store = configureStore({
  reducer: { cart: cartReducer },
  preloadedState: persistedState || { cart: initialState },
});

store.subscribe(() => {
  saveState({ cart: store.getState().cart });
});

export default store;
