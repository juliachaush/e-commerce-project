import { memo } from "react";
import Image from "next/image";
import { formatCurrency } from "../lib/formatCurrency";
import { Button } from "./Button";

export const CartItem = memo(({ item, onAdd, onRemove, onRemoveItem }) => (
  <li key={item.product_id}>
    <div className="p-4">
      <div className="flex space-x-4">
        <Image
          src={item.image_url}
          alt={item.product_title}
          width={100}
          height={100}
          className="w-16 aspect-square rounded object-cover"
        />
        <div className="flex-1">
          <h2 className="font-semibold">{item.product_title}</h2>
          <div className="flex text-gray-400 text-sm space-x-1">
            <span>{formatCurrency(item.sumByProduct)}</span>
          </div>
        </div>
        <div className="ml-auto">
          <Button
            onClick={() => onRemoveItem(item)}
            className="text-xs uppercase hover:underline"
          >
            Remove
          </Button>
          <div className="flex items-center justify-between">
            <Button onClick={() => onRemove(item)}>-</Button>
            <span className="text-xs">{item.quantity}</span>
            <Button onClick={() => onAdd(item)}>+</Button>
          </div>
        </div>
      </div>
    </div>
  </li>
));
