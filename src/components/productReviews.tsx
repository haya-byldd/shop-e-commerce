import { FaStar } from "react-icons/fa";
import { ProductDetail } from "@/types/product";

const ProductReviews = ({ product }: { product: ProductDetail }) => {
  return (
    <section className="mt-20 border-t border-border py-10">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <div>
          <p className="text-xs uppercase tracking-widest text-link">
            Reviews
          </p>
          <h2 className="text-2xl font-semibold mt-3">Customer Feedback</h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-3xl font-semibold">{product.rating}</span>

          <div>
            <p className="text-amber-500">
              <span className="flex gap-0.5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </p>
            <p className="text-xs text-fg-muted">
              Based on {product.reviews.length} reviews
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 space-y-4">
        {product.reviews.map((review, index) => (
          <div key={index} className="border border-border rounded-card p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-medium text-fg">{review.reviewerName}</h3>

                <p className="text-xs text-fg-muted mt-1">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>

              {/* <div className="flex gap-1 text-amber-500">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={
                      index < review.rating
                        ? "text-amber-500"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div> */}
            </div>

            <p className="text-sm text-fg-muted mt-4">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductReviews;
