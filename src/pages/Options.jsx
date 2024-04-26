import React, { useEffect, useState } from "react";
import NewHeader from "../components/NewHeader";
import { useLocation, useNavigate } from "react-router-dom";

const Options = () => {
  const [animate, setAnimate] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 0);
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
      <div className="h-[calc(100vh-80px)] w-full flex items-center justify-evenly flex-wrap  ">
        <img
          src="images/polaroid_exhibiton.png"
          className={`${
            animate ? "translate-y-0" : "translate-y-[30px]"
          } md:h-[400px] object-contain  cursor-pointer hover:ring-4 ring-[white] duration-1000 hover:shadow-lg`}
          alt=""
          onClick={() => navigate("/exhibition")}
        />
        <img
          src="images/polaroid_personal.png"
          alt=""
          className={`${
            animate ? "translate-y-0" : "-translate-y-[30px]"
          } md:h-[400px] object-contain  cursor-pointer hover:ring-4 ring-[white] duration-1000  hover:shadow-lg`}
          onClick={() => navigate("/collection")}
        />
        <img
          src="images/polaroid_travel.png"
          alt=""
          className={`${
            animate ? "translate-y-0" : "translate-y-[30px]"
          } md:h-[400px] object-contain  cursor-pointer hover:ring-4 ring-[white] duration-1000  hover:shadow-lg`}
          onClick={() => navigate("/travel")}
        />
      </div>
    </div>
  );
};

export default Options;
