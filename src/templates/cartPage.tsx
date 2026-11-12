import CartOrderSummary from "../components/cartOrderSummary";
import CartProduct from "../components/cartProduct";

const CartPage = () => {
  return (
    <main>
      <div className="max-w-340 w-full mx-auto p-8 space-y-10">
        <h1 className="text-2xl text-fg font-semibold">Your Cart</h1>
        <div className="flex gap-8 justify-between">
          <CartProduct/>
          <CartOrderSummary/>
         
        </div>
      </div>
    </main>
  );
};
export default CartPage;
