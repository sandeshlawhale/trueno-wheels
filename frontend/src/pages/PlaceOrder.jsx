import React, { useContext, useState } from "react";
import CartAmount from "../components/CartAmount";
import { assets, icons } from "../assets/assets";
import { Link } from "react-router-dom";
import { ShopContext } from "../util/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const {
    cartItem,
    products,
    getCartAmount,
    delivery_fee,
    token,
    BackendUrl,
    navigate,
    setCartItem,
  } = useContext(ShopContext);

  const [paymentMode, setPaymentMode] = useState("cod");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItem) {
        if (cartItem[items] > 0) {
          const itemInfo = structuredClone(
            products.find((product) => product._id === items)
          );
          if (itemInfo) {
            itemInfo.quantity = cartItem[items];
            orderItems.push(itemInfo);
          }
        }
      }

      const orderData = {
        items: orderItems,
        address: formData,
        amount: getCartAmount() + delivery_fee,
      };

      switch (paymentMode) {
        case "cod":
          const response = await axios.post(
            BackendUrl + "api/order/payment-cod",
            orderData,
            { headers: { token } }
          );
          if (response.data.success) {
            toast.success(response.data.message);
            navigate("/orders");
            setCartItem({});
          }
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid
   grid-cols-1 sm:grid-cols-2 m-auto gap-4 sm:gap-8 py-16 w-[90%]"
    >
      {/* left Side - form */}
      <div className="flex flex-col  gap-4 w-full max-w-[500px]">
        <h1 className="text-xl font-semibold pb-2">Delivery Information</h1>

        <div className="flex gap-3 w-full">
          <input
            required
            type="text"
            onChange={onChangeHandler}
            value={formData.firstName}
            name="firstName"
            placeholder="First Name"
            className="capitalize w-full px-3.5 py-1.5 rounded border-gray-400 border text-black"
          />
          <input
            required
            type="text"
            placeholder="Last Name"
            onChange={onChangeHandler}
            value={formData.lastName}
            name="lastName"
            className="capitalize w-full px-3.5 py-1.5 rounded border-gray-400 border text-black"
          />
        </div>
        <input
          required
          type="email"
          placeholder="Email Address"
          onChange={onChangeHandler}
          value={formData.email}
          name="email"
          className="w-full px-3.5 py-1.5 rounded border-gray-400 border text-black"
        />
        <input
          required
          type="text"
          placeholder="Street"
          onChange={onChangeHandler}
          value={formData.street}
          name="street"
          className="capitalize w-full px-3.5 py-1.5 rounded border-gray-400 border text-black"
        />
        <div className="flex gap-3 w-full">
          <input
            required
            type="text"
            placeholder="City"
            onChange={onChangeHandler}
            value={formData.city}
            name="city"
            className="capitalize w-full px-3.5 py-1.5 rounded border-gray-400 border text-black"
          />
          <input
            required
            type="text"
            placeholder="State"
            onChange={onChangeHandler}
            value={formData.state}
            name="state"
            className="capitalize w-full px-3.5 py-1.5 rounded border-gray-400 border text-black"
          />
        </div>
        <div className="flex gap-3 w-full">
          <input
            required
            type="number"
            placeholder="Zipcode"
            onChange={onChangeHandler}
            value={formData.zipcode}
            name="zipcode"
            className="capitalize w-full px-3.5 py-1.5 rounded border-gray-400 border text-black"
          />
          <input
            required
            type="text"
            placeholder="Country"
            onChange={onChangeHandler}
            value={formData.country}
            name="country"
            className="capitalize w-full px-3.5 py-1.5 rounded border-gray-400 border text-black"
          />
        </div>
        <input
          required
          type="number"
          placeholder="Phone"
          onChange={onChangeHandler}
          value={formData.phone}
          name="phone"
          className="capitalize w-full px-3.5 py-1.5 rounded border-gray-400 border text-black"
        />
      </div>

      {/* right side - cart Amount */}
      <div className="w-full max-w-[500px] flex flex-col gap-8">
        <CartAmount />

        {/* Payment method selection */}
        <div>
          <h1 className="text-lg font-semibold pb-2">Payment Method</h1>
          <div className="flex gap-4 flex-wrap">
            <div
              className="flex gap-2 items-center h-10 px-5 border border-gray-300 rounded-sm cursor-pointer "
              onClick={() => setPaymentMode("stripe")}
            >
              <div
                className={`w-3 h-3 rounded-full border border-gray-500 ${
                  paymentMode === "stripe" ? "bg-green-400" : ""
                }`}
              />
              <img src={icons.stripe} alt="" className="w-16 h-8 " />
            </div>
            <div
              className="flex gap-2 items-center h-10 px-5 border border-gray-300 rounded-sm cursor-pointer"
              onClick={() => setPaymentMode("razorpay")}
            >
              <div
                className={`w-3 h-3 rounded-full border border-gray-500 ${
                  paymentMode === "razorpay" ? "bg-green-400" : ""
                }`}
              />

              <img src={icons.razorpay} alt="" className="w-24 h-12 " />
            </div>
            <div
              className="flex gap-2 items-center py-1.5 px-3.5 border border-gray-300 rounded-sm cursor-pointer"
              onClick={() => setPaymentMode("cod")}
            >
              <div
                className={`w-3 h-3 rounded-full border border-gray-500 ${
                  paymentMode === "cod" ? "bg-green-400" : ""
                }`}
              />
              Cash on Delivery
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-black w-fit px-4 py-2 mt-2 self-end"
        >
          Proceed to checkout
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
