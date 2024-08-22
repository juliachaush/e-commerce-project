"use client";
import { fetchProductById } from "@/src/lib/products";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Breadcrumbs } from "@/src/components/BreadCrumbs";
import MainHeader from "@/src/components/MainHeader";
import { formatCurrency } from "@/src/lib/formatCurrency";
import { Footer } from "@/src/components/Footer";

const userLocale = "en-US";
const userCurrency = "USD";

const breadCrumbs = [
  { name: "home", url: "/" },
  { name: "products", url: "/products" },
];

function ProductPage() {
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
        cart={{ path: "/cart", name: "Cart" }}
      />
      <Breadcrumbs breadCrumbs={breadCrumbs} />

      <ul>
        {product.map((item) => (
          <li key={item.product_id} className="flex flex-row lg:mt-10 mb-10 ">
            <Image
              src={item.image_url}
              width={600}
              height={600}
              alt={item.product_title}
            />
            <div className="lg:mt-20 lg:ml-20">
              <h1>{item.product_title}</h1>
              <p>
                {formatCurrency(item.product_price, userLocale, userCurrency)}
              </p>
              <p>{item.product_description}</p>
              <p>{item.product_characteristics}</p>
            </div>
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
}
export default ProductPage;
