"use client";

import { useEffect, useState } from "react";
import fetchProducts from "@/src/lib/products";
import { ProductCard } from "@/src/components/ProductCard";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
    }

    loadProducts();
  }, []);

  const breadCrumbs = [{ name: "home", url: "/" }];

  return (
    <>
      <h1>Products page</h1>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <ProductCard products={products} />
    </>
  );
}

export default ProductsPage;
