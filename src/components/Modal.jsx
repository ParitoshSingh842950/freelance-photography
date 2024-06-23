import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../redux/reducer";
import { GalleryImages } from "../utils/constants";

const Modal = ({ author }) => {
  const { open, index } = useSelector((state) => state.home.modal);
  const [viewImage, setViewImage] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [modalClass, setModalClass] = useState("");
  const dispatch = useDispatch();

  const handleNext = () => {
    let nextCount = index + 1;
    if (nextCount > GalleryImages.length - 1) {
      dispatch(setModal({ open: true, index: 0 }));
    } else {
      dispatch(setModal({ open: true, index: nextCount }));
    }
  };

  useEffect(() => {
    if (open) {
      setModalClass("modal-enter");
      setTimeout(() => setModalClass("modal-enter-active"), 10);
    } else {
      setModalClass("modal-exit-active");
      setTimeout(() => setModalClass("modal-exit"), 400);
    }
  }, [open]);

  useEffect(() => {
    if (
      open &&
      GalleryImages[index || 0].author &&
      GalleryImages[index || 0].author !== author
    )
      handleNext();
  }, [index]);

  if (!open && modalClass === "modal-exit") return null;

  return (
    <>
      <style>
        {`
          .modal-enter {
            opacity: 0;
            transform: scale(0.95);
          }
          .modal-enter-active {
            opacity: 1;
            transform: scale(1);
            transition: opacity 400ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 400ms cubic-bezier(0.25, 0.1, 0.25, 1);
          }
          .modal-exit {
            opacity: 1;
            transform: scale(1);
          }
          .modal-exit-active {
            opacity: 0;
            transform: scale(0.95);
            transition: opacity 400ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 400ms cubic-bezier(0.25, 0.1, 0.25, 1);
          }
          .image-view-enter {
            opacity: 0;
          }
          .image-view-enter-active {
            opacity: 1;
            transition: opacity 400ms cubic-bezier(0.25, 0.1, 0.25, 1);
          }
          .image-view-exit {
            opacity: 1;
          }
          .image-view-exit-active {
            opacity: 0;
            transition: opacity 400ms cubic-bezier(0.25, 0.1, 0.25, 1);
          }
        `}
      </style>
      <div
        className={`fixed inset-0 bg-[rgba(17,17,17,0.8)] flex items-center justify-center z-[9] ${modalClass}`}
        onClick={() => dispatch(setModal({ open: false, index: 0 }))}
      >
        <div
          className="w-[90vw] md:w-[60vw] p-4 flex bg-black h-[90vh] relative"
          onClick={(e) => e.stopPropagation()}
        >
          <i
            className="fa-solid fa-caret-right absolute -right-3 md:top-[43%] top-[45%] z-[2] text-[60px] md:text-[80px] text-[rgba(255,255,255,0.7)] cursor-pointer hover:text-[rgba(255,255,255)] duration-200"
            onClick={handleNext}
          ></i>
          <div className="w-full md:w-1/2 p-4 md:pl-14 h-full overflow-y-auto flex flex-col items-center">
            <img
              className="w-full md:aspect-square object-cover md:grayscale"
              src={`images/${GalleryImages[index || 0].img}`}
              alt=""
            />
            <div className="text-[12px] text-white leading-3 tracking-wide py-1 w-full">
              <p>{GalleryImages[index || 0].heading}</p>
              <p>{GalleryImages[index || 0].date}</p>
              <p>{GalleryImages[index || 0].size}</p>
              <p>{GalleryImages[index || 0].line}</p>
            </div>

            <img src="images/Line 7.png" className="my-12" alt="" />

            <div className="text-white">
              <h3 className="text-yellow-600 text-center">Description</h3>
              <p className="indent-[30px] md:text-md text-sm">
                {GalleryImages[index || 0].desc1}
                <br />
                <br />
                {GalleryImages[index || 0].desc2}
              </p>
            </div>
          </div>
          <div className="md:p-4 h-full w-1/2 hidden md:block">
            <img
              className="h-full w-full object-cover"
              src={`images/${GalleryImages[index || 0].img}`}
              alt=""
              onClick={() => {
                setViewImage(!viewImage);
                setTimeout(() => {
                  setAnimate(true);
                }, 100);
              }}
            />
          </div>
          <button
            className="absolute top-4 left-4 text-white text-2xl bg-red-600 hover:bg-red-700 rounded-full w-10 h-10 flex items-center justify-center"
            onClick={() => dispatch(setModal({ open: false, index: 0 }))}
          >
            &times;
          </button>
        </div>
        {viewImage && (
          <div
            className="fixed h-full w-full flex items-center justify-center bg-[rgb(0,0,0,0.9)] z-[999]"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="size-[30px] bg-white fixed top-5 right-5 rounded-full font-bold flex items-center justify-center cursor-pointer hover:scale-110 duration-200 hover:bg-red-500 hover:text-white"
              onClick={() => {
                setViewImage(false);
                setAnimate(false);
              }}
            >
              X
            </div>
            <img
              className="object-contain duration-500 w-full"
              style={{
                height: animate ? "96vh" : "0px",
              }}
              src={`images/${GalleryImages[index || 0].img}`}
              alt=""
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
