"use client";
import { useEffect, useState } from "react";
import { ProductDetail } from "@/types/product";
import ProductCard from "./productCard";

const ProductList = () => {
  const [products, setProducts] = useState<ProductDetail[]>([]);
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
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
      );
      const data = await res.json();
      const productsData = data.products;
      console.log(productsData)
      setTotalProduct(data.total);
      setProducts(productsData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  if(!products){
    return(
      <main className="flex justify-center items-center">
        <p className="text-link text-xl font-bold">Loading...</p>
      </main>
    )
  }

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
          return(
            <ProductCard key={product.id} product={product}/>
          )
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
