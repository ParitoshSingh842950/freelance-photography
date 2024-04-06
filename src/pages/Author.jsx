import React from "react";
import ImageGallerySlider from "../components/ImageGallerySlider";
import Header from "../components/Header";
import CameraOutlet from "../components/CameraOutlet";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Author = () => {
  const author = useSelector((state) => state.home.author);
  const navigate = useNavigate();

  if (!author || !author.name) {
    window.location.href = "/";
  }

  return (
    <div>
      {/* <Header /> */}
      <div className="h-[60px] bg-black">
        <button
          className="h-[40px] group bg-white px-[30px] mt-[10px] ml-4 rounded font-semibold hover:bg-[whitesmoke] duration-150"
          onClick={() => navigate("/")}
        >
          <i className="fa-solid group-hover:animate-ping fa-arrow-left-long mr-2"></i>
          Back
        </button>
      </div>
      <section className="m-4 mb-[10px] p-4 relative h-[calc(100vh-90px)] flex flex-col justify-between">
        <CameraOutlet />
        {/* Name */}
        <div className="flex  justify-center items-center text-[15vw] mt-4 md:mt-0 md:text-[11vw] font-bold font-[Anton] md:[text-shadow:_0px_15px_20px_rgb(0_0_0_/_40%)] [text-shadow:_0px_5px_10px_rgb(0_0_0_/_40%)] ">
          SHOT BY ADA
        </div>

        {/* Intro */}
        <div className="w-full flex items-center justify-center p-4 flex-col -mt-[100px] md:mt-2">
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
