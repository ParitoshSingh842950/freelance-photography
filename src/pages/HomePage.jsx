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
      className={`${isVisible ? "opacity-100 duration-[1000ms]" : "opacity-0"}`}
    >
      <NewHeader />
      <div className="w-full flex flex-col items-center">
        <img
          src="images/yasmeen.png"
          alt="Adanna Eleje"
          className="w-[600px] h-[750px] object-cover mt-[50px] cursor-pointer"
          onClick={() => navigate("/adanna-eleje")}
        />
        <div
          className="flex gap-20 text-base mt-24 font-[JetBrains Mono] font-bold px-4 md:px-10"
        >
          <span className="mx-4 md:mx-8">ADANNA ELEJE</span>
          <div className="flex gap-4 md:gap-8 mx-4 md:mx-8">
            <span>28.987654</span>
            <span>72.09876543</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
