import { memo } from "react";
import { Button } from "./Button";

export const CartFooter = memo(({ totalPrice }) => (
  <div className="mt-auto p-4">
    <div className="flex justify-between py-4">
      <h1 className="font-semibold text-xl uppercase">Total</h1>
      <h1 className="font-semibold text-xl uppercase">${totalPrice}</h1>
    </div>
    <p className="font-normal text-sm mb-2 text-gray-500">
      Taxes and shipping calculated at checkout
    </p>
    <Button className="border-2 border-gray-950 py-2 w-full rounded text-gray-950 uppercase">
      Checkout
    </Button>
  </div>
));
