import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../util/ShopContext";
import ProducItem from "../components/ProducItem";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [carType, setCarType] = useState([]);
  const [color, setColor] = useState([]);
  const [rating, setRating] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [price, setPrice] = useState("relavent");

  const navigate = useNavigate();

  const toggleCarType = (e) => {
    if (carType.includes(e.target.name)) {
      setCarType((prev) => prev.filter((item) => item !== e.target.name));
    } else {
      setCarType((prev) => [...prev, e.target.name]);
    }
  };
  const toggleColor = (e) => {
    if (color.includes(e.target.name)) {
      setColor((prev) => prev.filter((item) => item !== e.target.name));
    } else {
      setColor((prev) => [...prev, e.target.name]);
    }
  };
  const toggleRating = (e) => {
    if (rating.includes(e.target.name)) {
      setRating((prev) => prev.filter((item) => item !== e.target.name));
    } else {
      setRating((prev) => [...prev, e.target.name]);
    }
  };
  const toggleAvailability = (e) => {
    if (availability.includes(e.target.name)) {
      setAvailability((prev) => prev.filter((item) => item !== e.target.name));
    } else {
      setAvailability((prev) => [...prev, e.target.name]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice("");

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.model.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (carType.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        carType.includes(item.type.toLowerCase())
      );
    }

    if (color.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        color.includes(item.color.toLowerCase())
      );
    }

    if (availability.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        availability.includes(item.availability)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProducts = () => {
    let fpCopy = filterProducts.slice("");

    switch (price) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [
    carType,
    color,
    rating,
    availability,
    price,
    search,
    showSearch,
    products,
  ]);

  useEffect(() => {
    sortProducts();
  }, [price]);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  return (
    <div className="pt-12 flex flex-col sm:flex-row gap-8 w-full">
      {/* filters */}
      <div className="min-w-[200px] sm:mt-6">
        <p
          className="text-lg font-semibold tracking-wide flex items-center gap-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          Filters
          <IoIosArrowForward
            className={`sm:hidden ${showFilter ? "rotate-90" : ""}`}
          />
        </p>
        <div className={`${showFilter ? "" : "hidden"} sm:block`}>
          {/* color Filter */}
          <div className="border border-gray-500 px-4 py-2 text-sm tracking-wide mb-2">
            <p className="text-base font-semibold ">Color</p>
            <div className="flex items-center gap-2 capitalize pt-1">
              <input
                type="checkbox"
                name="yellow"
                id="yellow"
                onChange={toggleColor}
              />
              <label htmlFor="yellow">yellow</label>
            </div>
            <div className="flex items-center gap-2 capitalize pt-1">
              <input
                type="checkbox"
                name="red"
                id="red"
                onChange={toggleColor}
              />
              <label htmlFor="red">red</label>
            </div>
            <div className="flex items-center gap-2 capitalize pt-1">
              <input
                type="checkbox"
                name="silver"
                id="silver"
                onChange={toggleColor}
              />
              <label htmlFor="silver">silver</label>
            </div>
            <div className="flex items-center gap-2 capitalize pt-1">
              <input
                type="checkbox"
                name="white"
                id="white"
                onChange={toggleColor}
              />
              <label htmlFor="white">white</label>
            </div>
            <div className="flex items-center gap-2 capitalize pt-1">
              <input
                type="checkbox"
                name="black"
                id="black"
                onChange={toggleColor}
              />
              <label htmlFor="black">black</label>
            </div>
            <div className="flex items-center gap-2 capitalize pt-1">
              <input
                type="checkbox"
                name="green"
                id="green"
                onChange={toggleColor}
              />
              <label htmlFor="green">green</label>
            </div>
          </div>
          {/* type filter */}
          <div className="border border-gray-500 px-4 py-2 text-sm tracking-wide mb-2">
            <p className="text-base font-semibold ">Car Type</p>
            <div className="flex items-center gap-2 capitalize pt-1">
              <input
                type="checkbox"
                name="sports car"
                onChange={toggleCarType}
                id="Sport"
              />
              <label htmlFor="Sport">Sports Car</label>
            </div>
            <div className="flex items-center gap-2 capitalize pt-1">
              <input
                type="checkbox"
                name="muscle car"
                onChange={toggleCarType}
                id="muscle"
              />
              <label htmlFor="muscle">muscle Car</label>
            </div>
            <div className="flex items-center gap-2 capitalize pt-1">
              <input
                type="checkbox"
                name="supercar"
                onChange={toggleCarType}
                id="super"
              />
              <label htmlFor="super">supercar</label>
            </div>
            <div className="flex items-center gap-2 capitalize pt-1">
              <input
                type="checkbox"
                name="classic"
                onChange={toggleCarType}
                id="classic"
              />
              <label htmlFor="classic">classic</label>
            </div>
            <div className="flex items-center gap-2 capitalize pt-1">
              <input
                type="checkbox"
                name="sedan car"
                onChange={toggleCarType}
                id="sedan car"
              />
              <label htmlFor="sedan car">sedan car</label>
            </div>
          </div>
          {/* rating filter */}
          {/* neeed to work on this */}
          {/* <div className="border border-gray-500 px-4 py-2 text-sm tracking-wide mb-2">
          <p className="text-base font-semibold ">Rating</p>

          <div className="flex items-center gap-2 capitalize pt-1">
            <input onChange={toggleRating} type="checkbox" name="3" id="3" />
            <label htmlFor="3">3 stars and above</label>
          </div>
          <div className="flex items-center gap-2 capitalize pt-1">
            <input onChange={toggleRating} type="checkbox" name="4" id="4" />
            <label htmlFor="4">4 stars and above</label>
          </div>
          <div className="flex items-center gap-2 capitalize pt-1">
            <input onChange={toggleRating} type="checkbox" name="5" id="5" />
            <label htmlFor="5">5 stars</label>
          </div>
        </div> */}
          {/* availability filter */}
          <div className="border border-gray-500 px-4 py-2 text-sm tracking-wide mb-2">
            <p className="text-base font-semibold ">Availability</p>

            <div className="flex items-center gap-2 capitalize pt-1">
              <input
                onChange={toggleAvailability}
                type="checkbox"
                name="in"
                id="in"
              />
              <label htmlFor="in">In Stock</label>
            </div>
            <div className="flex items-center gap-2 capitalize pt-1">
              <input
                onChange={toggleAvailability}
                type="checkbox"
                name="out"
                id="out"
              />
              <label htmlFor="out">out of Stock</label>
            </div>
          </div>
        </div>
      </div>

      {/* collection */}
      <div className="w-full">
        <div className="flex-1 flex flex-col md:flex-row gap-2 md:justify-between md:items-center ">
          <Title title1={"All"} title2={"Collection"} />
          <div className="text-base font-medium flex gap-2 items-center w-[275px]">
            Price Range:
            <select
              name=""
              id=""
              className="border border-gray-500 py-1 px-2 outline-none"
              onChange={(e) => setPrice(e.target.value)}
            >
              <option value="relavent">Relavent</option>
              <option value="low-high">Low-High</option>
              <option value="high-low">High-Low</option>
            </select>
          </div>
        </div>
        <div className="w-full mb-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 sm:gap-6 mt-4">
          {filterProducts.map((item) => (
            <ProducItem
              key={item._id}
              id={item._id}
              images={item.images}
              model={item.model}
              price={item.price}
              release={item.release}
              year={item.year}
              collectors={item.collectors}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
