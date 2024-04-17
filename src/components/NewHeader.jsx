import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewHeader = ({ transparent, textWhite }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  return (
    <div
      className={` fixed py-2 px-[20px] md:px-[200px] text-2xl bg-[whitesmoke]   top-0 w-full z-[8] font-[JetBrains Mono] flex items-center justify-between`}
    >
      <b className="text-[14px] cursor-pointer " onClick={() => navigate("/")}>
        SHOTBYADA
      </b>

      <div className="relative">
        <button
          className=" border-[2px] border-[#111] aspect-square rounded-full text-[12px] p-2 font-semibold"
          onClick={() => setMenu(true)}
        >
          {/* <i className="fa-solid  fa-bars"></i> */}
          MENU
        </button>
        {menu && (
          <div className="absolute  bg-black right-0 top-0 py-4  text-white flex flex-col gap-2 items-start">
            <button
              className="ml-auto mr-8 hover:bg-red-500  rounded-full aspect-square size-[30px] flex items-center justify-center"
              onClick={() => setMenu(false)}
            >
              <i className="fa-solid text-[12px] fa-x"></i>
            </button>
            <button
              className="cursor-pointer hover:bg-[white] px-8 py-1 duration-200 hover:text-black w-full"
              onClick={() => navigate("/")}
            >
              Home
            </button>
            <button
              className="cursor-pointer hover:bg-[white] px-8 py-1 duration-200 hover:text-black w-full"
              onClick={() => navigate("/options")}
            >
              Collections
            </button>
            {/* <button
              className="hover:bg-[white] px-8 py-1 duration-200  hover:text-black w-full"
              onClick={() => navigate("/collection")}
            >
              Collection
            </button> */}
            <button
              className="hover:bg-[white] px-8 py-1 duration-200 hover:text-black w-full"
              onClick={() => navigate("/bio")}
            >
              About
            </button>
            <button
              className="hover:bg-[white] px-8 py-1 duration-200 hover:text-black w-full"
              onClick={() => navigate("/contact")}
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewHeader;
