import React, { useState } from "react";
import assets from "../assets/assets.js";
import { toast } from "react-toastify";
import axios from "axios";
import { BackendUrl } from "../App.jsx";

const Add = ({ token }) => {
  // state for loading button
  const [loading, setLoading] = useState(false);

  // images state
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  // states for the other information of the products
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [release, setRelease] = useState("");
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const [scale, setScale] = useState("");
  const [dimension, setDimension] = useState("");
  const [price, setPrice] = useState("");
  const [collectors, setCollectors] = useState(false);
  const [limited, setLimited] = useState(false);
  const [bestseller, setBestseller] = useState(false);
  const [availability, setAvailability] = useState("in");
  const [desc1, setDesc1] = useState("");
  const [desc2, setDesc2] = useState("");
  const [desc3, setDesc3] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();

      formData.append("model", model);
      formData.append("year", year);
      formData.append("release", release);
      formData.append("color", color);
      formData.append("type", type);
      formData.append("scale", scale);
      formData.append("dimension", dimension);
      formData.append("price", price);
      formData.append("collectors", collectors);
      formData.append("limited", limited);
      formData.append("bestseller", bestseller);
      formData.append("availability", availability);
      formData.append("desc1", desc1);
      formData.append("desc2", desc2);
      formData.append("desc3", desc3);

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        BackendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("Product Added");
      }

      // setting the form empty
      setModel("");
      setYear("");
      setRelease("");
      setColor("");
      setType("");
      setScale("");
      setDimension("");
      setPrice("");
      setCollectors(false);
      setLimited(false);
      setBestseller(false);
      setAvailability("in");
      setDesc1("");
      setDesc2("");
      setDesc3("");
      setImage1(false);
      setImage2(false);
      setImage3(false);
      setImage4(false);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-medium mb-4">Add a product</h1>
      <form onSubmit={handleSubmit}>
        {/* Images Input */}
        <div>
          <p className="text-base tracking-wide mb-1">Upload Images</p>
          <div className="flex gap-2">
            <label
              htmlFor="image1"
              className="bg-gray-200 w-20 h-20 border border-dashed border-gray-600 flex items-center justify-center rounded-md cursor-pointer"
            >
              {image1 ? (
                <img
                  src={URL.createObjectURL(image1)}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <img src={assets.Upload} alt="" className="w-8 h-8" />
              )}
              <input
                onChange={(e) => setImage1(e.target.files[0])}
                type="file"
                name="image1"
                id="image1"
                className="hidden"
                required
              />
            </label>
            <label
              htmlFor="image2"
              className="bg-gray-200 w-20 h-20 border border-dashed border-gray-600 flex items-center justify-center rounded-md cursor-pointer"
            >
              {image2 ? (
                <img
                  src={URL.createObjectURL(image2)}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <img src={assets.Upload} alt="" className="w-8 h-8" />
              )}
              <input
                onChange={(e) => setImage2(e.target.files[0])}
                type="file"
                name="image2"
                id="image2"
                className="hidden"
              />
            </label>
            <label
              htmlFor="image3"
              className="bg-gray-200 w-20 h-20 border border-dashed border-gray-600 flex items-center justify-center rounded-md cursor-pointer"
            >
              {image3 ? (
                <img
                  src={URL.createObjectURL(image3)}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <img src={assets.Upload} alt="" className="w-8 h-8" />
              )}
              <input
                onChange={(e) => setImage3(e.target.files[0])}
                type="file"
                name="image3"
                id="image3"
                className="hidden"
              />
            </label>
            <label
              htmlFor="image4"
              className="bg-gray-200 w-20 h-20 border border-dashed border-gray-600 flex items-center justify-center rounded-md cursor-pointer"
            >
              {image4 ? (
                <img
                  src={URL.createObjectURL(image4)}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <img src={assets.Upload} alt="" className="w-8 h-8" />
              )}
              <input
                onChange={(e) => setImage4(e.target.files[0])}
                type="file"
                name="image4"
                id="image4"
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="model" className="flex flex-col">
            <p className="text-base tracking-wide">Name of the model</p>
            <input
              type="text"
              onChange={(e) => setModel(e.target.value)}
              value={model}
              placeholder="model"
              className="border border-gray-500 rounded-md px-4 py-2"
              required
            />
          </label>
        </div>
        <div className="mt-2 flex gap-2">
          <label htmlFor="model" className="flex flex-col">
            <p className="text-base tracking-wide">Year</p>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Year"
              className="border border-gray-500 rounded-md px-4 py-2"
              required
            />
            <p className="text-sm text-gray-500">Year of the actual model</p>
          </label>
          <label htmlFor="model" className="flex flex-col">
            <p className="text-base tracking-wide">Release Date</p>
            <input
              type="text"
              value={release}
              onChange={(e) => setRelease(e.target.value)}
              placeholder="for ex. Dec-21"
              className="border border-gray-500 rounded-md px-4 py-2"
              required
            />
            <p className="text-sm text-gray-500">Release date of the model</p>
          </label>
        </div>
        <hr className="mt-4 bg-gray-300 h-[1px]" />

        {/* Model Details Section */}
        <div className="mt-4 flex gap-2">
          <label htmlFor="model" className="flex flex-col">
            <p className="text-base tracking-wide">Color</p>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="eg. White"
              className="border border-gray-500 rounded-md px-4 py-2"
              required
            />
            <p className="text-sm text-gray-500">Color of the actual model</p>
          </label>
          <label htmlFor="model" className="flex flex-col w-full">
            <p className="text-base tracking-wide">Type</p>
            <select
              name="dropdown_type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              id="dropdown_type"
              className="border border-gray-500 rounded-md px-4 py-2 w-full"
              required
            >
              <option value="">none</option>
              <option value="classic">Classic</option>
              <option value="sports car">Sports Car</option>
              <option value="muscle car">Muscle Car</option>
              <option value="supercar"> Supercar</option>
              <option value="sedan car"> Sedan car</option>
            </select>

            <p className="text-sm text-gray-500">Type of Car</p>
          </label>
        </div>
        <div className="mt-2 flex gap-2">
          <label htmlFor="model" className="flex flex-col">
            <p className="text-base tracking-wide">Scale</p>
            <input
              type="text"
              value={scale}
              onChange={(e) => setScale(e.target.value)}
              placeholder="eg. 1:64"
              defaultValue={"1:64"}
              className="border border-gray-500 rounded-md px-4 py-2"
              required
            />
            <p className="text-sm text-gray-500">Scale of the model</p>
          </label>
          <label htmlFor="model" className="flex flex-col">
            <p className="text-base tracking-wide">Dimension</p>
            <input
              type="text"
              value={dimension}
              onChange={(e) => setDimension(e.target.value)}
              placeholder="eg. 3.6 x 1.5"
              defaultValue={"3.6 x 1.5"}
              className="border border-gray-500 rounded-md px-4 py-2"
              required
            />
            <p className="text-sm text-gray-500">
              Dimension of the model (length*breadth) in Inches
            </p>
          </label>
        </div>
        <hr className="mt-4 bg-gray-300 h-[2px]" />

        {/* Price and highlights details */}
        <div className="mt-2 flex gap-2">
          <label htmlFor="model" className="flex flex-col">
            <p className="text-base tracking-wide">Price</p>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="eg. 10"
              className="border border-gray-500 rounded-md px-4 py-2"
              required
            />
            <p className="text-sm text-gray-500">
              Price of the model in Dollers $
            </p>
          </label>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          {/* collectors edition */}
          <div className="flex  gap-4">
            <p className="w-44 ">Collectors Edition?</p>
            <div className="flex gap-4">
              <label htmlFor="cYes" className="flex gap-1 cursor-pointer">
                <input
                  type="radio"
                  value={true}
                  onChange={(e) => setCollectors(e.target.value)}
                  id="cYes"
                  name="collectors"
                  required
                />
                <p>Yes</p>
              </label>
              <label htmlFor="cNo" className="flex gap-1 cursor-pointer">
                <input
                  type="radio"
                  value={false}
                  onChange={(e) => setCollectors(e.target.value)}
                  id="cNo"
                  name="collectors"
                  required
                />
                <p>No</p>
              </label>
            </div>
          </div>
          {/* limited edition */}
          <div className="flex  gap-4">
            <p className="w-44 ">Limited Edition?</p>
            <div className="flex gap-4">
              <label htmlFor="lYes" className="flex gap-1 cursor-pointer">
                <input
                  type="radio"
                  value={true}
                  onChange={(e) => setLimited(e.target.value)}
                  id="lYes"
                  name="limited"
                  required
                />
                <p>Yes</p>
              </label>
              <label htmlFor="lNo" className="flex gap-1 cursor-pointer">
                <input
                  type="radio"
                  value={false}
                  onChange={(e) => setLimited(e.target.value)}
                  id="lNo"
                  name="limited"
                  required
                />
                <p>No</p>
              </label>
            </div>
          </div>
          {/* Bestseller edition */}
          <div className="flex  gap-4">
            <p className="w-44 ">Bestseller?</p>
            <div className="flex gap-4">
              <label htmlFor="bYes" className="flex gap-1 cursor-pointer">
                <input
                  type="radio"
                  value={true}
                  onChange={(e) => setBestseller(e.target.value)}
                  id="bYes"
                  name="bestseller"
                  required
                />
                <p>Yes</p>
              </label>
              <label htmlFor="bNo" className="flex gap-1 cursor-pointer">
                <input
                  type="radio"
                  value={false}
                  id="bNo"
                  name="bestseller"
                  onChange={(e) => setBestseller(e.target.value)}
                  required
                />
                <p>No</p>
              </label>
            </div>
          </div>
          {/* availability */}
          <div className="flex  gap-4">
            <p className="w-44 ">Availability?</p>
            <div className="flex gap-4">
              <label htmlFor="aYes" className="flex gap-1 cursor-pointer">
                <input
                  type="radio"
                  value="in"
                  onChange={(e) => setAvailability(e.target.value)}
                  id="aYes"
                  name="availability"
                  required
                />
                <p>In Stock</p>
              </label>
              <label htmlFor="aNo" className="flex gap-1 cursor-pointer">
                <input
                  type="radio"
                  value="out"
                  onChange={(e) => setAvailability(e.target.value)}
                  id="aNo"
                  name="availability"
                  required
                />
                <p>Out of Stock</p>
              </label>
            </div>
          </div>
          <hr className="mt-4 bg-gray-300 h-[2px]" />

          {/* product Description */}
          <label htmlFor="model" className="flex flex-col">
            <p className="text-base tracking-wide">Description</p>
            <textarea
              name=""
              id=""
              value={desc1}
              onChange={(e) => setDesc1(e.target.value)}
              placeholder="Decription about the model"
              className="border border-gray-500 rounded-md px-4 py-2 resize-none mb-2"
              required
            ></textarea>
            <textarea
              name=""
              id=""
              value={desc2}
              onChange={(e) => setDesc2(e.target.value)}
              placeholder="optional"
              className="border border-gray-500 rounded-md px-4 py-2 resize-none mb-2"
            ></textarea>
            <textarea
              name=""
              id=""
              value={desc3}
              onChange={(e) => setDesc3(e.target.value)}
              placeholder="optional"
              className="border border-gray-500 rounded-md px-4 py-2 resize-none "
            ></textarea>

            <p className="text-sm text-gray-500">
              Description about the produt or the actual model
            </p>
          </label>
        </div>

        <button
          type="submit"
          className="mb-24 mt-4 px-6 py-3 bg-black text-white text-xl font-semibold tracking-wider rounded-sm flex gap-2 items-center"
        >
          {loading && (
            <img src={assets.LoadingWhite} className="w-6 h-6 animate-spin" />
          )}
          {loading ? "Adding Product..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default Add;
