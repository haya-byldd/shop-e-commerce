import { CartProductType } from "@/types/cartProductTypet";

const CartOrderSummary = ({cartProducts} : {cartProducts: CartProductType[]}) => {

// cartProducts = [{id:1,price:23, quantity: 2}, {id:2, price:24, quantity: 1}]
   
    const totalAmount = cartProducts.reduce((acc,currentItem)=>{
          return acc +  (Math.round(currentItem.price) * currentItem.quantity)

    },0)

    console.log(cartProducts)



     

  return (
    <div className="max-w-85 w-full border border-border rounded-card p-8 h-fit">
      <h2 className="text-xl font-semibold text-link">Order Summary</h2>
      <hr className="border border-border my-2" />
      <div className="mt-8 space-y-3 ">
        <div className="flex justify-between text-sm">
          <p>
            Item <span>{}</span>
          </p>
          <p></p>
        </div>
        <div className=" flex justify-between text-sm">
          <p>Shipping</p>
          <p>Free</p>
        </div>
      </div>
      <hr className="border border-border my-2" />
<div className="flex justify-between font-semibold text-base my-5">
    <p>Total</p>
    <p>${totalAmount}</p>
</div>

<button className="btn-primary w-full mt-5">Proceed to checkout</button>
    </div>
  );
};

export default CartOrderSummary;
