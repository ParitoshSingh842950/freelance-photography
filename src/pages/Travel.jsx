import React, { useEffect, useState } from "react";
import NewHeader from "../components/NewHeader";
import { travelArray } from "../utils/constants";
import CollectionCard from "../components/CollectionCard";
import { useLocation } from "react-router-dom";

const Travel = () => {
  const [animate, setAnimate] = useState(false);

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
  return (
    <div
      className={` ${
        isVisible ? "opacity-100 duration-[1000ms]" : "opacity-0"
      }`}
    >
      <NewHeader />
      <h2
        className={`${
          !animate ? "translate-y-0" : "translate-y-[10px]"
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
