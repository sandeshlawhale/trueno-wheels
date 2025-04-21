import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import cartRouter from "./routers/cartRouter.js";
import orderRouter from "./routers/orderRouter.js";

// initializing app/config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
const allowedOrigin = process.env.ALLOWED_ORIGIN;

app.use(
  cors({
    origin: allowedOrigin,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.get("/api/test", (req, res) => {
  res.send("Test API Working");
});

app.get("/", (req, res) => {
  res.send("API Working");
});

// listen port
app.listen(port, () => {
  console.log("server listening on port " + port);
});
