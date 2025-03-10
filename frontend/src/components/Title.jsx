import React from "react";

const Title = ({ title1, title2, subHeading, rest, desc }) => {
  return (
    <div className="flex flex-col gap-0 w-full ">
      {subHeading && <p className="text-xs sm:text-sm italic">{subHeading}!</p>}
      <div className="flex gap-2 items-center ">
        <p className="text-gray-500 text-xl sm:text-2xl">
          {title1}{" "}
          <span className="text-gray-700 text-2xl sm:text-3xl font-medium">
            {title2}{" "}
          </span>
          {rest}!
        </p>
        <p className="w-8 sm:w-10 h-[2px] bg-gray-700" />
      </div>
      {desc && <p className="text-sm sm:text-base w-3/4">_{desc}</p>}
    </div>
  );
};

export default Title;
