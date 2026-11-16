
const CartProduct = () => {
  return (
    <article className="border border-border flex-1">
      {/* <div className="flex">
        <div className="flex p-4 rounded-card">
          <div>
            <Image src={thumbnail} alt={title} loading="eager">{thumbnail}</Image>
          </div>
          <h2>{title}</h2>
        </div>
        <div>
          <button>{quantity}</button>
          <button>remove button</button>
        </div>
      </div> */}

        {/* <div className="flex items-center border border-border rounded-button overflow-hidden">
                    <button
                      onClick={handleDecreaseQuantity}
                      id="decrease"
                      className="px-4 py-3 hover:bg-btn hover:text-bg hover:rounded-button bg-surface overflow-hidden disabled:cursor-not-allowed"
                      disabled={quantity === 1}
                      aria-label="Decrease quantity"
                    >
                      <FaMinus className="text-xs" />
                    </button>
      
                    <span id="quantity" className="px-3 text-sm">
                      {quantity}
                    </span>
      
                    <button
                      onClick={handleIncreaseQuantity}
                      id="increase"
                      className="px-4 py-3 hover:bg-btn hover:text-bg hover:rounded-button bg-surface overflow-hidden"
                      aria-label="Increase quantity"
                    >
                      <FaPlus className="text-xs" />
                    </button>
                  </div> */}
    </article>
  );
};

export default CartProduct;
