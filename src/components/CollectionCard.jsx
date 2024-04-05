import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthor } from "../redux/reducer";

const CollectionCard = ({ data: { img, id, content, name, locked }, data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setAuthor(data));
    navigate("/author");
  };

  return (
    <div className="flex px-4 items-center mb-4">
      <div className="w-[30%] flex items-center justify-center text-[50px] font-black [text-shadow:_0px_5px_5px_rgb(0_0_0_/_40%)]">
        {id}
      </div>
      <div className="hidden md:block w-[40%] pr-[50px] font-semibold indent-[30px]">
        {content}
      </div>
      <div className="sm:hidden  w-[40%] pr-[50px] font-semibold indent-[30px]">
        {name}
      </div>
      <div
        className={`flex flex-col w-[268px] cursor-pointer ${
          !locked && "hover:scale-105"
        } duration-200 relative items-center justify-center`}
        onClick={!locked && handleClick}
      >
        {locked && (
          <img
            src="https://icons.veryicon.com/png/o/internet--web/flatten-icon/lock-63.png"
            className="h-[60%] object-cover z-[3] absolute"
            alt=""
          />
        )}
        <img
          src={img}
          className={`${
            locked && "grayscale"
          } h-[178px] w-[268px] object-cover`}
        />
        <span className="ml-auto font-bold">{name}</span>
      </div>
    </div>
  );
};

export default CollectionCard;