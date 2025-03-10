import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../util/ShopContext";
import { MdDeleteOutline } from "react-icons/md";
import CartAmount from "../components/CartAmount";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products, cartItem, currency, updateCartCount } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];

      for (const item in cartItem) {
        if (cartItem[item] > 0) {
          tempData.push({
            _id: item,
            quantity: cartItem[item],
          });
        }
      }
      setCartData(tempData);
    }
  }, [cartItem, products]);

  return (
    <div className="w-full py-16">
      <h1 className="text-xl font-semibold pb-4">Your Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-8">
        {/* Cart Items */}
        <div className="flex flex-col gap-4 w-full ">
          {cartData.map((item) => {
            let productData = products?.find(
              (product) => product._id === item._id
            );

            return (
              <div
                key={productData?._id}
                className="border-2 border-gray-300 p-2 flex justify-between items-center"
              >
                <div className="flex gap-4 ">
                  <img
                    src={productData?.images[0]}
                    alt=""
                    className="w-16 sm:w-24"
                  />
                  <div className="flex flex-col gap-2 justify-center">
                    <h1 className="text-xs sm:text-lg font-medium">
                      {productData?.model}
                    </h1>
                    <div className="flex items-center ">
                      <p className="font-semibold text-base w-28 ">
                        {currency}
                        {productData?.price}
                      </p>
                      <input
                        type="number"
                        min={1}
                        defaultValue={item.quantity}
                        onChange={(e) =>
                          e.target.value === "" || e.target.value === "0"
                            ? null
                            : updateCartCount(item._id, Number(e.target.value))
                        }
                        className="border border-gray-300 w-16 pl-2"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="w-10 h-10 rounded-full cursor-pointer p-2 hover:bg-gray-300 flex items-center justify-center transition-colors ease-in-out duration-300"
                  onClick={() => updateCartCount(item._id, 0)}
                >
                  <MdDeleteOutline className="w-full h-full" />
                </div>
              </div>
            );
          })}
        </div>

        {/* cart price list */}
        <div className="w-full flex flex-col gap-4">
          <CartAmount />
          <Link
            to="/place-order"
            className="text-white bg-black w-fit px-4 py-2 mt-2 self-end"
          >
            Proceed to checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
