import React from "react";

const CameraOutlet = () => {
  return (
    <>
      <img
        src="images/Frame - 2.png"
        className="absolute z-[2] bottom-0 left-0"
      />
      <img
        src="images/Frame - 4.png"
        className="absolute z-[2] top-0 right-0"
      />
      <img
        src="images/Frame - 5.png"
        className="absolute z-[2] bottom-0 right-0"
      />
      <img src="images/Frame - 6.png" className="absolute z-[2] top-0 left-0" />
      <img
        src="images/Center of Frame.png"
        className="absolute z-[5] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
      />
    </>
  );
};

export default CameraOutlet;
