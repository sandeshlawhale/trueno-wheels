import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../util/ShopContext";
import Title from "./Title";
import ProducItem from "./ProducItem";

const Latest = () => {
  const { products } = useContext(ShopContext);
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    setLatest(products.slice(0, 6));
  }, [products]);

  return (
    <div className="my-10" id="latest-arrivals">
      <div className="flex gap-2">
        <Title
          title1={"Latest"}
          title2={"Arrivals"}
          rest={"in the Garage"}
          subHeading={"Fresh Off the Track"}
          desc={
            "Discover the newest additions to our exclusive Hot Wheels collection."
          }
        />
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 mt-2">
        {latest.map((item) => (
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

export default Latest;
