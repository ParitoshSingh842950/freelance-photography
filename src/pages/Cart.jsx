import React, { useEffect, useState } from "react";
import NewHeader from "../components/NewHeader";
import { useLocation } from "react-router-dom";

const Cart = () => {
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
      className={`${
        isVisible ? "opacity-100 duration-[1000ms]" : "opacity-0"
      }`}
    >
      <NewHeader />
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#333", // Customize the color
          textAlign: "center",
          margin: "2rem 0",
        }}
      >
        Page Under Construction
      </h1>
      {/* Other content */}
    </div>
  );
};

export default Cart;
