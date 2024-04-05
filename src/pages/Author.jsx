import React from "react";
import ImageGallerySlider from "../components/ImageGallerySlider";
import Header from "../components/Header";
import CameraOutlet from "../components/CameraOutlet";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";

const Author = () => {
  const { name } = useSelector((state) => state.home.author);

  return (
    <div>
      <Header />
      <section className="m-4 mb-[10px]  p-4 relative h-[calc(100vh-90px)] flex flex-col justify-between">
        <CameraOutlet />
        {/* Name */}
        <div className="flex justify-center items-center text-[11vw] font-bold font-[arial] [text-shadow:_0px_15px_20px_rgb(0_0_0_/_40%)] tracking-tighter">
          SHOT BY ADA
        </div>

        {/* Intro */}
        <div className="w-full flex items-center justify-center p-4 flex-col mt-2">
          <h2 className="text-2xl font-semibold">{name}</h2>
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
