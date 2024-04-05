import React from "react";
import Header from "../components/Header";
const Home = () => {
  const banner_img =
    "https://s3-alpha-sig.figma.com/img/f064/5637/dbd28f4e2487f85947d0e4d723959ac3?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko8S-4TfVQe86Wtshlsc6j6lGttlODcGhBi0FpAB3KISFXjmdohu7EmJUGfZkd1uU1k8Cb3-waD4RNZwFlIyGao6QL1ku8E6hTTiTEPGprhZjkjSoozoEzyFKdWpEYdL84LYeph7ksWl6NQ-jLGfCfB6zVqrqcKNIh74yTyM3Kztk7D2vKPkreUnbvwPBhKApP8awQVlJu0zp1EovrQzGlVBMs0R9E8DbXCh6mARA5Ld4OZKavFzqX0XitMcumLtHAKwxEJ~FLuyjOkt2dZ-MmWHM4pivSyxWuoUQz4ib5srKW2eG4ozN19NDsvr3qC59IfmuxKCVh4lEp945Dhlrw__";
  return (
    <div>
      <Header transparent />
      <div className="h-[120px] mt-[60px]">
        <h2 className="text-[100px] -mt-[20px]  font-black font-[arial] -tracking-[10px] px-2">
          ADANNA ELEJE
        </h2>
      </div>
      <div className="w-full h-[calc(100vh-160px)]">
        <div className="relative"></div>
        <img src={banner_img} alt="" className="h-full w-full object-cover " />
      </div>
    </div>
  );
};

export default Home;
