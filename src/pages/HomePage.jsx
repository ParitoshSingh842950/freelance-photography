import React, { useEffect, useState } from "react";
import NewHeader from "../components/NewHeader";
import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
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
      <div className="w-full flex flex-col items-center">
        <img
          src="images/yasmeen.png"
          alt=""
          className="w-[308px] h-[354px] object-cover mt-[50px] cursor-pointer"
          onClick={() => navigate("/adanna-eleje")}
        />
        <div className="flex gap-10 text-sm font-bold mt-8">
          <span>ADANNA ELEJE</span>
          <div className="flex gap-2">
            <span>28.987654</span> <span>72.09876543</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
