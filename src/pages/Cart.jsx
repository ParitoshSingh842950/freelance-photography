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
      className={` ${
        isVisible ? "opacity-100 duration-[1000ms]" : "opacity-0"
      }`}
    >
      <NewHeader />
      <div>Cart</div>
    </div>
  );
};

export default Cart;
