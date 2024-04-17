import React from "react";
import { GalleryImages } from "../utils/constants";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { setModal } from "../redux/reducer";

const ImageGallerySlider = () => {
  const dispatch = useDispatch();
  const handleClickImage = (data) => {
    dispatch(setModal({ open: true, data: data }));
  };
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
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  var smsettings = {
    // dots: true,
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
          {GalleryImages.map((path) => (
            <div className="h-[125px]">
              <img
                key={path}
                src={`images/${path}`}
                onClick={() => handleClickImage(path)}
                className="h-[125px]  relative z-[3] aspect-square object-cover cursor-pointer hover:scale-95 duration-200"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="block md:hidden relative z-[3] px-4">
        <Slider
          {...{
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            // nextArrow: <SamplePrevArrow />,
            // prevArrow: <SamplePrevArrow />,
          }}
        >
          {GalleryImages.map((path) => (
            <div className="h-[125px]">
              <img
                key={path}
                src={`images/${path}`}
                onClick={() => handleClickImage(path)}
                className="h-[125px]  relative z-[3] aspect-square object-cover cursor-pointer hover:scale-95 duration-200"
              />
            </div>
          ))}
        </Slider>
        <Slider
          {...{
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            // nextArrow: <SamplePrevArrow />,
            // prevArrow: <SamplePrevArrow />,
          }}
        >
          {GalleryImages.map((path) => (
            <div className="h-[125px]">
              <img
                key={path}
                src={`images/${path}`}
                onClick={() => handleClickImage(path)}
                className="h-[125px]  relative z-[3] w-full object-cover cursor-pointer hover:scale-95 duration-200"
              />
            </div>
          ))}
        </Slider>

        <Slider
          {...{
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            // nextArrow: <SamplePrevArrow />,
            // prevArrow: <SamplePrevArrow />,
          }}
        >
          {GalleryImages.map((path) => (
            <div className="h-[125px]">
              <img
                key={path}
                src={`images/${path}`}
                onClick={() => handleClickImage(path)}
                className="h-[125px]  relative z-[3] aspect-square object-cover cursor-pointer hover:scale-95 duration-200"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageGallerySlider;
