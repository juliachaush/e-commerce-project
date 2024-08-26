"use client";

import Link from "next/link";
import SideCart from "./SideCart";
import { useState } from "react";

function MainHeader({ path, linkName, logIn }) {
  const [showSideCart, setShowSideCart] = useState(false);

  return (
    <>
      <div className=" flex flex-row bg-gray-950 text-white w-full  justify-center text-sm  ">
        <p> Free shipping from $50</p>
      </div>
      <div className="grid grid-cols-[1fr_1fr_1fr]  grid-row-1 bg-white text-black mb-2  border-b border-gray-950 tracking-widest ">
        <div className="column-start-1 row-start-1  list-none   ">
          <div className="flex flex-row">
            {Object.keys(path).map((key) => (
              <li key={key} className="p-4">
                <Link href={path[key]}>{linkName[key]}</Link>
              </li>
            ))}
          </div>
        </div>
        <div className="column-start-2 flex justify-center items-center  row-start-1">
          <Link href={`/`} className="font-bold  ">
            BASE CODE
          </Link>
        </div>
        <div className="column-start-2 flex justify-end items-center row-start-1 pr-8 ">
          {logIn ? (
            <Link href={logIn.path} className="pr-4">
              {logIn.name}
            </Link>
          ) : (
            ""
          )}

          <button onClick={() => setShowSideCart((prev) => !prev)}>Cart</button>
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
