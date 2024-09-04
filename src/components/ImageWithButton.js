"use client";

import Image from "next/image";
import Link from "next/link";
import { BUTTON_NAMES } from "../lib/const";
import { Button } from "./Button";
import { addToCart } from "../store/store";
import { useDispatch } from "react-redux";

function ImageWithButton({ src, alt, href, item, classes }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="relative group  lg:overflow-hidden bg-white ">
      <Link href={href} className="block  relative">
        <Image
          src={src}
          alt={alt}
          width={2400}
          height={2400}
          priority={false}
        />
      </Link>

      <Button
        onClick={() => handleAddToCart(item)}
        className="bg-white text-gray-950 hover:bg-white absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 active:bg-light-yellow"
      >
        {BUTTON_NAMES.addToCartButton}
      </Button>
    </div>
  );
}

export { ImageWithButton };
