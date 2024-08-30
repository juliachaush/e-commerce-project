"use client";

import { useState, useEffect, Suspense } from "react";
import { useCart } from "../store/store";
import { SideCart } from "./SideCart";

function CartButton() {
  const cart = useCart();
  const [showSideCart, setShowSideCart] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <>
        <button className="flex flex-row">Cart( )</button>
      </>
    );
  }
  return (
    <>
      <button
        onClick={() => setShowSideCart((prev) => !prev)}
        className="flex flex-row"
      >
        Cart<p>({cart.totalQuantity})</p>
      </button>

      <SideCart
        visible={showSideCart}
        onRequestClose={() => setShowSideCart(false)}
      />
    </>
  );
}
export { CartButton };
