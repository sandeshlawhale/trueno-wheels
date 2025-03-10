import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// to add the product
const addProduct = async (req, res) => {
  try {
    const {
      model,
      year,
      type,
      price,
      scale,
      dimension,
      color,
      collectors,
      limited,
      bestseller,
      release,
      availability,
      rating,
      desc1,
      desc2,
      desc3,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const imagesArray = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    const imagesURL = await Promise.all(
      imagesArray.map(async (image) => {
        const result = await cloudinary.uploader.upload(image.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      model,
      year: Number(year),
      type,
      price: Number(price),
      scale,
      dimension,
      color,
      collectors: collectors === "true" ? true : false,
      limited: limited === "true" ? true : false,
      bestseller: bestseller === "true" ? true : false,
      release,
      availability,
      rating: Number(rating),
      desc1,
      desc2,
      desc3,
      images: imagesURL,
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// to get the list of all products
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({
      success: true,
      products,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// to remove the perticular product by id
const removeProduct = async (req, res) => {
  try {
    const { id } = req.body;

    await productModel.findByIdAndDelete(id);

    res.json({ success: true, message: "product removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// to get the single product by id
const singleProduct = async (req, res) => {
  try {
    const { id } = req.body;

    const product = await productModel.findById(id);

    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };
