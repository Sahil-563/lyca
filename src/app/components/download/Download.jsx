import React from "react";
const Download = () => {
  return (
    <div className="flex flex-col m-20 lg:flex-row lg:my-20 items-center  lg:gap-[10vw] lg:mx-32">
      <div className=" hidden lg:block lg:w-[30vw] lg:max-w-[28rem]">
        <img src="/assets/Mobapp.webp" alt="" />
      </div>
      <div className=" flex flex-col gap-4 h-fit w-fit">
        <h2 className="text-[#667085] text-[1.5em] font-bold">
          Download iOS/Android
          <br />
          My Lyca Mobile app
        </h2>
        <div className=" flex flex-col gap-3 w-[20rem]">
          <div className="flex items-start gap-4">
            <img
              src="/assets/Icon_1.webp"
              alt=""
              className="w-[22px] h-[22px]"
            />
            <p className="text-[#344054] text-[ 1.125rem] font-medium">
              Check your usage, balance, bills and more
            </p>
          </div>
          <div className="flex items-start gap-4">
            <img
              src="/assets/Icon_1.webp"
              alt=""
              className="w-[22px] h-[22px]"
            />
            <p className="text-[#344054] text-[ 1.125rem] font-medium">
              Get reminders to top up and renew
            </p>
          </div>
          <div className="flex items-start gap-4">
            <img
              src="/assets/Icon_1.webp"
              alt=""
              className="w-[22px] h-[22px]"
            />
            <p className="text-[#344054] text-[ 1.125rem] font-medium">
              Be the first to know about our latest offers and discounts
            </p>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap">
          <div className="h-[55px] w-[186px]">
            <img src="/assets/Group 383180557 (1) (1).webp" alt="" />
          </div>
          <div className="h-[55px] w-[186px]">
            <img src="/assets/Group 383180556 (1) (1).webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
