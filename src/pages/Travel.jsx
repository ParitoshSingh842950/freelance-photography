import React, { useEffect, useState } from "react";
import NewHeader from "../components/NewHeader";
import { travelArray } from "../utils/constants";
import CollectionCard from "../components/CollectionCard";

const Travel = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 200);
  }, []);
  return (
    <div>
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
