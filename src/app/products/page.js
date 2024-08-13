"use client";

import { useEffect, useState } from "react";
import fetchProducts from "@/src/lib/products";
import { ProductCard } from "@/src/components/ProductCard";

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
      <h1>Products page</h1>
      <ProductCard products={products} />
    </>
  );
}

export default Products;
