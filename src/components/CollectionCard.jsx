import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthor } from "../redux/reducer";

const CollectionCard = ({
  data: { img, id, content, name, locked },
  data,
  disabled,
  index,
}) => {
  const [animate, setAnimate] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 200);
  }, []);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (disabled) return;
    dispatch(setAuthor(data));
    navigate("/author");
  };

  return (
    <div
      className={`${animate ? "translate-y-0" : "translate-y-[50px]"
        } flex px-4 items-center mb-12 md:mb-4`}
      style={{ transition: index + 1 + "s" }}
    >
      <div className="w-[20%] md:w-[30%] flex items-center justify-center text-[30px] md:text-[50px] font-black [text-shadow:_0px_5px_5px_rgb(0_0_0_/_40%)]">
        {id}
      </div>
      <div className="hidden md:block w-[40%] pr-[50px] font-semibold indent-[30px]">
        {content}
      </div>
      <div className="sm:hidden  w-[40%]  font-semibold ">{name}</div>
      <div
        className={`flex flex-col w-[30%] md:w-[268px] cursor-pointer ${!locked && "hover:scale-105"
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
          className={`${locked && "grayscale"
            } md:h-[178px] md:w-[268px] w-full object-cover md:aspect-auto grayscale hover:grayscale-0 duration-200 aspect-video`}
        />
        <span className="hidden md:block ml-auto font-bold">{name}</span>
      </div>
    </div>
  );
};

export default CollectionCard;
