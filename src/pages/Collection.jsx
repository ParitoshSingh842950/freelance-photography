import React, { useEffect, useState } from "react";
import CollectionCard from "../components/CollectionCard";
import { useNavigate } from "react-router-dom";
import NewHeader from "../components/NewHeader";
import axios from "axios";

const Collection = () => {
  const [collections, setCollections] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCollections = async () => {
      const response = await axios.get("/api/collections");
      setCollections(response.data);
    };

    fetchCollections();
  }, []);

  return (
    <div>
      <NewHeader />
      <div className="collections">
        {collections.map(collection => (
          <CollectionCard key={collection._id} data={collection} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
