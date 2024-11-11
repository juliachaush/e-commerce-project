import Link from "next/link";

import { formatCurrency } from "../lib/formatCurrency";
import { ProductSkeleton } from "./ProductSkeleton";
import { ImageWithButton } from "./ImageWithButton";
import { Suspense } from "react";

const ProductCards = ({ products }) => {
  return (
    <ul className="container     grid lg:grid-cols-4 gap-x-2  md:grid-cols-2 sm:grid-cols-1  ">
      {products && products.length > 0
        ? products.map((item) => (
            <li key={item.product_id} className="mt-4 ">
              <ImageWithButton
                item={item}
                src={item.image_url ? item.image_url : undefined}
                alt={item.product_title}
                href={`/products/${item.product_id}`}
              />

              <div className=" ">
                <Link prefetch={true} href={`/products/${item.product_id}`}>
                  <p>{item.product_title}</p>
                  <p
                    className={`pb-2 ${
                      item.sale_status === true
                        ? "text-red-700 font-bold "
                        : "text-stone-950"
                    } `}
                  >
                    {formatCurrency(
                      item.sale_status === true
                        ? item.sale_price
                        : item.product_price
                    )}
                  </p>
                </Link>
              </div>
            </li>
          ))
        : new Array(5).fill(null).map((_, i) => <ProductSkeleton key={i} />)}
    </ul>
  );
};

export { ProductCards };
