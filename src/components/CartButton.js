"use client";

import { useState, useEffect, useRef } from "react";
import { useCart } from "../store/store";
import { SideCart } from "./SideCart";
import { Button } from "./Button";

function CartButton() {
  const cart = useCart();
  const [showSideCart, setShowSideCart] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const sideCartRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (sideCartRef.current && !sideCartRef.current.contains(event.target)) {
      setShowSideCart(false);
    }
  };

  useEffect(() => {
    setIsHydrated(true);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (showSideCart) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
  }, [showSideCart]);

  if (!isHydrated) {
    return <button className="flex flex-row">Cart ( )</button>;
  }
  return (
    <>
      <Button
        onClick={() => setShowSideCart((prev) => !prev)}
        className="flex flex-row "
      >
        Cart<p>({cart.totalQuantity})</p>
      </Button>

      <SideCart
        ref={sideCartRef}
        visible={showSideCart}
        onRequestClose={() => setShowSideCart(false)}
      />
    </>
  );
}
export { CartButton };
