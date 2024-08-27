"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import { fetchProductById } from "@/src/lib/products";
import { BUTTON_NAMES } from "@/src/lib/const";
import { formatCurrency } from "@/src/lib/formatCurrency";

import { Breadcrumbs } from "@/src/components/BreadCrumbs";
import { MainHeader } from "@/src/components/MainHeader";
import { Footer } from "@/src/components/Footer";
import { Button } from "@/src/components/Button";

const userLocale = "en-US";
const userCurrency = "USD";

const breadCrumbs = [
  { name: "home", url: "/" },
  { name: "products", url: "/products" },
];

function ProductPage({ onClick }) {
  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function loadProduct() {
      if (id) {
        try {
          const data = await fetchProductById(id);
          setProduct(data);
        } catch (error) {
          console.error("Failed to load product:", error);
        }
      }
    }

    loadProduct();
  }, [id]);

  return (
    <>
      <MainHeader
        path={{ products: "/products", contacts: "/contacts" }}
        linkName={{ products: "Catalog", contacts: "Contacts" }}
        logIn={{ path: "/login", name: "Log In" }}
        cart={{ path: "/cart", name: "Cart" }}
      />
      <Breadcrumbs breadCrumbs={breadCrumbs} />

      <ul>
        {product.map((item) => (
          <li
            key={item.product_id}
            className=" grid grid-cols-[1fr_2fr] gap-12 lg:mt-10 mb-10 "
          >
            <div className="lg:mt-2column-start-1  w-full">
              <Image
                src={item.image_url}
                width={600}
                height={600}
                alt={item.product_title}
              />
            </div>
            <div className="lg:mt-8 column-start-2">
              <h1 className="font-bold">{item.product_title}</h1>
              <p>
                {formatCurrency(item.product_price, userLocale, userCurrency)}
              </p>
              <p>{item.product_description}</p>
              <p>{item.product_characteristics}</p>
              <Button
                name={BUTTON_NAMES.addToCartButton}
                onClick={onClick}
                className={
                  "mt-8 border  border-gray-950 text-gray-950 pt-4 pb-4 pl-8 pr-8"
                }
              />
            </div>
          </li>
        ))}
      </ul>

      <Footer />
    </>
  );
}
export default ProductPage;
