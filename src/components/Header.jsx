import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ home }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`h-[60px] ${
        !home && "bg-black text-white"
      } flex  items-center justify-between px-[30px] text-2xl font-semibold`}
    >
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/collection")}>Collection</button>
      <div className="flex gap-5">
        <button>Bio</button>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Header;
