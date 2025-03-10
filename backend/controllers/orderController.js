import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// payment using COD
const paymentMethod = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate({ _id: userId }, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error.message);
  }
};

// payment using stripe
const paymentMethodStripe = async (req, res) => {};

// payment using Razorpay
// payment using Razorpay
const paymentMethodRazorpay = async (req, res) => {};

// show all order in admin panel
const allOrder = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
  }
};

// update status of orders in admin panel
const updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    await orderModel.findByIdAndUpdate({ _id: orderId }, { status });
    res.json({ success: true, message: "status updated" });
  } catch (error) {
    console.log(error.message);
  }
};

// show user order list
const userOrder = async (req, res) => {
  try {
    const { userId } = req.body;

    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error.message);
  }
};

export {
  paymentMethod,
  paymentMethodStripe,
  paymentMethodRazorpay,
  allOrder,
  updateOrderStatus,
  userOrder,
};
