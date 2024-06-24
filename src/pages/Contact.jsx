import React, { useEffect, useState } from "react";
import NewHeader from "../components/NewHeader";

const Contact = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 200);
  }, []);

  return (
    <>
      <NewHeader />
      <div className="p-4 custom-font" id="contact">
        <div className="w-full md:flex">
          <div className="md:w-2/3 p-4 font-[Anton] text-[30px] md:text-[70px] uppercase">
            <p>A Creative Director /</p>
            <p className="indent-[50px]">Photographer</p>
            <p className="indent-[100px]">From</p>
            <p> Abuja, Nigeria Located in Hartford.</p>
          </div>
          <div className="hidden md:block md:w-1/3">
            <img
              src="images/ada_walking png.png"
              alt=""
              className="w-[308px] h-[354px] object-cover mt-[80px]"
            />
          </div>
        </div>
        <div className="uppercase md:text-[30px] flex">
          <div className="w-1/2">
            <img
              src="images/ada_walking png.png"
              alt=""
              className="md:hidden w-[90%] aspect-square object-cover"
            />
          </div>
          <div className="w-1/2 space-y-3 md:-mt-[100px]">
            <p>
              <i className="mr-2 fa-solid fa-phone"></i>(617)-909-3213
            </p>
            <p>
              <i className="mr-2 fa-solid fa-envelope"></i>AYDEELEJE@GMAIL.COM
            </p>
            <p>
              <i className="mr-2 fa-solid fa-location-dot"></i> HARTFORD, CT 06106
            </p>
            <p>
              <i className="mr-2 fa-brands fa-instagram"></i>@SHOTBYADA
            </p>
            <a
              href="https://www.instagram.com/365da.ze?igsh=MXJxNWFiZDBiaHo0aQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 py-3 px-6 rounded md:text-[18px] bg-green-300 font-bold w-max text-green-700 border-2 border-green-700">
                FOLLOW ME
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
