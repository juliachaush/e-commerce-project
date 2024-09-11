import Image from "next/image";
import { forwardRef } from "react";
import { useDispatch } from "react-redux";
import {
  useCart,
  addToCart,
  removeFromCart,
  clearCart,
  removeItemFromCart,
} from "../store/store";
import { formatCurrency } from "../lib/formatCurrency";
import { Button } from "./Button";

const SideCart = forwardRef(({ visible, onRequestClose }, ref) => {
  const dispatch = useDispatch();
  const cart = useCart();

  const handleAddToCart = (product, quantity) => {
    console.log("Adding to cart:", product, quantity);
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleRemoveItemFromCart = (product) => {
    dispatch(removeItemFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div
      ref={ref}
      style={{ right: visible ? "0" : "-100%" }}
      className={`flex flex-col fixed top-0 right-0 min-h-screen w-96 bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 ${
        visible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between">
        <h1 className="font-semibold uppercase text-gray-600">Cart</h1>
        <Button
          onClick={onRequestClose}
          className="outline-none    text-xs uppercase hover:underline"
        >
          Close
        </Button>
      </div>
      <div className="w-full h-0.5 bg-gray-200" />

      <ul>
        {cart.products.length === 0 && (
          <p className="flex justify-center p-4">
            You have 0 items in your cart
          </p>
        )}
        {cart.products.length > 0 &&
          cart.products.map((item) => (
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
                      onClick={() => handleRemoveItemFromCart(item)}
                      className="text-xs uppercase hover:underline"
                    >
                      Remove
                    </Button>

                    <div className="flex items-center justify-between">
                      <Button onClick={() => handleRemoveFromCart(item)}>
                        -
                      </Button>
                      <span className="text-xs">{item.quantity}</span>
                      <Button
                        onClick={() => handleAddToCart(item, item.quantity)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>

      <div className="w-full h-0.5 bg-gray-200" />
      <Button onClick={handleClearCart} className="uppercase text-sm">
        Clear cart
      </Button>
      <div className="mt-auto p-4">
        <div className=" flex justify-between py-4">
          <h1 className="font-semibold text-xl uppercase">Total</h1>
          <h1 className="font-semibold text-xl uppercase">
            ${cart.totalPrice}
          </h1>
        </div>
        <p className="font-normal text-sm mb-2 text-gray-500">
          Taxes and shipping calculated at checkout
        </p>

        <Button className="border-2 border-gray-950 py-2 w-full rounded text-gray-950 uppercase">
          Checkout
        </Button>
      </div>
    </div>
  );
});

export { SideCart };
SideCart.displayName = "SideCart";
