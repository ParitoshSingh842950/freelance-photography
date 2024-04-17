import React from "react";
import NewHeader from "../components/NewHeader";
import { travelArray } from "../utils/constants";
import CollectionCard from "../components/CollectionCard";

const Travel = () => {
  return (
    <div>
      <NewHeader />
      <h2 className="text-[50px] md:text-[120px] font-black mt-[50px] font-[Anton]  md:-tracking-[1px] px-2">
        Travel
      </h2>
      {travelArray.map((e) => (
        <CollectionCard
          data={e}
          key={e.id}
          // disabled
        />
      ))}
    </div>
  );
};

export default Travel;
