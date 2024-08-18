"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import { fetchProducts, fetchProduct } from "@/src/lib/products";
// import { Query } from "@vercel/postgres";

const ProductCards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <ul>
      {products.map((item) => (
        <li key={item.product_id}>
          <Link href={`/products/${item.product_id}`}>
            {/* <Link
            href={{
              pathname: "/products/${item.product_id}",
              query: { name: "list" },
            }}
          > */}
            <Image
              src={item.image_url}
              width={200}
              height={200}
              alt={item.product_title}
            />
            <h1>{item.product_title}</h1>
            <p>{item.product_price}</p>
          </Link>
          <Button />
        </li>
      ))}
    </ul>
  );
};

export { ProductCards };
