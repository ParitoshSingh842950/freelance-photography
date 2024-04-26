import React, { useEffect, useState } from "react";
import NewHeader from "../components/NewHeader";
import { GalleryImages } from "../utils/constants";
import { useLocation } from "react-router-dom";

const Prints = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 200);
  }, []);
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // When the component mounts, set isVisible to true to trigger the fade-in effect
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
  }, [location]);
  return (
    <div
      className={` ${
        isVisible ? "opacity-100 duration-[1000ms]" : "opacity-0"
      }`}
    >
      <NewHeader />
      <div className="flex gap-4 m-4 flex-wrap justify-center">
        {GalleryImages.map((elem, index) => (
          <img
            src={`images/${elem.img}`}
            className={`${
              animate ? "scale-100" : "scale-90"
            } h-[250px] w-[250px] object-cover hover:ring-4 ring-black cursor-pointer duration-[500ms]`}
            style={{ transitionDelay: (index + 1) * 50 + "ms" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Prints;
