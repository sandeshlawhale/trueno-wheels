import { div } from "framer-motion/client";
import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="w-full sm:w-1/2 m-auto pt-16 flex flex-col items-center">
      <div className="m-auto flex flex-col items-center ">
        <p className="text-gray-700 text-2xl sm:text-3xl font-medium">
          Stay Ahead of the Track!
        </p>
        <p className="text-xs sm:text-sm italic">
          Be the first to know about new arrivals, exclusive deals, and
          limited-edition releases.
        </p>
      </div>
      <form
        className=" w-full flex flex-col md:flex-row justify-between items-center gap-1 rounded md:border border-gray-700 overflow-hidden m-4 "
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="xyz@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          className="md:px-6 px-4 w-full py-2 text-lg flex-1  md:outline-none md:border-none border border-gray-600"
        />
        <button
          type="submit"
          className="bg-black text-white px-8 text-lg  py-2 w-full sm:w-96 md:w-fit active:bg-black/60 transition-colors duration-300 ease-in-out"
        >
          Join the pit crew
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
