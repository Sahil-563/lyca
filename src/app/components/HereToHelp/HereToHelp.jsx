import React from "react";
import Image from "next/image";
const HereToHelp = () => {
  return (
    <div className="py-[24px] h-auto md:py-[64px] bg-[#eff8ff] text-[#384c72] flex flex-col items-center text-center gap-[24px] md:gap-[50px]">
      <h1 className="text-[24px] md:text-[44px] font-extrabold">
        We are here to help you
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center max-w-56 ">
          <Image src="/icons/Prepay.webp" alt="" width={100} height={100} />

          <p className="font-medium md:font-semibold text-[14px] mt-3">
            Pay monthly FAQ
          </p>
        </div>
        <div className="flex flex-col items-center max-w-56 ">
          <Image src="/icons/Prepay.webp" alt="" width={100} height={100} />
          <p className="font-medium md:font-semibold text-[14px] mt-3">
            Pay as you go FAQ
          </p>
        </div>
        <div className="flex flex-col items-center max-w-56 ">
          <Image src="/icons/Group.webp" alt="" width={100} height={100} />
          <p className="font-medium md:font-semibold text-[14px] mt-3">
            Manage your account
          </p>
        </div>
        <div className="flex flex-col items-center max-w-56 ">
          <Image src="/icons/Support.webp" alt="" width={100} height={100} />
          <p className="font-medium md:font-semibold text-[14px] mt-3">
            Contact us or chat with LIA
          </p>
        </div>
      </div>
    </div>
  );
};

export default HereToHelp;
