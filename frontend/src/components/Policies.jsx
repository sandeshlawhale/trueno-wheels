import React from "react";

const policyContent = [
  {
    img: "src/assets/icon_shipped.png",
    title: "Free Shipping",
    Desc: "on orders above $20",
  },
  {
    img: "src/assets/icon_product-return.png",
    title: "Easy Returns",
    Desc: "Hassle-free returns",
  },
  {
    img: "src/assets/icon_credit-card.png",
    title: "Secure Payments",
    Desc: "100% secure payments",
  },
  {
    img: "src/assets/icon_original.png",
    title: "Authenticity",
    Desc: "Genuine models",
  },
  {
    img: "src/assets/icon_diamond.png",
    title: "Exclusive",
    Desc: "Rare collections",
  },
  {
    img: "src/assets/icon_customer-support.png",
    title: "24/7 Support",
    Desc: "We're here to help!",
  },
];

const Policies = () => {
  return (
    <div className="m-auto flex flex-col items-center pt-16">
      <p className="text-gray-700 text-2xl sm:text-3xl font-medium">
        Why Trueno Wheels?
      </p>
      <p className="text-xs sm:text-sm italic">
        Driving trust with our promises.
      </p>

      {/* policies grid */}
      <div className="w-full sm:w-[70%] grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {policyContent.map((policy, index) => {
          return (
            <div
              key={index}
              className="p-4 flex flex-col items-center gap-2 hover:bg-black/10 transition-colors ease-in-out duration-300"
            >
              <div className="w-1/3 ">
                <img
                  src={policy.img}
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold leading-5">{policy.title}</p>
                <p className="text-base font-medium">{policy.Desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Policies;
