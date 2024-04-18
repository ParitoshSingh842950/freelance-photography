import React, { useEffect, useState } from "react";
import CollectionCard from "../components/CollectionCard";
import { collectionArray } from "../utils/constants";
import NewHeader from "../components/NewHeader";

const Exhibitions = () => {
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
          !animate ? "translate-y-0" : "translate-y-[20px]"
        } duration-700 text-[50px] md:text-[120px] font-black mt-[80px] md:mt-[50px] font-[Anton]  md:-tracking-[1px] px-2`}
      >
        Exhibitons
      </h2>
      {collectionArray.map((e, i) => (
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

export default Exhibitions;
