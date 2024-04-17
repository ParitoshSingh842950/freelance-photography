import React from "react";
import CollectionCard from "../components/CollectionCard";
import { collectionArray } from "../utils/constants";
import Header from "../components/Header";
import NewHeader from "../components/NewHeader";

const Collection = () => {
  return (
    <div id="collection">
      <NewHeader />
      <h2 className="text-[50px] md:text-[120px] font-black mt-[80px] md:mt-[50px] font-[Anton]  md:-tracking-[1px] px-2">
        Collections
      </h2>
      {collectionArray.map((e) => (
        <CollectionCard data={e} key={e.id} />
      ))}
    </div>
  );
};

export default Collection;
