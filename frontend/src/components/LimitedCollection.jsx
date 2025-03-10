import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import ProducItem from "./ProducItem";
import { ShopContext } from "../util/ShopContext";
import { Link } from "react-router-dom";

const LimitedCollection = () => {
  const { products } = useContext(ShopContext);
  const [limited, setLimited] = useState([]);

  useEffect(() => {
    setLimited(products.filter((item) => item.limited).slice(0, 6));
  }, [products]);

  return (
    <div className="my-10">
      <div className="flex gap-2">
        <Title
          title1={"Limited Edition"}
          title2={"Treasures"}
          rest={"for True Collectors"}
          subHeading={"Exclusive Wheels Await"}
          desc={
            "Discover rare and iconic models—available for a limited time only. Once they're gone, they’re gone for good."
          }
        />
      </div>
      <div className="w-full mb-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 mt-2">
        {limited.map((item) => (
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
  );
};

export default LimitedCollection;
