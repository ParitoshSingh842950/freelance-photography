import React, { useEffect, useState } from "react";
import NewHeader from "../components/NewHeader";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 200);
  }, []);
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
      <NewHeader />
      <div className="p-4" id="contact">
        <div className="w-full md:flex">
          <div className=" md:w-2/3 p-4 font-[Anton]   text-[30px] md:text-[70px] uppercase">
            <p>A Creative Director / </p>
            <p className="indent-[50px]">Photographer</p>
            <p className="indent-[100px]">From</p>
            <p> Abuja, Nigeria Located in Hartford.</p>
          </div>
          <div className="hidden md:block md:w-1/3">
            <img
              src="https://s3-alpha-sig.figma.com/img/ca49/2570/62e3feb094e8c2844bb4fd807def162e?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p7TDghWCY0WJWn3LyR8bttXOJJJwHtz~QT18gjLb1r5NRx35VkWGhlJeF3-W4RrlqCY0WOuPqsCWDrc0tALfo0PiA9LYNYaYKoo3nYZAYBIFaixrQpby0mHZ~vROnwvI05d7T5yQTcxmEsQiGBWTnibtRIoprrhKUrCyn8NIMf1ZWhltbjaHnI6COS-oqAsxFEMV~QKVNb1wKzuSube4ORaTlqOIPs--G3p3NS4GndYIxGkUNEMWCNuqNBM658TuVLrUs3uKZ~lKyWk0E~N4W0XWP7A~zhLEGKZl9YX0wt3vZkw6hI9DYdDJHJL91PS4wQD8Ni6wLmhEWNf9Zo5WlA__"
              alt=""
              className="w-[308px] h-[354px] object-cover mt-[80px]"
            />
          </div>
        </div>
        <div className="uppercase md:text-[30px] flex">
          <div className="w-1/2">
            <img
              src="https://s3-alpha-sig.figma.com/img/ca49/2570/62e3feb094e8c2844bb4fd807def162e?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p7TDghWCY0WJWn3LyR8bttXOJJJwHtz~QT18gjLb1r5NRx35VkWGhlJeF3-W4RrlqCY0WOuPqsCWDrc0tALfo0PiA9LYNYaYKoo3nYZAYBIFaixrQpby0mHZ~vROnwvI05d7T5yQTcxmEsQiGBWTnibtRIoprrhKUrCyn8NIMf1ZWhltbjaHnI6COS-oqAsxFEMV~QKVNb1wKzuSube4ORaTlqOIPs--G3p3NS4GndYIxGkUNEMWCNuqNBM658TuVLrUs3uKZ~lKyWk0E~N4W0XWP7A~zhLEGKZl9YX0wt3vZkw6hI9DYdDJHJL91PS4wQD8Ni6wLmhEWNf9Zo5WlA__"
              alt=""
              className="md:hidden w-[90%] aspect-square object-cover "
            />
          </div>
          <div className="w-1/2 space-y-3 md:-mt-[100px]">
            <p>
              <i className="mr-2 fa-solid fa-phone"></i>(709)-768-3213
            </p>
            <p>
              <i className=" mr-2 fa-solid fa-envelope"></i>ShotByAda@gmail.com
            </p>
            <p>
              <i className=" mr-2 fa-solid fa-location-dot"></i> 123 somewhere
              ave, Hartford CT 06107
            </p>
            <p>
              <i className=" mr-2 fa-brands fa-instagram"></i>@Shotbyada
            </p>
            <button className="py-3 px-6 rounded md:text-[18px] bg-green-300 font-bold w-max  text-green-700 border-2 border-green-700">
              FOLLOW ME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
