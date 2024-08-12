"use client";

import Link from "next/link";
import Image from "next/image";

function ProductCard({ products }) {
  return (
    <ul>
      {products.map((item) => (
        <li key={item.product_id}>
          <Link href={`/products/${item.product_id}`}>
            <h1>{item.product_title}</h1>
            <p>{item.product_price}</p>
            <Image
              src={item.image_url}
              width={200}
              height={200}
              alt={item.product_title}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default ProductCard;
