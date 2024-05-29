import React, { useEffect, useState } from "react";
import NewHeader from "../components/NewHeader";
import { travelArray } from "../utils/constants";
import CollectionCard from "../components/CollectionCard";
import { useLocation, useNavigate } from "react-router-dom";

const Travel = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 200);
  }, []);
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // When the component mounts, set isVisible to true to trigger the fade-in effect
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
  }, [location]);

  const handleBackClick = () => {
    navigate("/options");
  };

  return (
    <div
      className={` ${isVisible ? "opacity-100 duration-[1000ms]" : "opacity-0"
        }`}
    >
      <NewHeader />
      <button
        onClick={handleBackClick}
        className="back-button flex items-center px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out m-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Options
      </button>
      <h2
        className={`${!animate ? "translate-y-0" : "translate-y-[10px]"
          } duration-700 text-[50px] md:text-[120px] font-black  font-[Anton]  md:-tracking-[1px] px-2`}
      >
        Travel
      </h2>
      {travelArray.map((e, i) => (
        <CollectionCard
          data={e}
          key={e.id}
          index={i}
        // disabled
        />
      ))}
    </div>
  );
};

export default Travel;
