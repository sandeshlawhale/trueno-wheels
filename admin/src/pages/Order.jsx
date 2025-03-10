import React, { useEffect, useState } from "react";
import { BackendUrl, currency } from "../App.jsx";
import axios from "axios";
import assets from "../assets/assets.js";
import { toast } from "react-toastify";

const Order = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.post(
      BackendUrl + "/api/order/order-list",
      {},
      { headers: { token } }
    );
    if (response.data.success) {
      setOrders(response.data.orders);
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(
      BackendUrl + "/api/order/order-update-status",
      { orderId, status: event.target.value },
      { headers: { token } }
    );
    if (response.data.success) {
      await fetchAllOrders();
      toast.success(response.data.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h1 className="text-xl font-medium mb-4">All Orders</h1>
      <div className="flex flex-col gap-2 mb-16">
        {orders.map((order, index) => {
          return (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-3 border border-gray-300 rounded-md p-3 text-sm sm:text-md"
            >
              {/* order image */}
              <img src={assets.Parcle} alt="" className="w-16 h-1/6" />

              {/* center div with details */}
              <div className="flex-1 flex flex-col  gap-2">
                {/* order details div */}
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_0.5fr]">
                  <div className="flex flex-col gap-0.5">
                    {order.items.map((item, index) => {
                      return (
                        <p key={index} className="">
                          {item.model} X {item.quantity}
                        </p>
                      );
                    })}
                  </div>
                  <p>Items: {order.items.length}</p>
                  <p className="text-lg font-semibold">
                    {currency} {order.amount}
                  </p>
                </div>

                {/* user details div */}
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_0.5fr]">
                  <div>
                    <p className="font-semibold text-base">
                      {order.address.firstName} {order.address.lastName}
                    </p>
                    <p>{order.address.street},</p>
                    <p>
                      {order.address.city}, {order.address.state},{" "}
                      {order.address.country}
                    </p>
                    <p>Zipcode: {order.address.zipcode}</p>
                    <p>Contact: {order.address.phone}</p>
                  </div>

                  {/* payment details */}
                  <div>
                    <p>Payment: {order.address.payment ? "Done" : "Pending"}</p>
                    <p>Method: {order.address.paymentMethod}</p>
                    <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
              {/* order status button */}
              <div className="self-center border border-gray-300 px-4 py-2 rounded-sm cursor-pointer">
                Status:{" "}
                <select
                  value={order.status}
                  onChange={(event) => statusHandler(event, order._id)}
                  className="outline-none border-none cursor-pointer"
                >
                  <option value="order placed">Order Placed</option>
                  <option value="packing">Packing</option>
                  <option value="shipped">Shipped</option>
                  <option value="out for delivery">Out for delivery</option>
                  <option value="delivered">Delivered</option>
                </select>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Order;
