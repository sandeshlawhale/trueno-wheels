import React, { useCallback, useRef } from "react";
import { assets } from "../assets/assets";
import { easeInOut, useAnimate } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

// swiper data from assets
import { HeroData } from "../assets/assets";

// import Swiper core and required modules
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

const Hero = () => {
  const [scope, animate] = useAnimate();

  const handleHoverAnimation = () => {
    animate(
      "#carDetails",
      { y: -10, opacity: 1 },
      { duration: 0.6, delay: 0.2, ease: "easeInOut" }
    );
    animate(
      "#carBrand",
      { y: -20, opacity: 1 },
      { duration: 0.4, ease: "easeInOut" }
    );
    animate(
      "#carName",
      { y: -20, opacity: 1 },
      { duration: 0.6, delay: 0.2, ease: "easeInOut" }
    );
  };
  const removeHoverAnimation = () => {
    animate("#carDetails", { y: 0, opacity: 0 });
    animate("#carBrand", { y: 0, opacity: 0 });
    animate("#carName", { y: 0, opacity: 0 });
  };

  return (
    <main className="flex flex-col-reverse sm:flex-row items-center justify-center border-2 border-gray-500  my-8">
      {/* left section */}
      <div className="w-full sm:w-1/2 p-4 sm:ml-2 md:ml-4 lg:ml-8 flex flex-col justify-center">
        <p className="press-start-2p-regular text-lg sm:text-xl md:text-3xl tracking-tighter ">
          Drifting into Your <br />
          Collection!
        </p>

        <p className="w-3/4 tracking-wide text-sm sm:text-base py-2">
          Discover exclusive Hot Wheels models, rare editions, and everything
          you need to fuel your car collection.
        </p>

        <div className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-4">
          <TyreButton />
          <CarButton />
        </div>
      </div>

      {/* right section */}
      <div
        ref={scope}
        className="relative group w-full sm:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]"
        onMouseEnter={handleHoverAnimation}
        onMouseLeave={removeHoverAnimation}
      >
        <Carousel key="carousel_1" />
      </div>
    </main>
  );
};

const Carousel = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <Swiper
        ref={sliderRef}
        key="swiper_1"
        modules={[Autoplay]}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        loop={true}
        className="w-full h-full"
      >
        {HeroData.map((data, index) => {
          return (
            <>
              <SwiperSlide
                key={`slide_${index}`}
                className="w-full h-full border-none outline-none cursor-pointer"
              >
                <Link to={`/product/${data._id}`}>
                  {/* src image */}
                  <img
                    src={data.src}
                    alt=""
                    className="absolute w-full h-full inset-0 object-cover"
                  />

                  {/* overlay */}
                  <div
                    id="carOverlay"
                    className="absolute inset-0 sm:hidden group-hover:block transition-colors ease-in-out scale-150"
                    style={{
                      background:
                        "linear-gradient(to bottom, #000 ,Transparent, #000 )",
                    }}
                  ></div>

                  {/*  Name Details */}
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center ">
                    <p
                      id="carBrand"
                      className="text-gray-50 press-start-2p-regular text-5xl sm:hidden group-hover:block sm:opacity-0"
                    >
                      {data.brand}
                    </p>
                    <p
                      id="carName"
                      className="text-gray-50 text-lg tracking-wider sm:hidden group-hover:block sm:opacity-0"
                    >
                      {data.name}
                    </p>
                    <p
                      id="carName"
                      className="text-gray-50/50 text-sm tracking-wider sm:hidden group-hover:block sm:opacity-0"
                    >
                      Limited Edition
                    </p>
                  </div>

                  {/* Model Details */}
                  <div
                    id="carDetails"
                    className="absolute right-16 top-12  hidden sm:group-hover:block "
                  >
                    <p className="text-gray-50 text-xs">
                      <span className="text-gray-50/50"> Model: </span>
                      {data.name}
                    </p>
                    <p className="text-gray-50 text-xs">
                      <span className="text-gray-50/50"> Year: </span>{" "}
                      {data.year}
                    </p>
                    <p className="text-gray-50 text-xs">
                      <span className="text-gray-50/50"> Type: </span>{" "}
                      {data.type}
                    </p>
                    <p className="text-gray-50 text-xs">
                      <span className="text-gray-50/50"> Scale: </span>{" "}
                      {data.scale}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>

      {/* navigation */}
      <div
        id="btnPrev"
        className="absolute left-4 bottom-4 z-10 sm:hidden transition-all ease-in-out group-hover:block cursor-pointer hover:bg-gray-50/40 py-1 px-2 rounded-full "
        onClick={handlePrev}
      >
        <div className="flex items-center gap-1 ">
          <FaAngleLeft />
          <p className="text-gray-50">Prev</p>
        </div>
      </div>
      <div
        id="btnNext"
        className="absolute bottom-4 right-4 z-10 sm:hidden transition-all ease-in-out group-hover:block cursor-pointer hover:bg-gray-50/40 py-1 px-2 rounded-full "
        onClick={handleNext}
      >
        <div className="flex items-center gap-1">
          <p className="text-gray-50">Next</p>
          <FaAngleRight />
        </div>
      </div>
    </>
  );
};

const TyreButton = () => {
  return (
    <a
      href="#latest-arrivals"
      className="w-fit text-sm px-8 py-2 border border-gray-700 rounded text-white bg-black flex items-center"
    >
      <p className="z-10 font-medium text-white">Shop Now</p>
    </a>
  );
};

const CarButton = () => {
  const [scope, animate] = useAnimate();

  const handleCarAnimation = async () => {
    await animate(
      "img",
      { x: 250 },
      { delay: 0.1, duration: 0.8, type: "tween", ease: [0.22, 1, 0.36, 1] }
    );
    await animate(
      "#bgBlack",
      { x: "200%" },
      { delay: 0, duration: 0.4, type: "tween", ease: [0.22, 1, 0.36, 1] }
    );
    removeCarAnimation();
  };

  const removeCarAnimation = () => {
    animate(
      "#bgBlack",
      { x: 0 },
      { type: "keyframes", duration: 0.0000001, delay: 0.1 }
    );
    animate("img", { x: 0 }, { type: "keyframes", duration: 0.0000001 });
  };

  return (
    <Link
      to="/collection"
      ref={scope}
      onMouseEnter={handleCarAnimation}
      className="group w-fit relative text-sm px-8  py-2 border border-gray-700 rounded overflow-hidden z-0"
    >
      <img
        src={assets.carLogo}
        alt=""
        className="mix-blend-difference absolute w-16 -left-16 bottom-0 z-0"
      />
      <p className="z-10 font-medium text-black">Explore Collection</p>
      <div
        id="bgBlack"
        className="absolute left-[-100%] top-0 w-full h-full bg-black/90 -z-10 "
      />
    </Link>
  );
};

export default Hero;
