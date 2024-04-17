import React from "react";
import CollectionCard from "../components/CollectionCard";
import { collectionArray } from "../utils/constants";
import NewHeader from "../components/NewHeader";

const Exhibitions = () => {
  return (
    <div>
      <NewHeader />
      <h2 className="text-[50px] md:text-[120px] font-black mt-[50px] font-[Anton]  md:-tracking-[1px] px-2">
        Exhibitons
      </h2>
      {collectionArray.map((e) => (
        <CollectionCard
          data={e}
          key={e.id}
          // disabled
        />
      ))}
    </div>
  );
};

export default Exhibitions;
