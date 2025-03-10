import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import ProducItem from "./ProducItem";
import { ShopContext } from "../util/ShopContext";
import { Link } from "react-router-dom";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [best, setBest] = useState([]);

  useEffect(() => {
    setBest(products.filter((item) => item.bestseller).slice(0, 6));
  }, [products]);

  return (
    <div className="my-10">
      <div className="flex gap-2">
        <Title
          title1={"Top"}
          title2={"Picks"}
          rest={"of the Track"}
          subHeading={"Fan Favorites"}
          desc={"These top picks are a hit with collectors everywhere!"}
        />
      </div>
      <div className="w-full mb-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 mt-2">
        {best.map((item) => (
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

export default BestSeller;
