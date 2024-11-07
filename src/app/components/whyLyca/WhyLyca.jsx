import React from "react";
import { MoveRight } from "lucide-react";
const WhyLyca = () => {
  return (
    <div className="bg-[#eff8ff] my-8">
      <div className="bg-[#006ae0] w-full p-4 flex items-center justify-center">
        <a
          href=""
          className="w-fit h-fit text-[#fff] flex items-center justify-center gap-[10px]"
        >
          <img
            src="/assets/sim.webp"
            alt=""
            className="h-[37px] w-[41px] md:h-[4.375rem] md:w-[4.937rem]"
          />
          <p className="text-[14px] md:text-[1.125rem]">
            Best SIM only deal for students
          </p>
          <MoveRight />
        </a>
      </div>
      <div className="py-[24px] md:py-[64px]  text-[#384c72] flex flex-col items-center text-center gap-[24px] md:gap-[64px]">
        <h1 className="text-[24px] md:text-[48px] font-extrabold">Why Lyca?</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-10">
          <div className="flex flex-col items-center max-w-56 ">
            <img
              src="/assets/Relailble.webp"
              alt=""
              className="w-[102px] h-[102px] "
            />
            <h3 className="font-bold md:font-extrabold text-[14px] md:text-[18px] mt-5">
              Best UK network{" "}
            </h3>
            <p className="font-medium md:font-semibold text-[14px] md:text-[18px]">
              4X Faster speeds since July 2023. Reliable coverage across 99% of
              UK population, with 68% 5G coverage.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-56 ">
            <img
              src="/assets/5g (1).webp"
              alt=""
              className="w-[102px] h-[102px]"
            />
            <h3 className="font-bold md:font-extrabold text-[14px] md:text-[18px] mt-5">
              Superfast 5G and ESIM
            </h3>
            <p className="font-medium md:font-semibold text-[14px] md:text-[18px]">
              Enjoy the convenience of eSIM and the benefits of high speed 5G
              video calling, streaming and downloading.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-56 ">
            <img
              src="/assets/Group_image.webp"
              alt=""
              className="w-[102px] h-[102px]"
            />
            <h3 className="font-bold md:font-extrabold text-[14px] md:text-[18px] mt-5">
              International roaming{" "}
            </h3>
            <p className="font-medium md:font-semibold text-[14px] md:text-[18px]">
              With our global network, you can roam within the EU or call your
              world for free. EU roaming data up to 35 GB.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyLyca;
