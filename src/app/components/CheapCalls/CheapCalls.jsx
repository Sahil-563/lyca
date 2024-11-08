import React from "react";
import Image from "next/image";
const CheapCalls = () => {
  return (
    <div className="py-[24px] h-auto md:py-[64px]  text-[#384c72] flex flex-col items-center text-center gap-[24px] md:gap-[50px]">
      <h1 className="text-[24px] md:text-[44px] font-extrabold">
        Cheap international calls for everyone
      </h1>
      <div className="flex md:w-[500px] w-full justify-between flex-wrap px-6 ">
        <div className="flex flex-col items-center max-w-56 ">
          <Image src="/icons/russia.webp" alt="" width={60} height={60} />
          <p className="font-medium md:font-semibold text-[14px] mt-3">
            Romania
          </p>
        </div>
        <div className="flex flex-col items-center max-w-56 ">
          <Image src="/icons/usa_flags.webp" alt="" width={60} height={60} />
          <p className="font-medium md:font-semibold text-[14px] mt-3">USA</p>
        </div>
        <div className="flex flex-col items-center max-w-56 ">
          <Image src="/icons/India.webp" alt="" width={60} height={60} />
          <p className="font-medium md:font-semibold text-[14px] mt-3">India</p>
        </div>
        <div className="flex flex-col items-center max-w-56 ">
          <Image src="/icons/bullgeria.webp" alt="" width={60} height={60} />
          <p className="font-medium md:font-semibold text-[14px] mt-3">
            Bullgeria
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheapCalls;
