import { Button } from "@/src/components/Button";
import Image from "next/image";
import { BUTTON_NAMES } from "@/src/lib/const";
import { formatCurrency } from "@/src/lib/formatCurrency";

const userLocale = "en-US";
const userCurrency = "USD";

function ProductCardPage({ product, onClick }) {
  return (
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
  );
}

export { ProductCardPage };
