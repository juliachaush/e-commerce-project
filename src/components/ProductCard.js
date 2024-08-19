"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/src/lib/products";
import { formatCurrency } from "../lib/formatCurrency";

const userLocale = "en-US";
const userCurrency = "USD";

const ProductCards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    }

    loadProducts();
  }, []);

  return (
    <ul className="flex flex-row ">
      {products && products.length > 0 ? (
        products.map((item) => (
          <li key={item.product_id} className="lg:p-4 md:w-full  mt-8 ">
            <Link href={`/products/${item.product_id}`}>
              <Image
                className="w-full"
                src={item.image_url}
                width={280}
                height={280}
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
      ) : (
        <p className="text-white">No products</p>
      )}
    </ul>
  );
};

export { ProductCards };
