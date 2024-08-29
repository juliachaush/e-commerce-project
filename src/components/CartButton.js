"use client";

import { useState } from "react";

import { SideCart } from "./SideCart";

function CartButton() {
  const [showSideCart, setShowSideCart] = useState(false);
  return (
    <>
      <button onClick={() => setShowSideCart((prev) => !prev)}>Cart</button>

      <SideCart
        visible={showSideCart}
        onRequestClose={() => setShowSideCart(false)}
      />
    </>
  );
}
export { CartButton };
