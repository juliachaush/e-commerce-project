import { forwardRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  useCart,
  addToCart,
  removeFromCart,
  clearCart,
  removeItemFromCart,
} from "../features/cart/cartSlice";
import { Button } from "./Button";
import { CartItem } from "./CartItem";
import { CartFooter } from "./CartFooter";

const SideCart = forwardRef(({ visible, onRequestClose }, ref) => {
  const dispatch = useDispatch();
  const cart = useCart();

  const handleAddToCart = useCallback(
    (product) => {
      dispatch(addToCart({ ...product, quantity: 1 }));
    },
    [dispatch]
  );

  const handleRemoveFromCart = useCallback(
    (product) => {
      dispatch(removeFromCart(product));
    },
    [dispatch]
  );

  const handleRemoveItemFromCart = useCallback(
    (product) => {
      dispatch(removeItemFromCart(product));
    },
    [dispatch]
  );

  const handleClearCart = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

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
          aria-label="Close Cart"
          className="outline-none text-xs uppercase hover:underline"
        >
          Close
        </Button>
      </div>
      <div className="w-full h-0.5 bg-gray-200" />
      <ul>
        {cart?.products?.length === 0 ? (
          <p className="flex justify-center p-4">
            You have 0 items in your cart
          </p>
        ) : (
          cart?.products?.map((item) => (
            <CartItem
              key={item.product_id}
              item={item}
              onAdd={handleAddToCart}
              onRemove={handleRemoveFromCart}
              onRemoveItem={handleRemoveItemFromCart}
            />
          ))
        )}
      </ul>
      <div className="w-full h-0.5 bg-gray-200" />
      <Button onClick={handleClearCart} className="uppercase text-sm">
        Clear cart
      </Button>
      <CartFooter totalPrice={cart?.totalPrice} />
    </div>
  );
});

SideCart.displayName = "SideCart";

export { SideCart };
