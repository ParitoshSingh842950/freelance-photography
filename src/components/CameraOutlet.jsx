import React from "react";

const CameraOutlet = ({ white }) => {
  return (
    <>
      <img
        src="images/Frame - 2.png"
        className={`absolute z-[2] bottom-0 left-0 ${
          white && "border-l-2 border-b-2"
        }`}
      />
      <img
        src="images/Frame - 4.png"
        className={`absolute z-[2] top-0 right-0 ${
          white && "border-t-2 border-r-2"
        }`}
      />
      <img
        src="images/Frame - 5.png"
        className={`absolute z-[2] bottom-0 right-0 ${
          white && "border-b-2 border-r-2"
        }`}
      />
      <img
        src="images/Frame - 6.png"
        className={`absolute z-[2] top-0 left-0 ${
          white && "border-t-2 border-l-2"
        }`}
      />
      <img
        src="images/Center of Frame.png"
        className="absolute z-[5] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] scale-50"
      />
    </>
  );
};

export default CameraOutlet;
