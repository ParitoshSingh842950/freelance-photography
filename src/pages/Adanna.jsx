import React, { useEffect, useState } from "react";
import NewHeader from "../components/NewHeader";

const Adanna = () => {
  const [expand, setExpand] = useState(false);
  const [fontSize, setFontSize] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setExpand(true);
    }, 0);
    setTimeout(() => {
      setFontSize(true);
    }, 1500);
  }, []);

  const commonStyles = {
    boxSizing: "border-box",
    fontFamily:
      '"HelveticaNeue-CondensedBold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  };

  return (
    <div style={commonStyles}>
      <NewHeader />
      <h2
        className="text-center font-bold text-[3rem] md:text-[8rem] text-[arial] duration-[1s]"
        style={{ ...commonStyles, fontWeight: 900, fontSize: !fontSize && 0 }}
      >
        Adanna Eleje
      </h2>
      <div className="flex justify-center">
        <div
          className="h-[50vh] md:h-[80vh] w-[300px] duration-[1.5s] hover:w-full flex justify-center"
          style={{
            ...commonStyles,
            width: expand ? "100%" : "308px",
            height: !expand && "354px",
            marginTop: !expand ? "50px" : 0,
          }}
        >
          <img
            src="images/yasmeen.png"
            className="h-full object-cover w-full"
            alt=""
          />
        </div>
      </div>
      {fontSize && (
        <div className="flex px-[10px] md:px-[200px] py-[50px] items-center flex-col md:flex-row">
          <div className="md:w-1/2" style={{ ...commonStyles, fontWeight: 900 }}>
            <p className="text-2xl">"Give me nothing, &</p>
            <p className="text-2xl"> I'll still produce a work of art "</p>
            <p className="text-xl">-Ada</p>
          </div>
          <div className="md:w-1/2" style={commonStyles}>
            Adanna Eleje, a Nigerian artist, skillfully captures the beauty inherent in the world—whether it
            be in the form of individuals or landscapes. Her aspirations are threefold: to be, to see, and to
            pursue everything that resonates with her innermost self. Adanna discovers reflections of
            herself in every person and element she encounters. Committed to refining her skills, she
            channels creativity into her work, intertwining her expressions with the rich tapestry of her
            Nigerian culture. Through her lens, she navigates the complexities of existence, acknowledging
            the paradox of conveying thoughts within the cultural context. Despite grappling with uncertainty
            and a sense of detachment, Adanna finds connection in the midst of chaos, questioning the
            authenticity of life itself.
          </div>
        </div>
      )}
    </div>
  );
};

export default Adanna;
