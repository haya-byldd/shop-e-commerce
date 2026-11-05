"use client";
import Image from "next/image";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 20;
  const totalPages = Math.ceil(totalProduct / limit);
  const skip = (currentPage - 1) * limit;


  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const fetchProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    );
    const data = await res.json();
    const productsData = data.products;
    setTotalProduct(data.total);
    setProducts(productsData);
  };
  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  return (
    <section className="py-8 space-y-6 flex-1">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          All Featured Products
        </h2>
        <p className="mt-1 text-sm text-muted">{totalProduct} Products</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => {
          const {
            id,
            thumbnail,
            brand,
            title,
            price,
            rating,
            discountPercentage,
          } = product;
          return (
            <article
              key={id}
              className="rounded-card border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
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

                <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium">
                  <FaStar className="text-amber-500" />
                  {rating}
                </span>

                <button
                  type="button"
                  aria-label="add to favorites"
                  className="absolute bottom-3 right-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border bg-background hover:shadow-md"
                >
                  <FaRegHeart />
                </button>
              </div>

              {/* Product Details */}
              <div className="space-y-3 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  {brand || "Shop's Product"}
                </p>

                <h3 className="min-h-12 text-sm font-semibold leading-6">
                  {title}
                </h3>

                <div className="flex items-center gap-2">
                  <p className="text-lg font-bold">${price}</p>

                  <p className="text-xs text-muted">Incl. discount</p>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex-1 rounded-lg btn-primary cursor-pointer"
                  >
                    View Product
                  </button>
                  <button
                    type="button"
                    aria-label="add to cart"
                    className="flex cursor-pointer items-center justify-center rounded-lg border border-border shadow-sm px-3 bg-surface hover:bg-bg"
                  >
                    <HiOutlineShoppingBag />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="flex justify-center items-center gap-10 mt-10">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="sm:w-35 py-2 px-4 sm:px-8 w-25 bg-btn cursor-pointer text-bg border border-solid border-btn rounded-button hover:bg-btn-hover  hover:border-btn-hover disabled:cursor-not-allowed disabled:bg-surface disabled:text-link disabled:border-border"
          aria-label="back to previous page button"
        >
          Previous
        </button>
        <p className="font-medium text-sm">
          {currentPage} of {totalPages}
        </p>
     
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="sm:w-35 py-2 px-4 sm:px-8 w-25 bg-btn cursor-pointer text-bg border border-solid border-btn rounded-button hover:bg-btn-hover  hover:border-btn-hover disabled:cursor-not-allowed disabled:bg-surface disabled:text-link disabled:border-border"
          aria-label="move to next page button"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ProductList;
