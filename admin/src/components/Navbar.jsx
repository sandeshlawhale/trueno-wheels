import React from "react";
import assets from "../assets/assets";

const Navbar = ({ setToken, user }) => {
  return (
    <div className="flex justify-between pt-4 pb-2 border-b border-gray-400">
      <div className="flex flex-col items-center ">
        <img src={assets.Logo} alt="" className="w-32" />
        <p className="text-xl font-semibold tracking-wide">Admin Panel</p>
      </div>
      <div className="group flex items-center gap-2">
        <p className="text-base text-gray-500 ">{user}</p>
        <div
          onClick={() => setToken("")}
          className="flex items-center gap-2 bg-blue-200 p-2 rounded-md cursor-pointer group-hover:bg-blue-300 transition-colors duration-300 ease-in-out"
        >
          <img src={assets.Power} alt="" className="w-5" />
          <p className="text-base font-semibold tracking-wide hidden group-hover:block">
            Log Out
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
