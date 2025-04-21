import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const reviewContent = [
  {
    id: 1,
    name: "Tyler Durden",
    location: "New York, USA",
    rating: 5,
    review:
      "I loved the exclusive collection at Trueno Wheels. The models are amazing!",
    img: "/assets/user_tyler.jpg",
  },
  {
    id: 2,
    name: "Sharukh Khan",
    location: "Mumbai, India",
    rating: 4.5,
    review: "Great quality and fast delivery! Highly recommend this store.",
    img: "/assets/user_sharukh.jpg",
  },
  {
    id: 3,
    name: "Carlos Gomez",
    location: "Madrid, Spain",
    rating: 5,
    review:
      "The best place to find rare Hot Wheels models. I’m impressed with the authenticity!",
    img: "/assets/user_carlos.jpg",
  },
  {
    id: 4,
    name: "Emily Brown",
    location: "Sydney, Australia",
    rating: 4,
    review:
      "Love the designs and the attention to detail. Couldn’t be happier with my purchase.",
    img: "/assets/user_emily.jpg",
  },
  {
    id: 5,
    name: "Akira Tanaka",
    location: "Tokyo, Japan",
    rating: 5,
    review:
      "Trueno Wheels has an incredible selection of limited editions. My go-to for collectibles!",
    img: "/assets/user_akira.jpg",
  },
  {
    id: 6,
    name: "Liam O'Connor",
    location: "Dublin, Ireland",
    rating: 4.8,
    review:
      "Fantastic service and great prices. The newsletter keeps me updated on new arrivals!",
    img: "/assets/user_liam.jpg",
  },
];

const Reviews = () => {
  const sliderRef = useRef(null);
  return (
    <div className="m-auto flex flex-col items-center pt-16">
      <p className="text-gray-700 text-2xl sm:text-3xl font-medium">
        What Our Fans Are Saying
      </p>
      <p className="text-xs sm:text-sm italic">
        Real stories from real collectors—because every car has a story to tell.
      </p>

      {/* review grid */}
      <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] flex justify-center ">
        <Swiper
          ref={sliderRef}
          key="swiper_2"
          slidesPerView={2}
          modules={[Pagination, Navigation]}
          navigation={true}
          pagination={{ type: "bullets" }}
          loop={true}
          className="w-full h-full"
        >
          {reviewContent.map((review, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="p-4  flex justify-center m-auto gap-2">
                  <div className="w-14 h-14 rounded-full bg-black/10 overflow-hidden">
                    <img
                      src={review.img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[70%]">
                    <p className="text-lg leading-5">"{review.review}"</p>
                    <p className="text-sm leading-5 pt-1 text-gray-700">
                      - {review.name}, {review.location}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* CTA */}
      </div>
      <button className="bg-black active:bg-black/60 text-white px-8 py-2 rounded text-base  transition-colors duration-300 ease-in-out tracking-wide">
        Write a Review!
      </button>
    </div>
  );
};

export default Reviews;
