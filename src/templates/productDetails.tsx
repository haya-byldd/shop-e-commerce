"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductOverview from "@/components/productOverview";
import ProductInformation from "@/components/productInformation";
import ProductReviews from "@/components/productReviews";
import { ProductDetail } from "@/types/product";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState<ProductDetail | null>(null);

  const getProductDetail = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProductDetail(data );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  if (!productDetail) {
    return (
      <main className="flex justify-center items-center h-dvh">
        <h1 className="font-semibold text-lg text-amber-600">Loading</h1>
      </main>
    );
  }

  return (
    <main className="max-w-340 w-full mx-auto p-8">
      <ProductOverview product={productDetail} />
      <ProductInformation product={productDetail} />
      <ProductReviews product={productDetail} />
    </main>
  );
};

export default ProductDetails;
