"use client";

import { useEffect, useState } from "react";
import { CartProductType } from "@/types/cartProductTypet";
import Link from "next/link";
import { TbShoppingBag } from "react-icons/tb";
import CartProduct from "@/components/cart-product";
import CartOrderSummary from "@/components/cart-order-summary";

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState<CartProductType[]>([]);


  useEffect(() => {
    const storedCartProducts = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartProducts(storedCartProducts);
  }, []);



  if (cartProducts.length === 0) {
    return (
      <div className="max-w-340 w-full mx-auto px-6 py-16">
        <div className="border border-border min-h-[57vh] max-w-2xl bg-surface rounded-card  mx-auto flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-50 mb-6">
            <TbShoppingBag className="text-3xl text-red-500" />
          </div>

          <h1 className="text-2xl font-semibold text-fg mb-3">
            Your cart is empty
          </h1>

          <p className="text-fg-muted text-sm max-w-sm leading-6 mb-7">
            Looks like you haven't added anything to your cart yet. Explore our
            collection and find something you'll love.
          </p>

          <Link href="/products" className="btn-primary">
            Explore Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-340 w-full mx-auto px-6 py-15">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-fg">My Cart</h1>
        <p className="text-sm text-fg-muted mt-1">
          {cartProducts.length}{" "}
          {cartProducts.length === 1 ? "product" : "products"} saved for later
        </p>
      </div>
      <section className="flex justify-between gap-8 ">
        <div className="space-y-4 flex-1 p-8 border-border border rounded-card">
          {cartProducts.map((product) => {
            return (
              <CartProduct
                product={product}
                key={product.id}
                setCartProducts={setCartProducts}
              />
            );
          })}
        </div>
   <CartOrderSummary cartProducts={cartProducts}/>
      </section>
    </div>
  );
};
export default CartPage;
