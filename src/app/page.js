import BannerTwo from "./components/BannerTwo/BannerTwo";
import Card from "./components/card/Card";
import Download from "./components/download/Download";
import BannerOne from "./components/Slider/BannerOne";
import WhyLyca from "./components/whyLyca/WhyLyca";

export default function Home() {
  return (
    <>
      <BannerOne />
      <BannerTwo />
      <div className=" hidden lg:block lg:h-[150px]"></div>
      <Card />
      <WhyLyca />
      <Download />
    </>
  );
}
