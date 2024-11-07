import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Image from "next/image";

const AlreadyWithLyca = () => {
  return (
    <div className="xl:w-[1100px] lg:w-[800px] w-full bg-white mx-auto px-4 py-8 space-y-8 border border-[#E6EAF8] shadow-lg rounded-lg">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2B3674]">
          Already with Lyca?
        </h2>
        <p className="text-muted-foreground text-sm">
          Add credit to your account or renew your plan.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Button className="bg-[#0061FF] hover:bg-[#0061FF]/90 text-white px-8 rounded-full">
          Top up
        </Button>

        <Button
          variant="outline"
          className="bg-[#F4F7FE] text-[#2B3674] hover:bg-[#F4F7FE]/80 rounded-full border-black"
        >
          Renew plan
        </Button>
        <Button
          variant="outline"
          className="bg-[#F4F7FE] text-[#2B3674] border-[#E6EAF8] hover:bg-[#F4F7FE]/80 rounded-full border-black"
        >
          Switch to Pay monthly
        </Button>
      </div>

      <div className="relative max-w-md mx-auto">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <span className="text-sm text-muted-foreground">+44</span>
        </div>
        <Input
          className="pl-12 pr-12 py-6 bg-background border-[#E6EAF8] text-[#667085]"
          placeholder="Enter lyca number & get started"
        />
        <div
          size="icon"
          className="absolute top-3 cursor-pointer right-4 bg-transparent hover:bg-transparent"
        >
          <Image
            src="/icons/blueRightCircleArrow.svg"
            alt=""
            width={26}
            height={26}
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 text-base">
        <Image src="/icons/phonewebp.webp" alt="" width={35} height={35} />
        <span className="text-[#667085]">Track your usage on the go!</span>
        <a
          href="#"
          className="text-[#0061FF] font-medium hover:underline flex items-center gap-1"
        >
          Download our app
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14m-7-7l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};
export default AlreadyWithLyca;
