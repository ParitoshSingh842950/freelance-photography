import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewHeader = ({ transparent, textWhite }) => {
  const navs = [
    { route: "/", value: "Home" },
    { route: "/options", value: "Collections" },
    { route: "/bio", value: "About" },
    { route: "/contact", value: "Contact" },
    { route: "/prints", value: "Prints" },
    { route: "/cart", value: <i className="fa-solid fa-cart-shopping"></i> },
  ];

  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  return (
    <div
      className={` sticky py-2 px-[20px] md:px-[200px] text-2xl bg-[whitesmoke]   top-0 w-full z-[8] font-[JetBrains Mono] flex items-center justify-between`}
    >
      <b className="text-[14px] cursor-pointer " onClick={() => navigate("/")}>
        SHOTBYADA
      </b>

      <div className="relative flex">
        {menu && (
          <div className="fixed md:absolute w-full md:w-max  bg-black right-0 top-0 py-4 text-sm  text-white flex flex-wrap rounded  md:gap-2 items-center md:px-2">
            {navs.map((nav) => (
              <button
                className="rounded  hover:bg-[white] px-2 md:px-4 py-1 md:text-sm text-[12px] duration-200 hover:text-black"
                onClick={() => navigate(nav.route)}
              >
                {nav.value}
              </button>
            ))}

            <button
              className=" ml-auto hover:bg-red-500  rounded-full aspect-square size-[30px] flex items-center justify-center"
              onClick={() => setMenu(false)}
            >
              <i className="fa-solid text-[16px] fa-x"></i>
            </button>
          </div>
        )}
        <button
          className=" border-[2px] border-[#111] aspect-square rounded-full text-[12px] p-2 font-semibold"
          onClick={() => setMenu(true)}
        >
          {/* <i className="fa-solid  fa-bars"></i> */}
          MENU
        </button>
      </div>
    </div>
  );
};

export default NewHeader;
