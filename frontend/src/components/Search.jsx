import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../util/ShopContext";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useLocation } from "react-router-dom";

const Search = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return (
    showSearch &&
    visible && (
      <div className="mt-4 border-b border-t border-gray-500 bg-gray-100 flex items-center justify-center gap-2 p-4">
        <div className="flex gap-2 items-center rounded-full overflow-hidden bg-white border border-gray-600 w-full lg:w-[600px]">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="flex-1 py-2 px-4 outline-none border-none"
          />
          <CiSearch className=" cursor-pointer h-12 p-3 w-12" />
        </div>
        <IoMdClose
          className=" cursor-pointer h-6 w-6"
          onClick={() => setShowSearch(false)}
        />
      </div>
    )
  );
};

export default Search;
