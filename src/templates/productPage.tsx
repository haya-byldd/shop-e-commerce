import ProductFilters from "@/components/productFilters";
import ProductList from "@/components/productList";

const ProductPage = () => {
  return (
    <main className="p-4 flex gap-6 ">
      <ProductFilters />
      <ProductList/>
    </main>
  );
};

export default ProductPage;
