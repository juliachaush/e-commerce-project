"use client";

import { useState, useEffect, useRef } from "react";
import { ProductCards } from "@/src/components/ProductCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/src/components/DropdownMenu";
import { ChevronDown } from "lucide-react";
import { Breadcrumbs } from "@/src/components/BreadCrumbs";
import { SORT_OPTIONS, SORT_VALUES } from "@/src/lib/const";
import { cn } from "@/src/lib/utils";
import {
  sortByPriceAsc,
  sortByPriceDesc,
  sortByNone,
} from "@/src/lib/sortFunctions";

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

    let sortedProducts;
    if (value === SORT_VALUES.priceAsc) {
      sortedProducts = [...products].sort(sortByPriceAsc);
    } else if (value === SORT_VALUES.priceDesc) {
      sortedProducts = [...products].sort(sortByPriceDesc);
    } else {
      sortedProducts = sortByNone(initialProducts.current);
    }

    setProducts(sortedProducts);
  }

  return (
    <>
      <div className="flex justify-between pl-4 pr-4 pt-24">
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <DropdownMenu>
          <DropdownMenuTrigger className="group inline-flex justify-center text-sm text-gray-700 hover:text-gray-900">
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
