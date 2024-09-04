"use client";

import Link from "next/link";
import { useState } from "react";
import { CartButton } from "./CartButton";
import Wrapper from "./Wrapper";

function MainHeader({ path, linkName, logIn }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <div className="flex flex-row bg-gray-950 text-white w-full justify-center text-sm">
        <p>Free shipping from $50</p>
      </div>
      <div className="bg-white mb-2 border-b border-gray-950">
        <div className="  grid grid-cols-[1fr_1fr_1fr]  grid-row-1 bg-white text-black  tracking-widest pr-4">
          <div className="  column-start-1 row-start-1 list-none hidden md:flex  ">
            <div className="flex flex-row">
              {Object.keys(path).map((key) => (
                <li key={key} className="p-4">
                  <Link href={path[key]}>{linkName[key]}</Link>
                </li>
              ))}
            </div>
          </div>

          <div className="column-start-2 flex justify-center items-center row-start-1 ">
            <Link href={`/`} className="font-bold uppercase">
              base code
            </Link>
          </div>

          <div className="column-start-2 sm:column-start-3 flex justify-end items-center row-start-1">
            <div className="grid grid-cols-2 gap-2 items-center text-sm">
              {logIn ? <Link href={logIn.path}>{logIn.name}</Link> : ""}
              <CartButton />
            </div>
          </div>
          {/* Burger Menu Button for Smaller Screens */}
          <div className="md:hidden sm:column-start-3 flex justify-end">
            <button
              onClick={toggleMenu}
              className="focus:outline-none items-center"
            >
              {/* Burger Icon */}
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white text-black border-t border-gray-950">
          <ul className="flex flex-col p-4 space-y-2">
            {Object.keys(path).map((key) => (
              <li key={key} className="py-2 border-b border-gray-200">
                <Link href={path[key]} onClick={() => setIsOpen(false)}>
                  {linkName[key]}
                </Link>
              </li>
            ))}
            {logIn && (
              <li className="py-2 border-b border-gray-200">
                <Link href={logIn.path} onClick={() => setIsOpen(false)}>
                  {logIn.name}
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </Wrapper>
  );
}

export { MainHeader };

// import Link from "next/link";
// import { CartButton } from "./CartButton";
// import Wrapper from "./Wrapper";

// function MainHeader({ path, linkName, logIn }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <Wrapper>
//       <div className="  flex flex-row bg-gray-950 text-white w-full  justify-center text-sm  ">
//         <p> Free shipping from $50</p>
//       </div>
//       <div className=" container mx-auto max-w-80xl grid grid-cols-[1fr_1fr_1fr]  grid-row-1 bg-white text-black mb-2  border-b border-gray-950 tracking-widest ">
//         <div className="column-start-1 row-start-1  list-none   ">
//           <div className="flex flex-row">
//             {Object.keys(path).map((key) => (
//               <li key={key} className="p-4">
//                 <Link href={path[key]}>{linkName[key]}</Link>
//               </li>
//             ))}
//           </div>
//         </div>
//         <div className="column-start-2 flex justify-center items-center  row-start-1">
//           <Link href={`/`} className="font-bold uppercase  ">
//             base code
//           </Link>
//         </div>
//         <div className="column-start-2 flex justify-end items-center row-start-1 ">
//           <div className="grid grid-cols-2 gap-2 items-center">
//             {logIn ? <Link href={logIn.path}>{logIn.name}</Link> : ""}

//             <CartButton />
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// }
// export { MainHeader };
