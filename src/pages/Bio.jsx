import React from "react";
import NewHeader from "../components/NewHeader";

const Bio = () => {
  return (
    <div id="bio" className="mt-16">
      <NewHeader />
      <div className="relative">
        <p className="text-[50px] md:text-[100px] font-bold text-white absolute left-5 bottom-0 z-[3]">
          .About
        </p>
        <p className="text-[50px] md:text-[100px] font-bold text-white absolute right-5 bottom-0 z-[3]">
          Me
        </p>
        <img
          src="images/yasmeen.png"
          className="h-[50vh] md:h-[70vh] w-full object-cover grayscale duration-200 hover:grayscale-0 cursor-pointer"
          alt=""
        />
      </div>
      <div className="px-[20px] md:px-[200px] h-[40vh]">
        <h2 className="font-semibold text-xl text-center my-4">
          My Name is <span className="font-black text-3xl">Adanna </span>
        </h2>
        <p>
          Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
          quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
          vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu
          vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
          porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna
          non ligula vestibulum eleifend. Nulla varius volutpat turpis sed
          lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum
          sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis
          nisi, ac posuere leo.
        </p>
        <div className="w-full flex justify-center">
          <button className="my-4 mx-auto w-max py-4 px-8 bg-red-300 text-red-600 border-2 border-red-600 rounded-full">
            {" "}
            Check Out My Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bio;
