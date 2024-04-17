import React from "react";
import NewHeader from "../components/NewHeader";
import { useNavigate } from "react-router-dom";

const Options = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NewHeader />
      <div className="h-screen w-full flex items-center justify-evenly flex-wrap mt-[100px] md:mt-0">
        <img
          src="images/polaroid_exhibiton.png"
          className="md:h-[400px] object-contain cursor-pointer hover:ring-4 ring-[white] duration-200 hover:shadow-lg"
          alt=""
          onClick={() => navigate("/exhibition")}
        />
        <img
          src="images/polaroid_personal.png"
          alt=""
          className="md:h-[400px] object-contain cursor-pointer hover:ring-4 ring-[white] duration-200 hover:shadow-lg"
          onClick={() => navigate("/collection")}
        />
        <img
          src="images/polaroid_travel.png"
          alt=""
          className="md:h-[400px] object-contain cursor-pointer hover:ring-4 ring-[white] duration-200 hover:shadow-lg"
          onClick={() => navigate("/travel")}
        />
      </div>
    </div>
  );
};

export default Options;
