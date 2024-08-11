"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import fetchProducts from "@/src/lib/products";
import ProductCard from "@/src/components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <>
      {" "}
      <h1>Products page</h1>
      {products && products.length > 0
        ? products.map((item) => (
            <li key={item.product_id}>
              <Link href={`/products/${item.product_id}`}>
                <h1>{item.product_title}</h1>
                <p>{item.product_price}</p>
              </Link>
            </li>
          ))
        : ""}
    </>
  );
}

export default Products;
