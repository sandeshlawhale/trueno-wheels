import React from "react";
import Hero from "../components/Hero";
import Latest from "../components/Latest";
import LimitedCollection from "../components/LimitedCollection";
import BestSeller from "../components/BestSeller";
import Policies from "../components/Policies";
import Reviews from "../components/Reviews";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <Latest />
      <LimitedCollection />
      <BestSeller />
      <Policies />
      <Reviews />
      <Newsletter />
    </>
  );
};

export default Home;
