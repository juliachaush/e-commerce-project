"use client";

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

const SideCart = forwardRef(({ visible, onRequestClose }, ref) => {
  const dispatch = useDispatch();
  const cart = useCart();

  const handleAddToCart = (product, quantity) => {
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
      className="shadow-md transition-all w-96 bg-white min-h-screen fixed right-0 top-0 flex flex-col z-50"
    >
      <div className="p-4 flex justify-between">
        <h1 className="font-semibold uppercase text-gray-600">Cart</h1>
        <button
          onClick={onRequestClose}
          className="outline-none    text-xs uppercase hover:underline"
        >
          Close
        </button>
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
                      <span>{item.quantity}</span>
                      <span>x</span>
                      <span>{formatCurrency(item.sumByProduct)}</span>
                    </div>
                  </div>

                  <div className="ml-auto">
                    <button
                      onClick={() => handleRemoveItemFromCart(item)}
                      className="text-xs uppercase hover:underline"
                    >
                      Remove
                    </button>

                    <div className="flex items-center justify-between">
                      <button onClick={() => handleRemoveFromCart(item)}>
                        -
                      </button>
                      <span className="text-xs">{item.quantity}</span>
                      <button
                        onClick={() => handleAddToCart(item, item.quantity)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>

      <div className="w-full h-0.5 bg-gray-200" />
      <button onClick={handleClearCart} className="uppercase text-sm">
        Clear cart
      </button>
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

        <button className="border-2 border-gray-950 py-2 w-full rounded text-gray-950 uppercase">
          Checkout
        </button>
      </div>
    </div>
  );
});

export { SideCart };
SideCart.displayName = "SideCart";
