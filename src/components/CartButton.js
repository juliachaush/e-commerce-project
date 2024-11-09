"use client";

import { useState, useEffect, useRef } from "react";
import { useCart } from "../features/cart/cartSlice";
import { SideCart } from "./SideCart";
import { Button } from "./Button";
import { useSelector } from "react-redux";

function CartButton() {
  const cart = useSelector((state) => state.cart);

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
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  if (!isHydrated) {
    return <button className="flex flex-row">Cart ( )</button>;
  }

  return (
    <>
      <Button
        onClick={() => setShowSideCart((prev) => !prev)}
        className="flex flex-row"
      >
        Cart<p>{cart?.totalQuantity || 0}</p>
      </Button>

      <SideCart
        ref={sideCartRef}
        visible={showSideCart}
        onRequestClose={() => setShowSideCart(false)}
        className={`fixed right-0 top-0 w-64 h-full bg-white shadow-lg transform ${
          showSideCart ? "translate-x-0" : "translate-x-full"
        } transition-transform lg:block sm:hidden`}
      />
    </>
  );
}

export { CartButton };

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { useCart } from "../features/cart/cartSlice";
// import { SideCart } from "./SideCart";
// import { Button } from "./Button";

// function CartButton() {
//   const cart = useCart();
//   const [showSideCart, setShowSideCart] = useState(false);
//   const [isHydrated, setIsHydrated] = useState(false);
//   const sideCartRef = useRef(null);

//   const handleOutsideClick = (event) => {
//     if (sideCartRef.current && !sideCartRef.current.contains(event.target)) {
//       setShowSideCart(false);
//     }
//   };

//   useEffect(() => {
//     setIsHydrated(true);

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, []);

//   useEffect(() => {
//     if (showSideCart) {
//       document.addEventListener("mousedown", handleOutsideClick);
//     } else {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     }
//   }, [showSideCart]);

//   if (!isHydrated) {
//     return <button className="flex flex-row">Cart ( )</button>;
//   }
//   return (
//     <>
//       <Button
//         onClick={() => setShowSideCart((prev) => !prev)}
//         className="flex flex-row "
//       >
//         Cart<p>{cart.totalQuantity}</p>
//       </Button>

//       <SideCart
//         ref={sideCartRef}
//         visible={showSideCart}
//         onRequestClose={() => setShowSideCart(false)}
//         className={`fixed right-0 top-0 w-64 h-full bg-white shadow-lg transform ${
//           showSideCart ? "translate-x-0" : "translate-x-full"
//         } transition-transform lg:block sm:hidden`}
//       />
//     </>
//   );
// }
// export { CartButton };
