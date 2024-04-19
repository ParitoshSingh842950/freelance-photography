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
  return (
    <div>
      <NewHeader />
      <h2
        className=" text-center font-bold text-[3rem] md:text-[8rem] text-[arial] duration-[1s]"
        style={{ fontSize: !fontSize && 0 }}
      >
        Adanna Eleje
      </h2>
      <div className="flex justify-center">
        <div
          className="h-[50vh] md:h-[80vh] w-[300px] duration-[1.5s] hover:w-full flex justify-center"
          style={{
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
          <div className="md:w-1/2 font-bold">
            <p className="text-2xl">"Give me nothing, &</p>
            <p className="text-2xl"> I'll still produce a work of art "</p>
            <p className="text-xl">-Ada</p>
          </div>
          <div className="md:w-1/2">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            sunt quod, quam mollitia ducimus voluptatem beatae ad dicta deleniti
            distinctio velit quae aperiam temporibus, perspiciatis odio corporis
            culpa, blanditiis itaque veritatis atque illum ratione iste totam.
            Maiores quos obcaecati incidunt tempore, rerum laboriosam porro
            magni inventore necessitatibus, similique nobis reiciendis.
          </div>
        </div>
      )}
    </div>
  );
};

export default Adanna;
