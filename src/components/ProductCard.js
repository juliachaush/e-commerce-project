import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";

import { formatCurrency } from "../lib/formatCurrency";
import { ProductSkeleton } from "./ProductSkeleton.js";

const userLocale = "en-US";
const userCurrency = "USD";

const ProductCards = ({ products }) => {
  return (
    <ul className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
      {products && products.length > 0
        ? products.map((item) => (
            <li key={item.product_id} className="lg:p-1 md:w-full  mt-4 ">
              <Link href={`/products/${item.product_id}`}>
                <Image
                  className="w-full"
                  src={item.image_url}
                  width={200}
                  height={200}
                  alt={item.product_title}
                />
                <p>{item.product_title}</p>
                <p className="pb-2 ">
                  {formatCurrency(item.product_price, userLocale, userCurrency)}
                </p>
              </Link>
              <Button name="ADD TO CART" />
            </li>
          ))
        : new Array(5).fill(null).map((_, i) => <ProductSkeleton key={i} />)}
    </ul>
  );
};

export { ProductCards };
