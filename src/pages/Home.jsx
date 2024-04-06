import React from "react";
import Header from "../components/Header";
import CameraOutlet from "../components/CameraOutlet";
const Home = () => {
  const banner_img =
    "https://s3-alpha-sig.figma.com/img/f064/5637/dbd28f4e2487f85947d0e4d723959ac3?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko8S-4TfVQe86Wtshlsc6j6lGttlODcGhBi0FpAB3KISFXjmdohu7EmJUGfZkd1uU1k8Cb3-waD4RNZwFlIyGao6QL1ku8E6hTTiTEPGprhZjkjSoozoEzyFKdWpEYdL84LYeph7ksWl6NQ-jLGfCfB6zVqrqcKNIh74yTyM3Kztk7D2vKPkreUnbvwPBhKApP8awQVlJu0zp1EovrQzGlVBMs0R9E8DbXCh6mARA5Ld4OZKavFzqX0XitMcumLtHAKwxEJ~FLuyjOkt2dZ-MmWHM4pivSyxWuoUQz4ib5srKW2eG4ozN19NDsvr3qC59IfmuxKCVh4lEp945Dhlrw__";
  return (
    <div>
      <Header />
      <div className="h-[120px] mt-[60px]" id="home">
        {/* <h2 className="text-[100px] -mt-[20px]  font-black font-[arial] -tracking-[10px] px-2">
        </h2> */}
        <h2 className="text-[60px] md:text-[100px] font-black md:-mt-[20px] font-[Anton]  md:-tracking-[1px] px-2">
          ADANNA ELEJE
        </h2>
      </div>
      <div className="w-full h-[calc(100vh-160px)] relative text-white font-semibold text-xl">
        <div className="absolute inset-8">
          <p className="p-4 ">HQ 1080P</p>
          <p className="px-4 ">
            <i className="fa-solid fa-clone fa-2x"></i>
          </p>

          <p className="p-4 font-[Anton] right-0 absolute top-0 font-normal flex items-center gap-2">
            Rec
            <div className="size-[10px] bg-red-500 rounded-full animate-pulse"></div>
          </p>
          <p className="p-4 bottom-0 absolute">
            <i className="fa-solid fa-2x fa-battery-half "></i>
          </p>
          <p className="p-4 bottom-0 absolute right-0">00 : 47 : 19</p>
          <CameraOutlet white />
        </div>
        <div className="inset-0 flex items-center justify-center absolute z-[6]">
          <div className="rotate-90 border-2 w-[50px] border-white absolute"></div>
          <div className=" border-2 w-[50px] border-white absolute "></div>
        </div>
        <div className="absolute inset-[20%]">
          <CameraOutlet white />
        </div>
        <div className="relative"></div>
        <img src={banner_img} alt="" className="h-full w-full object-cover " />
      </div>
    </div>
  );
};

export default Home;
