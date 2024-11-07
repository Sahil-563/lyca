"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dot } from "lucide-react";
import Image from "next/image";

const BannerOne = () => {
  const slides = [
    {
      image: "/assets/banner.webp",
    },
    {
      image: "/assets/banner.webp",
    },
  ];

  return (
    <Carousel className="w-full ">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-[400px] md:h-[400px] bg-slate-950 rounded-lg overflow-hidden">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt=""
                fill
                className="object-cover object-center w-full h-full"
                priority
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-6 hidden md:inline-flex bg-white/10 hover:bg-white/10 border-0 text-white hover:text-white h-12 w-12 " />
      <CarouselNext className="right-6 hidden md:inline-flex bg-white/10 hover:bg-white/10 border-0 text-white hover:text-white h-12 w-12 " />

      {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <Dot key={index} className="w-8 h-8 text-white/50 fill-current" />
        ))}
      </div> */}
    </Carousel>
  );
};
export default BannerOne;
