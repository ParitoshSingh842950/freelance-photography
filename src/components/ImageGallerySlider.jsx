import React from "react";
import { GalleryImages } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setModal } from "../redux/reducer";

const ImageGallerySlider = () => {
  const dispatch = useDispatch();
  const handleClickImage = (data) => {
    dispatch(setModal({ open: true, data: data }));
  };
  return (
    <div>
      <div className=" flex overflow-hidden justify-evenly flex-wrap max-h-[40vh] overflow-y-auto gap-2">
        {GalleryImages.map((path) => (
          <img
            key={path}
            src={`images/${path}`}
            onClick={() => handleClickImage(path)}
            className="h-[125px] aspect-square object-cover cursor-pointer hover:scale-95 duration-200"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallerySlider;
