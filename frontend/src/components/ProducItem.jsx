import React, { useContext, useState } from "react";
import { ShopContext } from "../util/ShopContext";
import { Link } from "react-router-dom";

const ProducItem = ({
  id,
  images,
  model,
  price,
  release,
  year,
  collectors,
  limited,
}) => {
  const [activeImage, setActiveImage] = useState(images[0]);
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="group  flex flex-col gap-1">
      <div
        className="w-full aspect-[4/3] overflow-hidden cursor-pointer"
        style={{
          background:
            "linear-gradient(to bottom,rgba(0,0,0,0.7), Transparent , rgba(0,0,0,0.7)",
        }}
      >
        <img
          src={activeImage}
          alt=""
          className="w-full h-full object-contain  scale-100 group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="w-full mx-1">
        <p className="text-sm text-gray-700 font-medium">
          {year}-{model}
        </p>
        {collectors && (
          <p className="text-xs text-gray-500 ">Collectors Edition</p>
        )}
        {limited && <p className="text-xs text-gray-500 ">Limited Edition</p>}
        <p className="text-xs text-gray-500 ">{release}</p>
        <p className="text-base text-gray-700 font-medium">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProducItem;
