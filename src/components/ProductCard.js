"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import { fetchProducts, fetchProduct } from "@/src/lib/products";

const ProductCards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
    }

    loadProducts();
  }, []);

  if (!products) {
    return <div>Failed to load products</div>;
  }

  return (
    <ul>
      {products.map((item) => (
        <li key={item.product_id}>
          <Link href={`/products/${item.product_id}`}>
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
