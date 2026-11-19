import ProductFilters from "@/components/product-filters";
import ProductList from "@/components/product-list";

const ProductsPage = () => {
  return (
    <div className="p-4 flex gap-6 ">
      <ProductFilters />
      <ProductList/>
    </div>
  );
};

export default ProductsPage;
