import React, { useEffect, useState } from "react";
import ImageGallerySlider from "../components/ImageGallerySlider";
import Header from "../components/Header";
import CameraOutlet from "../components/CameraOutlet";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import NewHeader from "../components/NewHeader";

const Author = () => {
  const author = useSelector((state) => state.home.author);
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 200);
  }, []);

  if (!author || !author.name) {
    window.location.href = "/";
  }

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
      {/* <Header /> */}
      <NewHeader />
      <section className="m-4 mb-0 p-4 relative h-[calc(100vh-90px)] flex flex-col justify-between">
        <CameraOutlet />
        {/* Name */}
        <div
          className={`flex  justify-center items-center text-[15vw] mt-4  md:mt-0 md:text-[11vw] font-bold font-[Anton] duration-1000 ${
            animate &&
            "md:[text-shadow:_0px_15px_20px_rgb(0_0_0_/_40%)] [text-shadow:_0px_5px_10px_rgb(0_0_0_/_40%)] "
          } ${animate ? "translate-y-0" : "translate-y-[20px]"}`}
        >
          SHOT BY ADA
        </div>

        {/* Intro */}
        <div
          className={`${
            animate ? "translate-y-0" : "-translate-y-[20px]"
          } duration-1000 w-full flex items-center justify-center p-4 flex-col -mt-[20px] md:mt-2`}
        >
          <h2 className="text-2xl font-semibold">{author?.name}</h2>
          <p>
            Nulla varius volutpat turpis sed lacinia. Proin vitae facilisis
            nisi, ac posuere leo.
          </p>
        </div>

        {/* Image Gallery Slider */}
        <ImageGallerySlider />
      </section>

      <Modal />
    </div>
  );
};

export default Author;
