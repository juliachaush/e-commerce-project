"use client";

import { useState, useEffect, useRef } from "react";
import { ProductCards } from "../../components/ProductCard";
import { Breadcrumbs } from "@/src/components/BreadCrumbs.js";
import MainHeader from "../../components/MainHeader";
import { fetchProducts } from "@/src/lib/products";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/src/components/DropdownMenu.js";
import { ChevronDown, Filter } from "lucide-react";
import { SORT_OPTIONS } from "@/src/lib/const";
import { cn } from "@/src/lib/utils";
import { SORT_VALUES } from "../../lib/const";

const breadCrumbs = [{ name: "home", url: "/" }];

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({
    sort: "none",
  });

  const initialProducts = useRef();

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        initialProducts.current = data;
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    }

    loadProducts();
  }, []);

  function handleClick(value) {
    setFilter((prev) => ({
      ...prev,
      sort: value,
    }));

    if (value === SORT_VALUES.priceAsc) {
      const sortedProducts = [...products].sort(
        (product1, product2) => product1.product_price - product2.product_price
      );
      setProducts(sortedProducts);
      return;
    }

    if (value === SORT_VALUES.priceDesc) {
      const sortedProducts = [...products].sort(
        (product1, product2) => product2.product_price - product1.product_price
      );
      setProducts(sortedProducts);
      return;
    }

    if (value === SORT_VALUES.priceNone) {
      setProducts(initialProducts.current);
    }
  }

  return (
    <>
      <MainHeader
        path={{ products: "/products", contacts: "/contacts" }}
        linkName={{ products: "Catalog", contacts: "Contacts" }}
        cart={{ path: "/cart", name: "Cart" }}
      />
      <div className="flex items-center justify-between ">
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="flex items-center ">
          <DropdownMenu>
            <DropdownMenuTrigger className="group inline-flex justify-center text-sm text-gray-700 hover:text-gray-900 pr-8">
              Sort
              <ChevronDown className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {SORT_OPTIONS.map((option) => (
                <button
                  key={option.name}
                  className={cn("text-left w-full block px-4 py-2 text-sm", {
                    "text-gray-900 bg-gray-100": option.value === filter.sort,
                    "text-gray-500": option.value !== filter.sort,
                  })}
                  onClick={() => {
                    handleClick(option.value);
                  }}
                >
                  {option.name}
                </button>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
            <Filter className="h-5 w-5" />
          </button>
        </div>
      </div>

      <ProductCards products={products} />
    </>
  );
}

export default ProductsPage;
