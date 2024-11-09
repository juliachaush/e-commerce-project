"use client";
import { Provider } from "react-redux";
import store from "./store"; // Import the store directly

export default function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
