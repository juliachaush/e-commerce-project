"use client";

import { Button } from "@/src/components/Button";
import Image from "next/image";
import { BUTTON_NAMES } from "@/src/lib/const";
import { formatCurrency } from "@/src/lib/formatCurrency";
import { Breadcrumbs } from "@/src/components/BreadCrumbs";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useState } from "react";

const breadCrumbs = [
  { name: "home", url: "/" },
  { name: "products", url: "/products" },
];

function ProductCardPage({ product }) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = (product, quantity) => {
    dispatch(addToCart({ ...product, quantity }));
    setQuantity(0);
  };

  const handleIncriseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity += 1));
  };

  const handleDecrieseQuantity = () => {
    if (quantity === 0) {
      return;
    }
    setQuantity((prevQuantity) => (prevQuantity -= 1));
  };

  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <ul>
        {product.map((item) => (
          <li
            key={item.product_id}
            className=" grid grid-cols-[1fr_2fr] gap-12 lg:mt-10 mb-10 "
          >
            <div className="lg:mt-2column-start-1  w-full">
              <Image
                src={item.image_url ? item.image_url : undefined}
                width={600}
                height={600}
                alt={item.product_title}
                priority={false}
              />
            </div>
            <div className="lg:mt-8 column-start-2">
              <h1 className="font-bold">{item.product_title}</h1>

              <p>
                {formatCurrency(
                  item.sale_status === true
                    ? item.sale_price
                    : item.product_price
                )}
              </p>
              <p>{item.product_description}</p>
              <p>{item.product_characteristics}</p>
              <div className="flex flex-row items-center ">
                <Button onClick={handleDecrieseQuantity}>-</Button>
                <span className="text-xs">{quantity}</span>
                <Button onClick={handleIncriseQuantity}>+</Button>
              </div>
              <Button
                onClick={() =>
                  handleAddToCart(item, quantity > 0 ? quantity : 0)
                }
                className={
                  "mt-8 border  border-gray-950 text-gray-950 pt-4 pb-4 pl-8 pr-8"
                }
              >
                {BUTTON_NAMES.addToCartButton}
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export { ProductCardPage };
