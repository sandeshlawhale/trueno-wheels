import React, { useEffect, useState } from "react";
import { BackendUrl } from "../App.jsx";
import axios from "axios";
import { Table } from "antd";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [products, setProducts] = useState([]);

  const fetchProduts = async () => {
    try {
      const response = await axios.get(BackendUrl + "/api/product/list");
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduts();
  }, [products]);

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        BackendUrl + "/api/product/remove",
        {
          id,
        },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "key",
      render: (image) => {
        return <img src={image} className="w-20" />;
      },
    },
    {
      title: "Name of the Model",
      dataIndex: "model",
      key: "key",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "key",
    },
    {
      title: "Release Date",
      dataIndex: "release",
      key: "key",
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "key",
    },
    {
      title: "Car Type",
      dataIndex: "type",
      key: "key",
    },
    {
      title: "Scale",
      dataIndex: "scale",
      key: "key",
    },
    {
      title: "Dimension",
      dataIndex: "dimension",
      key: "key",
    },
    {
      title: "Price",
      dataIndex: "dimension",
      key: "key",
    },
    {
      title: "Collectors Edition",
      dataIndex: "collectors",
      key: "key",
    },
    {
      title: "Limited Edition",
      dataIndex: "limited",
      key: "key",
    },
    {
      title: "Bestseller",
      dataIndex: "bestseller",
      key: "key",
    },
    {
      title: "Availability",
      dataIndex: "availability",
      key: "key",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "key",
      render: (action, payload) => {
        return (
          <p
            onClick={() => removeProduct(payload.id)}
            className=" group relative cursor-pointer"
          >
            {action}
            <span className="absolute text-sm px-2 py-1 bg-gray-300 rounded-sm -bottom-full  hidden group-hover:block shadow-md">
              Remove
            </span>
          </p>
        );
      },
    },
  ];

  return (
    <div className=" w-full mb-28">
      <h1 className="text-xl font-medium mb-4">All Products</h1>
      <div className="grid auto-cols-fr">
        <Table
          className="flex-1"
          columns={columns}
          dataSource={products?.map((item, index) => {
            return {
              image: item.images[0],
              model: item.model,
              year: item.year,
              release: item.release,
              color: item.color,
              type: item.type,
              scale: item.scale,
              dimension: item.dimension,
              price: item.price,
              collectors: item.collectors ? "Yes" : "No",
              limited: item.limited ? "Yes" : "No",
              bestseller: item.bestseller ? "Yes" : "No",
              availability:
                item.availability === "in" ? "In Stock" : "Out of Stock",
              id: item._id,
              action: "X",
              key: index + 1,
            };
          })}
          scroll={{ x: true }}
        ></Table>
      </div>
    </div>
  );
};

export default List;
