import React from "react";
import { GalleryImages } from "../utils/constants";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { setModal } from "../redux/reducer";

const ImageGallerySlider = ({ data }) => {
  const dispatch = useDispatch();

  // Create an array of images by the current author
  const authorImages = GalleryImages.filter((e) => e.author === data.name);

  // Handle image click to open modal
  const handleClickImage = (originalIndex) => {
    dispatch(setModal({ open: true, index: originalIndex }));
  };

  // Custom arrow component for slider
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "100%",
          paddingTop: "1px",
        }}
        onClick={onClick}
      >
        A
      </div>
    );
  }

  // Slider settings for desktop
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: authorImages.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // Slider settings for mobile
  const smsettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <div className="hidden md:block relative z-[3] px-4">
        <Slider {...settings}>
          {authorImages.map((path, index) => (
            <div className="h-[125px]" key={index}>
              <img
                src={`images/${path.img}`}
                onClick={() => handleClickImage(GalleryImages.indexOf(path))}
                className="h-[125px] relative z-[3] aspect-square object-cover cursor-pointer hover:scale-95 duration-200"
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="block md:hidden relative z-[3] px-4">
        <Slider {...smsettings}>
          {authorImages.map((path, index) => (
            <div className="h-[125px]" key={index}>
              <img
                src={`images/${path.img}`}
                onClick={() => handleClickImage(GalleryImages.indexOf(path))}
                className="h-[125px] relative z-[3] w-full object-cover cursor-pointer hover:scale-95 duration-200"
                alt=""
              />
            </div>
          ))}
        </Slider>

        <Slider {...smsettings}>
          {authorImages.map((path, index) => (
            <div className="h-[125px]" key={index}>
              <img
                src={`images/${path.img}`}
                onClick={() => handleClickImage(GalleryImages.indexOf(path))}
                className="h-[125px] w-full relative z-[3] aspect-square object-cover cursor-pointer hover:scale-95 duration-200"
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageGallerySlider;
