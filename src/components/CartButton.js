"use client";

import { useState } from "react";
import { useCart } from "../store/store";
import { SideCart } from "./SideCart";

function CartButton() {
  const cart = useCart();
  const [showSideCart, setShowSideCart] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowSideCart((prev) => !prev)}
        className="flex flex-row"
      >
        Cart<p>({Number(cart.products.length)})</p>
      </button>

      <SideCart
        visible={showSideCart}
        onRequestClose={() => setShowSideCart(false)}
      />
    </>
  );
}
export { CartButton };
