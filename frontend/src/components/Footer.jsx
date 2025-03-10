import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="border-t border-b border-gray-300 flex flex-col gap-4 sm:grid grid-cols-2 py-4 mt-16">
        <div className="w-full ">
          <img src={assets.Logo} alt="" className="w-2/4" />
          <p className="text-2xl font-bold pt-4 tracking-wide">
            Drifting into Your Collection
          </p>
          <p className="text-base w-2/3 text-gray-500 leading-5 tracking-wide">
            Discover exclusive Hot Wheels models, rare editions, and everything
            you need to fuel your car collection.
          </p>
        </div>
        <div className="grid grid-cols-2 border-t border-gray-300 sm:border-none">
          {/* nav Links */}
          <div className="flex flex-col gap-2 text-lg text-gray-500 ">
            <Link
              to="/"
              className="hover:text-gray-700 transition-colors duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/collection"
              className="hover:text-gray-800 transition-colors duration-300 ease-in-out"
            >
              Collection
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-800 transition-colors duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-800 transition-colors duration-300 ease-in-out"
            >
              Contact
            </Link>
            <Link
              to="/"
              className="hover:text-gray-800 transition-colors duration-300 ease-in-out"
            >
              Policies
            </Link>

            <Link
              to="/"
              className="hover:text-gray-800 transition-colors duration-300 ease-in-out"
            >
              Blog
            </Link>
          </div>

          {/* social links */}
          <div className="flex flex-col gap-2 text-lg text-gray-500 ">
            <Link
              to="/"
              className="flex gap-2 items-center hover:text-gray-800 transition-colors duration-300 ease-in-out"
            >
              <FaFacebook />
              Facebook
            </Link>
            <Link
              to="/"
              className="flex gap-2 items-center hover:text-gray-800 transition-colors duration-300 ease-in-out"
            >
              <AiFillInstagram />
              Instagram
            </Link>
            <Link
              to="/"
              className="flex gap-2 items-center hover:text-gray-800 transition-colors duration-300 ease-in-out"
            >
              <FaTwitter />
              Twitter
            </Link>
            <Link
              to="/"
              className="flex gap-2 items-center hover:text-gray-800 transition-colors duration-300 ease-in-out"
            >
              <FaYoutube />
              YoutTube
            </Link>
          </div>
        </div>
      </div>
      <div className="w-fit m-auto p-4 text-sm">
        &copy; 2024 Trueno Wheels. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
