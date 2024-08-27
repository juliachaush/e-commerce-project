import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { BUTTON_NAMES } from "../lib/const";

import { Button } from "./Button";

function ImageWithButton({ src, alt, href, item }) {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    console.log("hello from hendler", product);
    setCart((prevProducts) => [...prevProducts, product]);
    console.log(cart);
  };
  return (
    <div className={`relative elative group `}>
      <Link href={href}>
        <Image
          src={src}
          alt={alt}
          width={200}
          height={200}
          className="rounded-lg w-full  h-full object-cover"
        />
      </Link>

      <Button
        name={BUTTON_NAMES.addToCartButton}
        onClick={() => handleAddToCart(item)}
        className={
          "   bg-white text-gray-950 hover:bg-white absolute bottom-1 left-1/2 w-full h-10 transform -translate-x-1/2 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
        }
      />
    </div>
  );
}

export { ImageWithButton };
