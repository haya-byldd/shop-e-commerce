"use client"

import ProductCard from "@/components/productCard";
import { ProductDetail } from "@/types/product";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

const WishlistPage = () => {
  const wishList = JSON.parse(localStorage.getItem("wishList") || "[]");

 if (wishList.length === 0) {
  return (
    <main className="max-w-340 w-full mx-auto px-6 py-16 bg-surface">
      <div className="border border-border min-h-[60vh] max-w-2xl bg-bg rounded-card  mx-auto flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-50 mb-6">
          <FaHeart className="text-3xl text-red-500" />
        </div>

        <h1 className="text-2xl font-semibold text-fg mb-3">
          Your wishlist is empty
        </h1>

        <p className="text-fg-muted text-sm max-w-sm leading-6 mb-7">
          Looks like you haven't saved anything yet.
          Explore our collection and find something you'll love.
        </p>

        <Link
          href="/products"
          className="btn-primary"
        >
          Explore Products
        </Link>

      </div>
    </main>
  );
}

  return (
  <main className="max-w-340 w-full mx-auto px-6 py-15">

  <div className="mb-8">
    <h1 className="text-2xl font-semibold text-fg">
      My Wishlist
    </h1>

    <p className="text-sm text-fg-muted mt-1">
      {wishList.length} {wishList.length === 1 ? "product" : "products"} saved for later
    </p>
  </div>

  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {wishList.map((product: ProductDetail) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>

</main>
  );
};

export default WishlistPage;
