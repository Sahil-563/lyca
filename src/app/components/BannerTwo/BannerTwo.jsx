import Image from "next/image";
import React from "react";
import AlreadyWithLyca from "../AlreadyWithLyca/AlreadyWithLyca";

const BannerTwo = () => {
  return (
    <>
      {" "}
      <div className="bg-[#21254f] w-full  px-4 py-8 lg:pb-[250px] ">
        <p className="text-4xl text-center text-white font-extrabold">
          Pay Monthly & Prepaid SIM Only Deals
        </p>
        <p className="text-center text-white pt-2">
          Get superfast, reliable coverage at locked-in low prices. All with
          international calling and roaming included, plus 5G and eSIM options
          available.
        </p>
        <div className="flex justify-center gap-16 mt-8 flex-wrap">
          <div className="flex flex-col items-center justify-center">
            <Image src="/icons/pay_m.webp" alt="" width={86} height={86} />
            <p className="text-white">Pay monthly SIM</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src="/icons/Prepay.webp" alt="" width={86} height={86} />
            <p className="text-white">Pay as you go SIM</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/icons/Activate_SIM.webp"
              alt=""
              width={86}
              height={86}
            />
            <p className="text-white">Activate SIM</p>
          </div>
        </div>
      </div>
      <div className="lg:relative w-full h-full">
        <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
          <AlreadyWithLyca />
        </div>
      </div>
    </>
  );
};

export default BannerTwo;
