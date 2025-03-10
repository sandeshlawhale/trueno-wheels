import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  model: { type: String, required: true },
  images: { type: Array, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  year: { type: Number, required: true },
  dimension: { type: String, required: true },
  scale: { type: String, required: true },
  color: { type: String, required: true },
  collectors: { type: Boolean },
  limited: { type: Boolean },
  bestseller: { type: Boolean },
  release: { type: String, required: true },
  availability: { type: String, required: true },
  // rating: { type: Number, required: true },
  desc1: { type: String, required: true },
  desc2: { type: String },
  desc3: { type: String },
  date: { type: Number },
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
