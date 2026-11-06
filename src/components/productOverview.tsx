import Image from "next/image";
import { FaMinus, FaPlus, FaRegHeart, FaStar } from "react-icons/fa";
import { ProductDetail } from "@/types/product";

const ProductOverview = ({ product }: { product: ProductDetail }) => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="border-2 border-border rounded-xl p-2 bg-surface overflow-hidden">
            <Image
              width={200}
              height={200}
              loading="eager"
              src={product.thumbnail}
              className="object-contain p-10 w-full aspect-square"
              alt={product.title}
            />
          </div>
          <div className="grid grid-cols-4 gap-3 mt-4">
            {product.images.map((image, i) => {
              return (
                <div
                  key={i}
                  className="border-2 border-border rounded-card p-2 bg-surface"
                >
                  <Image
                    src={image}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="w-full aspect-square object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-link font-semibold mb-3">
            {product.brand}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            {product.title}
          </h2>
          <p className="text-fg-muted text-sm leading-7 mt-4">
            {product.description}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mt-5">
            <div className="flex items-center gap-1">
              <FaStar className="text-amber-500 text-lg" />
              <span className="font-medium text-sm">{product.rating}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
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
            <h3 className="text-3xl font-semibold">${product.price}</h3>
            <span className="bg-red-50 text-danger text-xs px-3 py-1 rounded-full">
              {Math.round(product.discountPercentage)}% Off
            </span>
          </div>
          <div className="flex items-center gap-2 mt-5 text-sm">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
            <span className="text-success font-medium">
              {product.availabilityStatus}
            </span>
            <span className="text-fg-muted">({product.stock} available)</span>
          </div>
          <div className="border-t border-border my-7"></div>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center border border-border rounded-button bg-surface overflow-hidden">
              <button
                id="decrease"
                className="px-4 py-3 hover:bg-fg-muted"
                aria-label="Decrease quantity"
              >
                <FaMinus className="text-xs" />
              </button>

              <span id="quantity" className="px-3 text-sm">
                1
              </span>

              <button
                id="increase"
                className="px-4 py-3 hover:bg-fg-muted"
                aria-label="Increase quantity"
              >
                <FaPlus className="text-xs" />
              </button>
            </div>

            <button className="flex-1  text-sm font-medium btn-primary transition">
              Add to Cart
            </button>

            <button
              className="border border-border rounded-button bg-surface px-4 hover:bg-fg-muted transition"
              aria-label="Add to wishlist"
            >
              <FaRegHeart />
            </button>
          </div>
          <p className="text-xs text-fg-muted mt-3">
            Minimum order quantity: {product.minimumOrderQuantity}
          </p>
          <div className="grid sm:grid-cols-2 gap-5 bg-surface rounded-card p-5 mt-8">
            <div>
              <h4 className="font-medium text-sm">Shipping</h4>
              <p className="text-xs text-gray-500 mt-2">
                {product.shippingInformation}
              </p>
            </div>

            <div>
              <h4 className="font-medium text-sm"> Warranty</h4>
              <p className="text-xs text-gray-500 mt-2">
                {product.warrantyInformation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
