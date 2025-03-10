import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../util/ShopContext";

const Navbar = () => {
  const {
    showSearch,
    setShowSearch,
    getCartCount,
    token,
    setToken,
    setCartItem,
    navigate,
  } = useContext(ShopContext);
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  const handleSearch = () => {
    navigate("/collection");
    setShowSearch(true);
  };

  const removeUser = () => {
    navigate("/login");
    setToken("");
    localStorage.removeItem("token");
    setCartItem({});
  };

  return (
    <header className="pt-4 flex items-center justify-between ">
      {/* LOGO  */}
      <Link to="/" className="w-36">
        <img src={assets.Logo} alt="Logo" className="" />
      </Link>

      {/* Nav */}
      <nav className="hidden sm:flex gap-4 ">
        <Navigation path="/" title="Home" location={location.pathname} />
        <Navigation
          path="/collection"
          title="Collection"
          location={location.pathname}
        />
        <Navigation path="/about" title="About" location={location.pathname} />
        <Navigation
          path="/contact"
          title="Contact"
          location={location.pathname}
        />
      </nav>

      {/* search and profile */}
      <div className="flex gap-2">
        <div className="p-2 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer transition-colors ease-in">
          <FiSearch className="w-6 h-6" onClick={handleSearch} />
        </div>
        <div className="relative group p-2 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer transition-colors ease-in">
          <LuUser2
            className="w-6 h-6"
            onClick={() => (token ? null : navigate("/login"))}
          />
          {token && (
            <div className="absolute z-10 hidden group-hover:flex flex-col gap-1 right-0 top-8 p-1 pb-2 bg-gray-100 rounded-md w-24">
              <p className="text-sm px-2  hover:font-medium">My Profile</p>
              <Link to="/orders">
                <p className="text-sm px-2  hover:font-medium">Orders</p>
              </Link>
              <p
                className="text-sm px-2  hover:font-medium"
                onClick={removeUser}
              >
                Logout
              </p>
            </div>
          )}
        </div>
        <Link
          to="/cart"
          className="relative p-2 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer transition-colors ease-in"
        >
          <MdOutlineShoppingCart className="w-6 h-6" />
          <span className="absolute text-white bg-black text-[10px] h-4 w-4 top-1/2 left-1/2 flex items-center justify-center rounded-full">
            {getCartCount()}
          </span>
        </Link>

        {/* Hamburger for Small Screen */}
        <div
          className="p-2 flex sm:hidden items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer transition-colors ease-in"
          onClick={() => setOpenMenu(true)}
        >
          <HiOutlineMenuAlt3 className="w-6 h-6" />
        </div>
      </div>

      {/* nav for small screen */}
      <AnimatePresence mode="wait">
        {openMenu && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute border-l border-gray-500 inset-0 bg-white flex sm:hidden flex-col z-[100]"
          >
            <div
              className="flex mb-4 items-center gap-2 bg-gray-50 p-4 cursor-pointer"
              onClick={() => setOpenMenu(false)}
            >
              <IoIosArrowBack />
              Back
            </div>

            <NavLink
              to="/"
              onClick={() => setOpenMenu(false)}
              className="small-nav w-full flex justify-center p-2 border-b-[1px] border-gray-100 text-gray-700"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setOpenMenu(false)}
              to="/collection"
              className="small-nav w-full flex justify-center p-2 border-b-[1px] border-gray-100"
            >
              Collection
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setOpenMenu(false)}
              className="small-nav w-full flex justify-center p-2 border-b-[1px] border-gray-100"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setOpenMenu(false)}
              className="small-nav w-full flex justify-center p-2 border-b-[1px] border-gray-100"
            >
              Contact
            </NavLink>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

const Navigation = ({ path, title, location }) => {
  return (
    <NavLink to={path} className="group flex flex-col items-center gap-1">
      <div className="text-base uppercase font-medium  transition-colors ease-in text-gray-500 group-hover:text-gray-700 ">
        {title}
      </div>
      {location === path && (
        <motion.p
          layoutId="navUnderline"
          key={title}
          className="w-1/2 h-[2px] bg-gray-800"
        />
      )}
    </NavLink>
  );
};

export default Navbar;
