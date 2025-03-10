import React from "react";
import { assets } from "../assets/assets";
import Newsletter from "../components/Newsletter";

const Contact = () => {
  return (
    <>
      <div className="w-full sm:w-fit m-auto mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 border-2 border-gray-300 p-4 rounded">
        <img src={assets.contact} alt="" className="w-full sm:w-72 md:w-96" />

        <div className="w-full flex flex-col gap-3">
          <h1 className="text-xl font-semibold mb-2">
            Let's drive the conversation!
          </h1>

          <div>
            <p className="font-semibold">Call Us</p>
            <p>+91 987-654-3210</p>
          </div>
          <div>
            <p className="font-semibold">Email us</p>
            <a href="">support@truenowheels.com</a>
          </div>
          <div>
            <p className="font-semibold">Our Garage</p>
            <p>
              123 Drift Lane, <br /> Speedster City Tracksville,
              <br /> RW 45678, India
            </p>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default Contact;
