import React from "react";

const Card = () => {
  return (
    <div className=" m-4 md:mx-20 md:my-16 lg:mx-[14vw] lg:my-20 flex flex-col gap-4 md:gap-12">
      <div className="flex flex-col items-center">
        <p className="text-[20px] md:text-[44px] font-extrabold text-[#384c72]">
          Choose a SIM only plan today
        </p>
        <p className="text-[14px] md:text-[16px] text-[#667085]">
          Want flexibility? Or to fix your monthly prices? Choose from our great
          value Pay as you go or Pay monthly plans.
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-5">
        <div className=" w-full md:w-2/4">
          <img
            src="/assets/UK-min_0.webp"
            alt=""
            className="h-full w-full cursor-pointer"
          />
        </div>
        <div className=" w-full md:w-2/4">
          <img
            src="/assets/Img_prepaid_0.webp"
            alt=""
            className="h-full w-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
