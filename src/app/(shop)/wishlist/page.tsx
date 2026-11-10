"use client"

import ProductCard from "@/components/productCard";
import { ProductDetail } from "@/types/product";

const WishlistPage = () => {
  const favourites = JSON.parse(localStorage.getItem("favourites") || "[]");

  return (
    <main className="max-w-340 w-full mx-auto p-8">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {favourites.map((product: ProductDetail ) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
    </main>
  );
};

export default WishlistPage;
