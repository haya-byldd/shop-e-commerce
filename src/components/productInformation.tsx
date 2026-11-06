import { FaTimes } from "react-icons/fa";
import { ProductDetail } from "@/types/product";

const ProductInformation = ({ product }: { product: ProductDetail }) => {
  return (
    <section className="mt-20 border-t border-border pt-10">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-xs uppercase tracking-widest text-link">
            Product Details
          </p>

          <h2 className="text-2xl font-semibold mt-3">Product Information</h2>

          <p className="text-sm text-fg-muted leading-7 mt-4">
            Explore the specifications and additional information about this
            product.
          </p>
        </div>

        <div className="divide-y divide-border border-y border-border">
          <div className="flex justify-between py-4 text-sm">
            <span className="text-fg-muted"> Brand</span>
            <span className="font-medium">
              {" "}
              {product.brand || "Unbranded"}
            </span>
          </div>

          <div className="flex justify-between py-4 text-sm">
            <span className="text-fg-muted">Category</span>
            <span className="font-medium">{product.category}</span>
          </div>

          <div className="flex justify-between py-4 text-sm">
            <span className="text-fg-muted">SKU</span>
            <span className="font-medium">{product.sku}</span>
          </div>

          <div className="flex justify-between py-4 text-sm">
            <span className="text-fg-muted">Weight</span>
            <span className="font-medium">{product.weight}</span>
          </div>

          <div className="flex justify-between py-4 text-sm">
            <span className="text-fg-muted">Return Policy</span>
            <span className="font-medium">{product.returnPolicy}</span>
          </div>

          <div className="flex justify-between py-4 text-sm">
            <span className="text-fg-muted">Minimum Order</span>
            <span className="font-medium">{product.minimumOrderQuantity}</span>
          </div>
          <div className="flex justify-between py-4 text-sm">
            <span className="text-fg-muted">Dimensions (W, H, D)</span>
            <span className="font-medium flex items-center gap-2">
              {product.dimensions.width}
              <FaTimes className="text-xs text-fg-muted" />
              {product.dimensions.height}
              <FaTimes className="text-xs text-fg-muted" />
              {product.dimensions.depth} cm
            </span>
          </div>
        </div>
      </div>
      <section className="mt-10 sm:mt-20 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 lg:gap-8 bg-surface divide-y divide-border sm:divide-y-0 lg:divide-x p-4 sm:p-6 rounded-card">
          <div className="flex justify-center items-center flex-col text-center py-4 sm:py-0 first:pt-0">
            <p className="text-sm text-fg-muted mb-2">Barcode</p>
            <p className="font-medium text-fg break-all">
              {product.meta.barcode}
            </p>
          </div>

          <div className="flex justify-center items-center flex-col text-center py-4 sm:py-0">
            <p className="text-sm text-fg-muted mb-2">Created At</p>
            <p className="text-sm text-fg">
              {new Date(product.meta.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div className="flex justify-center items-center flex-col text-center py-4 sm:py-0">
            <p className="text-sm text-fg-muted mb-2">Updated At</p>
            <p className="text-sm text-fg">
              {new Date(product.meta.updatedAt).toLocaleDateString()}
            </p>
          </div>
          <div className="flex justify-center items-center flex-col text-center py-4 sm:py-0 last:pb-0">
            <p className="text-sm text-fg-muted mb-2">QR Code</p>
            <img
              src={product.meta.qrCode}
              alt="Product QR Code"
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductInformation;
