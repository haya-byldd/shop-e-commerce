
"use client";

import { useParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import ProductOverview from "@/components/product-overview";
import ProductInformation from "@/components/product-information";
import ProductReviews from "@/components/product-reviews";
import type { ProductDetail } from "@/types/product";

const ProductDetailContent = () => {
  const { id } = useParams();

  const [productDetail, setProductDetail] =
    useState<ProductDetail | null>(null);

  const getProductDetail = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${id}`
      );

      const data = await response.json();
      setProductDetail(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  if (!productDetail) {
    return (
      <div className="flex justify-center items-center h-dvh">
        <h1 className="font-semibold text-lg text-amber-600">
          Loading
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-340 w-full mx-auto p-8">
      <ProductOverview product={productDetail} />
      <ProductInformation product={productDetail} />
      <ProductReviews product={productDetail} />
    </div>
  );
};

const ProductDetail = () => {
  return (
    <Suspense fallback={<p>Loading product details...</p>}>
      <ProductDetailContent />
    </Suspense>
  );
};

export default ProductDetail;
