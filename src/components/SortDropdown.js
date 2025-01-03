import { useState, useEffect } from "react";

import { SORT_OPTIONS } from "@/src/lib/const";
import { SORT_VALUES } from "@/src/lib/const";
import { Button } from "./Button";
import { cn } from "@/src/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/src/components/DropdownMenu";
import { ChevronDown, Filter } from "lucide-react";

const SortDropdown = ({ products, initialProducts }) => {
  const [filterProducts, setFilterProducts] = useState(products);
  const [filter, setFilter] = useState({
    sort: "none",
  });

  const initialProductsForSort = initialProducts.current;

  console.log("initialProductsForSort", initialProductsForSort);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  function handleClick(value) {
    setFilter((prev) => ({
      ...prev,
      sort: value,
    }));

    if (value === SORT_VALUES.priceAsc) {
      const sortedProducts = [...filterProducts].sort(
        (product1, product2) => product1.product_price - product2.product_price,
      );
      setFilterProducts(sortedProducts);
      return;
    }

    if (value === SORT_VALUES.priceDesc) {
      const sortedProducts = [...filterProducts].sort(
        (product1, product2) => product2.product_price - product1.product_price,
      );
      setFilterProducts(sortedProducts);
      return;
    }

    if (value === SORT_VALUES.priceNone) {
      setFilterProducts(initialProductsForSort);
    }
  }
  return (
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

      <Button className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
        <Filter className="h-5 w-5" />
      </Button>
    </div>
  );
};

export { SortDropdown };
