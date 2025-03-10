import React, { useContext } from "react";
import { ShopContext } from "../util/ShopContext";
import { Link } from "react-router-dom";

const CartAmount = () => {
  const { currency, getCartAmount, delivery_fee } = useContext(ShopContext);

  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="text-lg sm:text-xl font-semibold">Total Amount</h1>

      {/* fees */}
      <div className="flex flex-col gap-2 divide-y-2">
        <div className="flex justify-between items-center capitalize">
          <p>subtotal</p>
          <p>
            {currency} {getCartAmount().toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between items-center capitalize">
          <p>delivery fee</p>
          <p>
            {currency} {delivery_fee}.00
          </p>
        </div>
        <div className="flex justify-between items-center capitalize">
          <p className="font-bold">total</p>
          <p className="font-bold">
            {currency}{" "}
            {getCartAmount() === 0
              ? "0.00"
              : (getCartAmount() + delivery_fee).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartAmount;
