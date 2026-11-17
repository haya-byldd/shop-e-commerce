"use client";

import { useEffect, useState } from "react";
import { CartProductType } from "@/types/cartProductTypet";
import Link from "next/link";
import { TbShoppingBag } from "react-icons/tb";
import CartProduct from "@/components/cartProduct";

const CartPage = () => {
  const [cartProduct, setCartProduct] = useState<CartProductType[]>([]);

  useEffect(() => {
    const storedCartProduct = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartProduct(storedCartProduct);
  }, []);

  console.log(cartProduct)

  if (cartProduct.length === 0) {
    return (
      <main className="max-w-340 w-full mx-auto px-6 py-16">
        <div className="border border-border min-h-[57vh] max-w-2xl bg-surface rounded-card  mx-auto flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-50 mb-6">
            <TbShoppingBag className="text-3xl text-red-500" />
          </div>

          <h1 className="text-2xl font-semibold text-fg mb-3">
            Your cart is empty
          </h1>

          <p className="text-fg-muted text-sm max-w-sm leading-6 mb-7">
            Looks like you haven't added anything to your cart yet. Explore our collection
            and find something you'll love.
          </p>

          <Link href="/products" className="btn-primary">
            Explore Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="max-w-340 w-full mx-auto px-6 py-15">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-fg">My Cart</h1>
          <p className="text-sm text-fg-muted mt-1">
            {cartProduct.length}{" "}
            {cartProduct.length === 1 ? "product" : "products"} saved for later
          </p>
        </div>
        <section className="flex justify-between gap-8 ">
          <div className="space-y-4 flex-1 p-8 border-border border rounded-card">
            {cartProduct.map((product) => {
              return <CartProduct product={product} key={product.id} setCartProduct= {setCartProduct} />;
            })}
          </div>
          <div className="max-w-85 w-full border border-border rounded-card"></div>
        </section>
      </div>
    </main>
  );
};
export default CartPage;
