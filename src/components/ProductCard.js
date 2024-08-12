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
            {/* <Image href={item.image_url} /> */}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default ProductCard;
