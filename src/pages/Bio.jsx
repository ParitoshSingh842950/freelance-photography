import React, { useEffect, useState } from "react";
import NewHeader from "../components/NewHeader";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"; // Import the Link component

const Bio = () => {
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
      className={`${isVisible ? "opacity-100 duration-[1000ms]" : "opacity-0"
        }`}
    >
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
          My Name is <span className="font-black text-3xl">Adanna</span>
        </h2>
        <p className="custom-font">
          Adanna Eleje, a Nigerian artist, skillfully captures the beauty inherent in the world—whether it
          be in the form of individuals or landscapes. Her aspirations are threefold: to be, to see, and to
          pursue everything that resonates with her innermost self. Adanna discovers reflections of
          herself in every person and element she encounters. Committed to refining her skills, she
          channels creativity into her work, intertwining her expressions with the rich tapestry of her
          Nigerian culture. Through her lens, she navigates the complexities of existence, acknowledging
          the paradox of conveying thoughts within the cultural context. Despite grappling with uncertainty
          and a sense of detachment, Adanna finds connection in the midst of chaos, questioning the
          authenticity of life itself.
        </p>
        <div className="w-full flex justify-center">
          {/* Add a link to the collections page */}
          <Link to="/options">
            <button className="my-4 mx-auto w-max py-4 px-8 bg-red-300 text-red-600 border-2 border-red-600 rounded-full">
              Check Out My Work
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bio;
