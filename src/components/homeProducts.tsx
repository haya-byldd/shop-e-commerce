"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "./productCard";
import { ProductDetail } from "@/types/product";

const HomeProducts = () => {
  const [products, setProducts] = useState<ProductDetail[]>([]);
  const limit = 8;

  const fetchFeaturedProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
    const data = await res.json();
    const productsData = data.products;
    setProducts(productsData);
  };

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  return (
    <section className="py-8 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Featured Products
        </h2>
        <p className="mt-1 text-sm text-fg-muted">
          Explore our handpicked collection
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <div className="flex justify-center items-center mt-12 ">
        <Link href="/products" className="btn-explore shadow-sm">
          View All
        </Link>
      </div>
    </section>
  );
};

export default HomeProducts;
