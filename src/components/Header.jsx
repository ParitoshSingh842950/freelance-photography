import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ transparent, textWhite }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`h-[60px] fixed ${!transparent && "bg-black text-white"} ${
        textWhite && " text-white"
      } flex  items-center justify-between px-[30px] text-2xl font-semibold top-0 left-0 right-0 z-[2]`}
    >
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/collection")}>Collections</button>
      <div className="flex gap-5">
        <button onClick={() => navigate("/bio")}>Bio</button>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Header;
