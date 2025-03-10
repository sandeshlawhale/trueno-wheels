import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../util/ShopContext";
import { icons } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [productImg, setProductImg] = useState("");

  const fetchProductData = async () => {
    await products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setProductImg(item.images[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return (
    productData && (
      <div className="border-t-2 border-gray-300 mt-4 pt-4">
        {/* product highlight */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-b-2 pb-4 border-gray-300">
          {/* product images */}
          <div className=" flex flex-col sm:flex-row-reverse gap-4 ">
            <img
              src={productImg}
              alt=""
              className="w-full sm:w-[80%] object-cover"
            />
            <div className="grid gap-4 grid-cols-4 sm:grid-cols-1 sm:grid-rows-4">
              {productData?.images.map((img, index) => {
                return (
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                    onClick={() => setProductImg(img)}
                    src={img}
                    key={`img_${index}`}
                  />
                );
              })}
            </div>
          </div>
          {/* Product Data */}
          <div className="w-full">
            {/* product name */}
            <h1 className="text-2xl font-bold mt-2">
              {productData.year} - {productData.model} awaits!
            </h1>

            {/* rating */}
            <p className="flex items-center gap-2 text-sm pt-4 text-gray-500">
              <img src={icons.star} alt="" className="w-4" />
              {productData.rating}/5
              <span> (87)</span>
            </p>

            {/* limited endtion>> */}
            {productData.limited && (
              <p className="text-base tracking-wide font-semibold">
                Limited Edition{" "}
                {productData.availability === "in" && <span>- Few Left!</span>}
              </p>
            )}

            {/* desc */}
            <p className="pt-4 text-lg leading-relaxed tracking-wide sm:w-[500px]">
              The {productData.model}, {productData.year} is a 1:64 scale
              masterpiece, perfect for collectors and car enthusiasts alike.
              With its iconic {productData.color} finish and intricate
              detailing, it’s a must-have for your garage!
            </p>

            {/* price */}
            <p className="pt-4 pb-4 text-2xl font-bold">
              {currency}
              {productData.price}
            </p>

            {/* Add to cart */}
            <div className="flex items-center gap-4">
              <button
                disabled={productData.availability === "out"}
                onClick={() => addToCart(productData._id)}
                className={`${
                  productData.availability === "in"
                    ? "bg-red-500 text-red-50"
                    : "bg-gray-400 text-gray-50"
                } py-2 px-6 text-xl font-semibold tracking-wide rounded-lg cursor-pointer 
               active:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed`}
              >
                Add To Cart
              </button>
              {productData.availability === "out" && (
                <p className="text-gray-500">(Out of Stock)</p>
              )}
            </div>
          </div>
        </div>

        {/* product details */}
        <div className="w-full sm:w-[80%] py-16 m-auto">
          <h1 className="text-xl sm:text-2xl font-semibold sm:font-bold ">
            Details
          </h1>
          <div className="flex flex-col gap-6">
            {/* Model and Year */}
            <div className="pt-4 flex flex-col sm:grid sm:grid-cols-[1fr_4fr] sm:gap-4 gap-2">
              <div>
                <h1 className="text-xl font-semibold ">Model</h1>
                <p className="text-sm text-gray-500">Name and Year</p>
              </div>
              <div className="flex flex-col  tracking-wider leading-relaxed sm:text-lg text-black sm:font-medium text-md font-medium ">
                <p>{productData.year}</p>
                <p>{productData.model}</p>
              </div>
            </div>
            {/* Type */}
            <div className="pt-4 flex flex-col sm:grid sm:grid-cols-[1fr_4fr] sm:gap-4 gap-2">
              <div>
                <h1 className="text-xl font-semibold ">Type</h1>
                <p className="text-sm text-gray-500">of Model</p>
              </div>
              <div className="flex flex-col  tracking-wider leading-relaxed sm:text-lg text-black sm:font-medium text-md font-medium ">
                <p>{productData.type}</p>
              </div>
            </div>
            {/* color */}
            <div className="pt-4 flex flex-col sm:grid sm:grid-cols-[1fr_4fr] sm:gap-4 gap-2">
              <div>
                <h1 className="text-xl font-semibold ">Color</h1>
                <p className="text-sm text-gray-500">of Model</p>
              </div>
              <div className="flex flex-col  tracking-wider leading-relaxed sm:text-lg text-black sm:font-medium text-md font-medium ">
                <p>{productData.color}</p>
              </div>
            </div>
            {/* desc */}
            <div className="pt-4 flex flex-col sm:grid sm:grid-cols-[1fr_4fr] sm:gap-4 gap-2">
              <div>
                <h1 className="text-xl font-semibold ">Description</h1>
                <p className="text-sm text-gray-500">Based on Real Car</p>
              </div>
              <div className="flex flex-col sm:gap-4 tracking-wider leading-relaxed sm:text-lg text-black sm:font-medium text-md font-medium gap-2">
                {productData.desc1 && <p>{productData.desc1}</p>}
                {productData.desc2 && <p>{productData.desc2}</p>}
                {productData.desc3 && <p>{productData.desc3}</p>}
              </div>
            </div>
            {/* Scale and Dimension */}
            <div className="pt-4 flex flex-col sm:grid sm:grid-cols-[1fr_4fr] sm:gap-4 gap-2">
              <div>
                <h1 className="text-xl font-semibold ">Scale</h1>
                <p className="text-sm text-gray-500">Scale and Dimensions</p>
              </div>
              <div className="flex flex-col  tracking-wider leading-relaxed sm:text-lg text-black sm:font-medium text-md font-medium ">
                <p>{productData.scale}</p>
                <p className="text-sm text-gray-500">
                  {productData.dimension} (in inches)
                </p>
              </div>
            </div>
            {/* Limited */}
            <div className="pt-4 flex flex-col sm:grid sm:grid-cols-[1fr_4fr] sm:gap-4 gap-2">
              <div>
                <h1 className="text-xl font-semibold ">Limited</h1>
                <p className="text-sm text-gray-500">time edition</p>
              </div>
              <div className="flex flex-col  tracking-wider leading-relaxed sm:text-lg text-black sm:font-medium text-md font-medium ">
                <p>{productData.limited ? "Yes" : "No"}</p>
              </div>
            </div>
            {/* Collectors */}
            <div className="pt-4 flex flex-col sm:grid sm:grid-cols-[1fr_4fr] sm:gap-4 gap-2">
              <div>
                <h1 className="text-xl font-semibold ">Collectors</h1>
                <p className="text-sm text-gray-500">edition</p>
              </div>
              <div className="flex flex-col  tracking-wider leading-relaxed sm:text-lg text-black sm:font-medium text-md font-medium ">
                <p>{productData.collectors ? "Yes" : "No"}</p>
              </div>
            </div>
            {/* Release */}
            <div className="pt-4 flex flex-col sm:grid sm:grid-cols-[1fr_4fr] sm:gap-4 gap-2">
              <div>
                <h1 className="text-xl font-semibold ">Release</h1>
                <p className="text-sm text-gray-500">of Model</p>
              </div>
              <div className="flex flex-col  tracking-wider leading-relaxed sm:text-lg text-black sm:font-medium text-md font-medium ">
                <p>{productData.release}</p>
                <p className="text-sm text-gray-500">(month-year)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts carType={productData.type} color={productData.color} />
      </div>
    )
  );
};

export default Product;
