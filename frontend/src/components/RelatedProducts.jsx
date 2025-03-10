import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../util/ShopContext";
import ProducItem from "./ProducItem";

const RelatedProducts = ({ carType, color }) => {
  const { products } = useContext(ShopContext);
  const [relatedProducts, setReletedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productcopy = products.slice("");

      productcopy = productcopy.filter(
        (item) => carType.toLowerCase() === item.type.toLowerCase()
      );
      //   productcopy = productcopy.filter(
      //     (item) => color.toLowerCase() === item.color.toLowerCase()
      //   );

      setReletedProducts(productcopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="w-full">
      <h1 className="text-xl font-semibold">Related Products</h1>
      <div className="w-full mb-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 sm:gap-6 mt-4">
        {relatedProducts.map((item) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
