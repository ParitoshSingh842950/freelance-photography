import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const FadeIn = ({ component }) => {
  return (
    <div
      className={` ${
        isVisible ? "opacity-100 duration-[1000ms]" : "opacity-0"
      }`}
    >
      {component}
    </div>
  );
};

export default FadeIn;
