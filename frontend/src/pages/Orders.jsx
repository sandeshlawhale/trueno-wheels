import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../util/ShopContext";
import axios from "axios";

const Orders = () => {
  const { currency, products, token, BackendUrl } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const fetchOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        BackendUrl + "/api/order/user-order-list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) =>
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          })
        );
        setOrderData(allOrdersItem);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, [token]);

  return (
    <div className="flex flex-col gap-6 mt-16">
      <h1 className="text-xl font-semibold sm:text-2xl sm:font-bold">
        My Orders
      </h1>

      {/* orders products */}
      <div className="flex flex-col gap-4 ">
        {orderData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-between border border-gray-300 rounded p-2"
            >
              {/* order details  */}
              <div className="flex gap-4 ">
                {/* order image */}
                <img src={item.images[0]} alt="" className="w-24 sm:w-32" />
                <div className="flex flex-col gap-0 sm:gap-2">
                  {/* order name */}
                  <h1 className="text-base sm:text-lg font-semibold tracking-wide">
                    {item.model}
                  </h1>
                  {/* order data */}
                  <div className="flex gap-4">
                    <p className="text-sm sm:text-base font-medium">
                      {currency}
                      {item.price}
                    </p>
                    <p className="text-sm sm:text-base">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-light ">
                    Date: {new Date(item.date).toDateString()}
                  </p>
                </div>
              </div>

              {/* order status */}
              <div className="w-full mt-1 sm:mt-0 sm:w-1/2 flex flex-col gap-0 sm:gap-2 md:flex-row justify-between items-center sm:items-end md:items-center">
                <div className="flex gap-1 items-center">
                  <p className="text-base font-medium">Status:</p>
                  <p className="w-3 h-3 rounded-full bg-green-400" />
                  <p className="text-base font-light">{item.status}</p>
                </div>

                {/* track order button */}
                <div
                  onClick={fetchOrderData}
                  className="group w-full sm:w-fit flex items-center justify-center border border-gray-300 px-8 cursor-pointer py-3 rounded active:bg-gray-300 duration-200 ease-in-out"
                >
                  <p className="text-base font-medium">Track Order</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
