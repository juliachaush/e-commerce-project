"use client";
import fetchProducts from "@/src/lib/products";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";

function ProductPage() {
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
    }

    loadProducts();
  }, []);

  const breadCrumbs = [
    { name: "home", url: "/" },
    { name: "products", url: "/products" },
  ];

  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <ul>
        {products.map((item) =>
          item.product_id === Number(params.slug) ? (
            <li key={item.product_id}>
              <h1>{item.product_title}</h1>
              <p>{item.product_price}</p>
              <Image
                src={item.image_url}
                width={500}
                height={500}
                alt={item.product_title}
              />
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </>
  );
}
export default ProductPage;
