import React, { useEffect, useState } from "react";
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
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(menu);
    }, [500]);
  }, [menu]);

  return (
    <div
      className={` overflow-hidden sticky py-2 px-[20px] md:px-[200px] text-2xl bg-[whitesmoke]   top-0 w-full z-[8] font-[JetBrains Mono]  flex items-center `}
    >
      <b className="text-[14px] cursor-pointer  " onClick={() => navigate("/")}>
        SHOTBYADA
      </b>

      <div className=" flex justify-end  flex-1 custom-font">
        <div
          className={`overflow-hidden md:ml-[50px] md:static absolute duration-500 z-[1] bg-black right-0 top-0 py-4 text-sm  text-white flex  md:rounded  md:gap-2 items-center  ${menu ? "w-full md:w-[600px] md:px-2" : "w-[0px] p-0"
            }`}
        >
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
      </div>
      <button
        className=" border-[2px]  bg-[whitesmoke] border-[#111] aspect-square rounded-full text-[12px] p-2 font-semibold"
        onClick={() => setMenu(!menu)}
      >
        MENU
      </button>
    </div>
  );
};

export default NewHeader;
