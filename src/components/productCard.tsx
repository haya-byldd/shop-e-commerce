"use client";
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import Image from "next/image";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProductDetail } from "@/types/product";

const ProductCard = ({ product }: { product: ProductDetail }) => {
  const { id, thumbnail, brand, title, price, rating, discountPercentage } =
    product;
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const getWishListProd = JSON.parse(localStorage.getItem("wishList") || "[]");
    const isAlreadyExist = getWishListProd.some((wishListProd: ProductDetail) => wishListProd.id === id);
    setIsLiked(isAlreadyExist);
  },[id]);

  const handleWishList = () => {
    const getWishListProd = JSON.parse(localStorage.getItem("wishList") || "[]");
    if(isLiked){
    const updatedWishlist = getWishListProd.filter((wishListProd: ProductDetail) => wishListProd.id !== id);
    setIsLiked(false)
   localStorage.setItem("wishList", JSON.stringify(updatedWishlist));
    }else{
    localStorage.setItem("wishList", JSON.stringify([...getWishListProd, product]));
    setIsLiked(true)
    
  }
}


  return (
    <article className="rounded-card border border-border bg-bg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative flex aspect-square items-center justify-center bg-surface p-5">
        <Image
          src={thumbnail}
          alt={title}
          width={300}
          height={300}
          className="h-full w-full object-contain"
        />

        <span className="absolute left-3 top-3 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          {Math.round(discountPercentage)}% OFF
        </span>

        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-border bg-bg px-2.5 py-1 text-xs font-medium">
          <FaStar className="text-amber-500" />
          {rating}
        </span>

        <button
          onClick={handleWishList}
          type="button"
          aria-label="add to favorites"
          className="absolute bottom-3 right-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border bg-bg hover:shadow-md"
        >
          {isLiked ? <FaHeart className="text-red-600" /> : <FaRegHeart />}
        </button>
      </div>

      {/* Product Details */}
      <div className="space-y-3 p-4">
        <p className="text-xs font-medium uppercase tracking-wider text-fg-muted">
          {brand || "Shop's Product"}
        </p>

        <h3 className="min-h-12 text-sm font-semibold leading-6">{title}</h3>

        <div className="flex items-center gap-2">
          <p className="text-lg font-bold">${price}</p>

          <p className="text-xs text-fg-muted">Incl. discount</p>
        </div>

        <div className="flex gap-2">
          <Link
            href={`/product/${id}`}
            className="flex-1 rounded-lg btn-primary cursor-pointer text-center"
          >
            View Product
          </Link>
          <Link
            href={"/cart"}
            type="button"
            aria-label="add to cart"
            className="flex cursor-pointer items-center justify-center rounded-lg border border-border shadow-sm px-3 bg-surface hover:bg-bg"
          >
            <HiOutlineShoppingBag />
          </Link>
        </div>
      </div>
    </article>
  );
};


export default ProductCard;
