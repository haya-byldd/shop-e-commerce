import { CartProductType } from "@/types/cartProductTypet";

const CartOrderSummary = ({
  cartProducts,
}: {
  cartProducts: CartProductType[];
}) => {
  // cartProducts = [{id:1,price:23, quantity: 2}, {id:2, price:24, quantity: 1}]

  const totalAmount = cartProducts.reduce((acc, currentItem) => {
    return acc + Math.round(currentItem.price) * currentItem.quantity;
  }, 0);

  const totalItems = cartProducts.reduce((acc, currentItem) => {
    return acc + currentItem.quantity;
  }, 0)

  console.log(cartProducts);

  return (
    <div className="max-w-85 w-full h-fit border border-border rounded-card p-6 bg-bg">
      <h2 className="text-xl font-semibold text-fg">Order Summary</h2>
      <p className="text-sm text-muted mt-1">Review your order details</p>
      <hr className="border border-border my-2" />
     <div className="space-y-4 text-sm">
    <div className="flex justify-between">
      <p className="text-muted">
        Items ({totalItems})
      </p>
      <p className="font-medium">
         ${totalAmount.toFixed(2)}

      </p>
    </div>

    <div className="flex justify-between">
      <p className="text-muted">Shipping</p>
      <p className="font-medium text-success">Free</p>
    </div>
  </div>
      <hr className="border border-border my-2" />
      <div className="flex justify-between font-semibold text-base my-5">
        <p>Total</p>
        <p>${totalAmount.toFixed(2)}</p>
      </div>

      <button className="btn-primary w-full mt-5">Proceed to checkout</button>
       <p className="text-xs text-muted text-center mt-3">
    Shipping is on us!
  </p>
    </div>
  );
};

export default CartOrderSummary;
