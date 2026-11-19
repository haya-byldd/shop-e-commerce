import { CartProductType } from "@/types/cartProductTypet";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const CartProduct = ({
  product,
  setCartProducts,
}: {
  product: CartProductType;
  setCartProducts: any;
}) => {
  const { thumbnail, title, price, id, quantity } = product;
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  function handleDecreaseQuantity() {
    setCurrentQuantity((prevQuantity) => {
      if (prevQuantity > 1) {
        return prevQuantity - 1;
      } else {
        return prevQuantity;
      }
    });
    const existingCartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const isAlreadyExist = existingCartItems.some(
      (existingcartItem: CartProductType) => existingcartItem.id === id,
    );

    if (isAlreadyExist) {
      const updatedCartItems = existingCartItems.map(
        (cartItem: CartProductType) => {
          if (cartItem.id === id) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          } else {
            return cartItem;
          }
        },
      );

      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
      setCartProducts(updatedCartItems)
    }
  }

  function handleIncreaseQuantity() {
    setCurrentQuantity((prevQuantity) => {
      return prevQuantity + 1;
    });

    const existingCartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const isAlreadyExisting = existingCartItems.some(
      (cartItem: CartProductType) => cartItem.id === id,
    );

    if (isAlreadyExisting) {
      const updatedCartItems = existingCartItems.map(
        (existingCartItem: CartProductType) => {
          if (existingCartItem.id === id) {
            return {
              ...existingCartItem,
              quantity: existingCartItem.quantity + 1,
            };
          } else {
            return existingCartItem;
          }
        },
      );

      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
      setCartProducts(updatedCartItems)
    }
  }

  const handleRemoveCart = () => {
    const existingCartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCartItems = existingCartItems.filter(
      (cartItem: CartProductType) => cartItem.id !== id,
    );
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    setCartProducts(updatedCartItems);
  };

  return (
    <article className="border border-border p-6 rounded-card flex justify-between">
      <div className="flex gap-4 items-center">
        <div className="border border-border rounded-card bg-surface">
          <Image
            src={thumbnail}
            alt={title}
            width={100}
            height={100}
            loading="eager"
          ></Image>
        </div>
        <div>
          <Link href={`/product/${id}`}>
            <h4 className="tracking-tight text-fg hover:underline hover:underline-offset-2">
              {title}
            </h4>
          </Link>
          <p className="text-sm font-medium text-fg-muted">
            ${Math.round(price)}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-border rounded-button overflow-hidden">
          <button
            onClick={handleDecreaseQuantity}
            id="decrease"
            className="px-4 py-3 hover:bg-btn hover:text-bg hover:rounded-button bg-surface overflow-hidden disabled:cursor-not-allowed"
            disabled={currentQuantity === 1}
            aria-label="Decrease quantity"
          >
            <FaMinus className="text-xs" />
          </button>

          <span id="quantity" className="px-3 text-sm">
            {currentQuantity}
          </span>

          <button
            onClick={handleIncreaseQuantity}
            id="increase"
            className="px-4 py-3 hover:bg-btn hover:text-bg hover:rounded-button bg-surface overflow-hidden"
            aria-label="Increase quantity"
          >
            <FaPlus className="text-xs" />
          </button>
        </div>

        <button className="btn-primary text-sm" onClick={handleRemoveCart}>
          Remove
        </button>

        <div className="font-semibold text-sm ml-5">
          <p>${Math.round(price * currentQuantity)}</p>
        </div>
      </div>
    </article>
  );
};
export default CartProduct;
