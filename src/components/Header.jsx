import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ transparent, textWhite }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  return (
    <div
      className={`h-[60px] fixed ${!transparent && "bg-black text-white"} ${
        textWhite && " text-white"
      }  px-[30px] text-2xl  top-0 w-full z-[8] font-[JetBrains Mono]`}
    >
      <div className="hidden md:flex h-full items-center justify-between">
        <p className="cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          Home
        </p>
        <a href="#collection">Collections</a>
        <div className="flex gap-5">
          <a href="#bio">Bio</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className=" md:hidden h-full flex items-center justify-end">
        <button className="h-[80%]" onClick={() => setMenu(true)}>
          <i className="fa-solid fa-2x fa-bars"></i>
        </button>
        {menu && (
          <div className="fixed bg-black right-0 top-0 p-8 text-white flex flex-col gap-4">
            <p className="ml-auto" onClick={() => setMenu(false)}>
              <i className="fa-solid fa-x"></i>
            </p>
            <p className="cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              Home
            </p>
            <a href="#collection">Collections</a>
            <a href="#bio">Bio</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
