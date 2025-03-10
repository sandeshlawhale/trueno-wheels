import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="w-full sm:w-[60%] flex flex-col gap-2 mt-16 m-auto">
      <h1 className="self-center text-2xl font-semibold">
        About Trueno Wheels
      </h1>

      {/* Hero img */}
      <div className="w-full ">
        <img
          src={assets.collection}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* about */}
      <p className="mt-4 font-medium text-base">
        Welcome to Trueno Wheels, the ultimate destination for Hot Wheels
        enthusiasts and collectors! Inspired by the world of speed, precision,
        and the iconic Initial D, our platform is more than just an e-commerce
        website; it's a celebration of car culture and the passion for miniature
        marvels.
      </p>

      {/* vision */}
      <div className="mt-4 text-base font-medium flex flex-col gap-1">
        <h1 className="text-lg font-semibold">Our Vision</h1>
        <p>
          At Trueno Wheels, we aim to bring the thrill of the racetrack to your
          collection. Whether you're a seasoned collector or just starting your
          journey, our mission is to provide a platform that inspires and
          excites car enthusiasts of all ages.
        </p>
      </div>

      {/* standards */}
      <div className="mt-4 text-base font-medium flex flex-col gap-1">
        <h1 className="text-lg font-semibold">What We Offer</h1>
        <ul className="list-disc pl-4 flex flex-col gap-1">
          <li>
            Extensive Collection: From timeless classics to the latest arrivals,
            explore a vast selection of Hot Wheels models in various scales,
            colors, and limited editions.
          </li>
          <li>
            Interactive Experience: Enjoy a dynamic shopping experience with
            animations, engaging car-themed features, and exclusive insights
            into your favorite models.
          </li>
          <li>
            Merchandise: Dive deeper into the world of Hot Wheels with our
            exclusive branded merchandise, including T-shirts, keychains, and
            caps.
          </li>
          <li>
            Blog & Community: Learn about iconic car designs, the history of Hot
            Wheels, and their real-world inspirations through our blogs. Engage
            with a community that shares your passion for miniature cars.
          </li>
        </ul>
      </div>

      {/* why us */}
      <div className="mt-4 text-base font-medium flex flex-col gap-1">
        <h1 className="text-lg font-semibold">Why choose Us</h1>
        <ul className="list-disc pl-4 flex flex-col gap-1">
          <li>
            Authenticity: We source 100% genuine Hot Wheels products to ensure
            quality and trust.
          </li>
          <li>
            Exclusive Models: Discover rare and limited-edition models you won’t
            find anywhere else.
          </li>
          <li>
            Passionate Team: We’re a group of enthusiasts who live and breathe
            car culture, ensuring that every product and experience meets the
            highest standards.
          </li>
        </ul>
      </div>

      {/* trueno starts here */}
      <div className="mt-8 w-full flex flex-col sm:flex-row-reverse gap-4">
        {/* trueno image */}
        <img src={assets.takumi} alt="" className="w-full sm:w-48" />

        <div className="w-full">
          {/* Behind teh Scene */}
          <h1 className="text-lg font-semibold">
            The Story Behind Trueno Wheels
          </h1>
          <p className="text-base mb-2">
            Named after the legendary Toyota AE86 Trueno from Initial D, our
            brand is a homage to the iconic drifting culture that inspires car
            lovers around the globe. Just like the Trueno, our goal is to drift
            into the hearts of collectors and create lasting impressions.
          </p>

          <h1 className="text-lg font-semibold">Join the Ride!</h1>
          <p>
            Experience the joy of collecting, share your passion with
            like-minded individuals, and find your next favorite piece for your
            collection at Trueno Wheels.
          </p>
        </div>
      </div>

      {/* Creator enters */}
      <div className="mt-16 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* my image  */}
          <img
            src={assets.creator}
            alt=""
            className="w-full sm:w-96 object-cover "
          />

          {/* story */}
          <div className="w-full">
            <h1 className="text-xl font-semibold mb-4">Meet the Creator</h1>
            <h1 className="text-base font-medium">Hello There</h1>
            <p className="text-lg font-medium -mt-1.5">It's Sandesh,</p>

            <p className="text-base mt-2 mb-1 tracking-wide">
              I’m the founder and passionate mind behind Trueno Wheels. My love
              for cars and collecting started years ago, inspired by the thrill
              of speed and the artistry of automotive design.
            </p>
            <p className="text-base tracking-wide">
              With a background in full-stack development and a deep
              appreciation for car culture, I created Trueno Wheels to bring
              fellow enthusiasts a platform that’s as exciting as the cars we
              love.
            </p>

            <h1 className="text-lg mt-4 font-semibold">
              Why I Started Trueno Wheels
            </h1>
            <p className="text-base tracking-wide">
              The idea for Trueno Wheels was born out of my passion for
              miniature cars and the joy they bring to collectors worldwide. I
              wanted to create a space where collectors could find not just
              models but stories, community, and inspiration.
            </p>
          </div>
        </div>

        {/* mission */}
        <div>
          <h1 className="text-lg font-semibold">What Drives Me</h1>
          <p className="text-sm font-light">My mission is simple:</p>
          <ul className="list-disc pl-4 flex flex-col gap-1">
            <li>
              Quality: To provide collectors with authentic, premium Hot Wheels
              models.
            </li>
            <li>
              Community: To bring car lovers together, one model at a time.
            </li>
            <li>
              Innovation: To make the shopping experience as interactive and
              thrilling as the cars themselves.
            </li>
          </ul>
        </div>

        {/* personal note */}
        <div className="border-2 border-gray-300 rounded p-4">
          <h1 className="text-lg font-semibold mb-2">A Personal Note to You</h1>
          <blockquote className="text-base tracking-wide">
            " Whether you’re here to add to your collection, learn about iconic
            cars, or simply explore, thank you for being a part of this journey.
            Trueno Wheels is built for you, the collector who sees every model
            as a story and every car as a piece of art. "
          </blockquote>
          <p className="text-base tracking-wide mt-1 font-bold">Thank You!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
