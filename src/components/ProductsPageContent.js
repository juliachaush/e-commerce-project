"use client";

import { useState, useEffect, useRef } from "react";
import { ProductCards } from "@/src/components/ProductCard";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/src/components/DropdownMenu";
import { ChevronDown, Filter } from "lucide-react";
import { Breadcrumbs } from "@/src/components/BreadCrumbs";
import { SORT_OPTIONS } from "@/src/lib/const";
import { cn } from "@/src/lib/utils";
import { SORT_VALUES } from "@/src/lib/const";

const breadCrumbs = [{ name: "home", url: "/" }];

function ProductsPageContent({ data }) {
  const [products, setProducts] = useState(data);
  const [filter, setFilter] = useState({
    sort: "none",
  });

  const initialProducts = useRef();

  useEffect(() => {
    initialProducts.current = data;
  }, [data]);

  if (!data) {
    return <p>Loading products...</p>;
  }

  if (data.length === 0) {
    return <p>No products available.</p>;
  }
  function handleClick(value) {
    setFilter((prev) => ({
      ...prev,
      sort: value,
    }));
    if (value === SORT_VALUES.priceAsc) {
      const sortedProducts = [...products].sort((product1, product2) => {
        if (product1.sale_price > 0 && product2.sale_price > 0) {
          return product1.sale_price - product2.sale_price;
        }
        if (product1.sale_price > 0 && product2.sale_price <= 0) {
          return product1.sale_price - product2.product_price;
        }
        if (product1.sale_price <= 0 && product2.sale_price > 0) {
          return product1.product_price - product2.sale_price;
        }
        if (product1.sale_price <= 0 && product2.sale_price <= 0) {
          return product1.product_price - product2.product_price;
        }
      });
      setProducts(sortedProducts);
      return;
    }

    if (value === SORT_VALUES.priceDesc) {
      const sortedProducts = [...products].sort((product1, product2) => {
        if (product2.sale_price > 0 && product1.sale_price > 0) {
          return product2.sale_price - product1.sale_price;
        }
        if (product2.sale_price > 0 && product1.sale_price <= 0) {
          return product2.sale_price - product1.product_price;
        }
        if (product2.sale_price <= 0 && product1.sale_price > 0) {
          return product2.product_price - product1.sale_price;
        }
        if (product2.sale_price <= 0 && product1.sale_price <= 0) {
          return product2.product_price - product1.product_price;
        }
      });
      setProducts(sortedProducts);
      return;
    }

    if (value === SORT_VALUES.priceNone) {
      setProducts(initialProducts.current);
    }
  }

  return (
    <>
      <div className="flex justify-between  pl-4 pr-4">
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <DropdownMenu>
          <DropdownMenuTrigger className="group inline-flex justify-center text-sm text-gray-700 hover:text-gray-900 ">
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
      </div>
      <ProductCards products={products} />
    </>
  );
}
export { ProductsPageContent };
