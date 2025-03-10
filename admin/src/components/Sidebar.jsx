import React from "react";
import { NavLink } from "react-router-dom";
import assets from "../assets/assets";

const NavLinks = [
  {
    name: "Add a product",
    to: "/add",
    src: assets.Add,
  },
  {
    name: "List products",
    to: "/list",
    src: assets.List,
  },
  {
    name: "Orders",
    to: "/order",
    src: assets.Order,
  },
];

const Sidebar = () => {
  return (
    <div className="border-r border-gray-400 h-full pt-8 flex flex-col gap-3 sm:min-w-[150px] min-w-10">
      {NavLinks.map((item, index) => {
        return (
          <NavLink
            key={index}
            to={item.to}
            className={`p-2 sm:px-4 sm:py-2 border-2 border-gray-400 border-r-0 rounded-s-lg flex items-center gap-2 hover:border-gray-600 transition-colors duration-300 ease-in-out`}
          >
            <img src={item.src} alt="" className="w-5 h-5" />
            <p className="hidden sm:block">{item.name}</p>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
