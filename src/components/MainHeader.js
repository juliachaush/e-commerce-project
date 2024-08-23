"use client";

import Link from "next/link";
import SideCart from "./SideCart";
import { useState } from "react";

function MainHeader({ path, linkName, cart, logIn }) {
  const [showSideCart, setShowSideCart] = useState(false);

  return (
    <>
      <div className=" flex flex-row bg-gray-950 text-white w-full  justify-center text-sm  ">
        <p> Free shipping from $50</p>
      </div>
      <div className="flex flex-row bg-white text-black mb-2 items-center spa justify-between border-b border-gray-950 tracking-widest ">
        <div className="flex flex-row list-none w-2  ">
          {Object.keys(path).map((key) => (
            <li key={key} className="p-4">
              <Link href={path[key]}>{linkName[key]}</Link>
            </li>
          ))}
        </div>
        <div className="flex flex-row ">
          <Link href={`/`} className="font-bold  ">
            BASE CODE
          </Link>
        </div>
        <div className="flex flex-row pr-8 ">
          {logIn ? (
            <Link href={logIn.path} className="flex flex-row pr-6">
              {logIn.name}
            </Link>
          ) : (
            ""
          )}
          {cart ? (
            <button onClick={() => setShowSideCart((prev) => !prev)}>
              {cart.name}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <SideCart
        visible={showSideCart}
        onRequestClose={() => setShowSideCart(false)}
      />
    </>
  );
}
export default MainHeader;
