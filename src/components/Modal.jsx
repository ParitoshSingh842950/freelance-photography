import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../redux/reducer";
import { GalleryImages } from "../utils/constants";

const Modal = () => {
  const { open, index } = useSelector((state) => state.home.modal);
  const dispatch = useDispatch();

  const handleNext = () => {
    let nextCount = index + 1;
    if (nextCount > GalleryImages.length - 1) {
      dispatch(setModal({ open: true, index: 0 }));
    } else {
      dispatch(setModal({ open: true, index: nextCount }));
    }
  };

  if (!open) return;
  return (
    <div
      className="fixed inset-0 bg-[rgba(17,17,17,0.8)] flex items-center justify-center z-[9]"
      onClick={() => dispatch(setModal({ open: false, index: 0 }))}
    >
      <div
        className="w-[98vw] h-[70vh] md:w-[60vw] p-4 flex bg-black md:h-[90vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <i
          className="fa-solid fa-caret-right absolute right-3 top-[40%] z-[2] text-[100px] text-[rgba(255,255,255,0.7)] cursor-pointer hover:text-[rgba(255,255,255)] duration-200"
          onClick={handleNext}
        ></i>
        <div className="w-1/2 p-4 md:pl-14 h-full overflow-y-auto flex flex-col items-center">
          <img
            className="w-full aspect-square object-cover grayscale"
            src={`images/${GalleryImages[index || 0]}`}
          />
          <div className="text-[12px] text-white leading-3 tracking-wide py-1 w-full">
            <p>Boy With Ballons</p>
            <p>August '24</p>
            <p>30 x 35in</p>
            <p>Photograph shot on Leika 990</p>
          </div>

          <img src="images/Line 7.png" className="my-12" alt="" />

          <div className="text-white ">
            <h3 className="text-yellow-600 text-center">Description</h3>
            <p className="indent-[30px] md:text-md text-sm ">
              Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus.
              <br />
              <br />
              Maecenas eget condimentum velit, sit amet feugiat lectus. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra.
            </p>
          </div>
        </div>
        <div className="md:p-4 h-full w-1/2 ">
          <img
            className="h-full w-full object-cover"
            src={`images/${GalleryImages[index || 0]}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
