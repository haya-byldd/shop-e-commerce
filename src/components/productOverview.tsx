"use client";
import Image from "next/image";
import { FaHeart, FaMinus, FaPlus, FaRegHeart, FaStar } from "react-icons/fa";
import { ProductDetail } from "@/types/product";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BsShieldCheck } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { toast } from "sonner";

const ProductOverview = ({ product }: { product: ProductDetail }) => {
  const {
    id,
    thumbnail,
    title,
    images,
    brand,
    description,
    tags,
    rating,
    discountPercentage,
    price,
    availabilityStatus,
    stock,
    minimumOrderQuantity,
    shippingInformation,
    warrantyInformation,
  } = product;
  const [quantity, setQuantity] = useState<number>(1);
  const [isLiked, setIsLiked] = useState(false);

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 1) {
        return prevQuantity - 1;
      }
      return prevQuantity;
    });
  };
  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      return prevQuantity + 1;
    });
  };

  const getWishListProduct = JSON.parse(
    localStorage.getItem("wishList") || "[]",
  );
  useEffect(() => {
    const isAlreadyExist = getWishListProduct.some(
      (wishListProd: ProductDetail) => wishListProd.id === id,
    );
    setIsLiked(isAlreadyExist);
  },[id]);

  const handleWishList = () => {
    if (isLiked) {
      const updatedWishListProd = getWishListProduct.filter(
        (wishListProd: ProductDetail) => wishListProd.id !== id,
      );
      setIsLiked(false);
      localStorage.setItem("wishList", JSON.stringify(updatedWishListProd));
      toast.info(`${title} removed from wishlist.`);
    } else {
      localStorage.setItem(
        "wishList",
        JSON.stringify([...getWishListProduct, product]),
      );
      setIsLiked(true);
      toast.success(`${title} added to wishlist.`);
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="border-2 border-border rounded-xl p-2 bg-surface overflow-hidden">
            <Image
              width={200}
              height={200}
              loading="eager"
              src={thumbnail}
              className="object-contain p-10 w-full aspect-square"
              alt={title}
            />
          </div>
          <div className="grid grid-cols-4 gap-3 mt-4">
            {images.map((image, i) => {
              return (
                <div
                  key={i}
                  className="border-2 border-border rounded-card p-2 bg-surface"
                >
                  <Image
                    src={image}
                    alt={title}
                    width={100}
                    height={100}
                    loading="eager"
                    className="w-full aspect-square object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-link font-semibold mb-3">
            {brand}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
          <p className="text-fg-muted text-sm leading-7 mt-4">{description}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mt-5">
            <div className="flex items-center gap-1">
              <FaStar className="text-amber-500 text-lg" />
              <span className="font-medium text-sm">{rating}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-border rounded-full px-3 py-1 text-xs text-fg-muted capitalize"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 mt-6">
            <h3 className="text-3xl font-semibold">${price}</h3>
            <span className="bg-red-50 text-danger text-xs px-3 py-1 rounded-full">
              {Math.round(discountPercentage)}% Off
            </span>
          </div>
          <div className="flex items-center gap-2 mt-5 text-sm">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
            <span className="text-success font-medium">
              {availabilityStatus}
            </span>
            <span className="text-fg-muted">({stock} available)</span>
          </div>
          <div className="border-t border-border my-7"></div>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center border border-border rounded-button overflow-hidden">
              <button
                onClick={handleDecreaseQuantity}
                id="decrease"
                className="px-4 py-3 hover:bg-btn hover:text-bg hover:rounded-button bg-surface overflow-hidden disabled:cursor-not-allowed"
                disabled={quantity === 1}
                aria-label="Decrease quantity"
              >
                <FaMinus className="text-xs" />
              </button>

              <span id="quantity" className="px-3 text-sm">
                {quantity}
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

            <Link
              href="/cart"
              className="flex-1 text-center text-sm font-medium btn-primary transition"
            >
              Add to Cart
            </Link>


           
            <button
              onClick={handleWishList}
          className={`cursor-pointer border border-border rounded-button px-4 ${isLiked ? "bg-red-50" : "bg-surface"}`}   
              aria-label="Add to wishlist"
            >
              {isLiked ? <FaHeart className="text-red-600" /> : <FaRegHeart />}
            </button>
          </div>
          <p className="text-xs text-fg-muted mt-3">
            Minimum order quantity: {minimumOrderQuantity}
          </p>
          <div className="grid sm:grid-cols-2 gap-5 bg-surface rounded-card p-5 mt-8">
            <div>
              <h4 className="font-medium text-sm flex gap-2">
                <span>
                  <LiaShippingFastSolid size={17} />
                </span>
                Shipping
              </h4>
              <p className="text-xs text-gray-500 mt-2">
                {shippingInformation}
              </p>
            </div>

            <div>
              <h4 className="font-medium text-sm flex gap-2">
                <span>
                  <BsShieldCheck size={15} />
                </span>{" "}
                Warranty
              </h4>
              <p className="text-xs text-gray-500 mt-2">
                {warrantyInformation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
