import Link from "next/link";

import { formatCurrency } from "../lib/formatCurrency";
import { ProductSkeleton } from "./ProductSkeleton";
import { ImageWithButton } from "./ImageWithButton";

const ProductSaleCard = ({ products }) => {
  return (
    <ul className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
      {products && products.length > 0
        ? products.map((item) => (
            <li key={item.product_id} className="lg:p-1 md:w-full  mt-4 ">
              <ImageWithButton
                item={item}
                src={item.image_url ? item.image_url : undefined}
                alt={item.product_title}
                href={`/products/${item.product_id}`}
              />
              <Link href={`/products/${item.product_id}`}>
                <p>{item.product_title}</p>
                <p className="line-through">
                  {formatCurrency(item.product_price)}
                </p>
                <p className="pb-2 font-bold text-red-700 ">
                  {formatCurrency(item.sale_price)}
                </p>
              </Link>
            </li>
          ))
        : new Array(5).fill(null).map((_, i) => <ProductSkeleton key={i} />)}
    </ul>
  );
};

export { ProductSaleCard };
