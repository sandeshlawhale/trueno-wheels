import express from "express";

import userAuth from "../middleware/auth.js";
import adminAuth from "../middleware/adminAuth.js";
import {
  allOrder,
  paymentMethod,
  paymentMethodRazorpay,
  paymentMethodStripe,
  updateOrderStatus,
  userOrder,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

// payment methods routes
orderRouter.post("/payment-cod", userAuth, paymentMethod);
orderRouter.post("/payment-stripe", userAuth, paymentMethodStripe);
orderRouter.post("/payment-razorpay", userAuth, paymentMethodRazorpay);

// admin order routes
orderRouter.post("/order-list", adminAuth, allOrder);
orderRouter.post("/order-update-status", adminAuth, updateOrderStatus);

// user order list
orderRouter.post("/user-order-list", userAuth, userOrder);

export default orderRouter;
