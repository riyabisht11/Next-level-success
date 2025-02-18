import React, { useState } from "react";
import play from "../../assets/SVG/play.svg";
import Popup from "./Popup";


function Hero() {
  const [showPopup, setShowPopup] = useState(true);
  return (
    <div className="hidden md:block bg-[url(/src/assets/Images/bgimage.png)] relative bg-cover bg-center bg-no-repeat w-full h-[800px] overflow-hidden">
      <div className="max-w-screen-2xl  mx-auto px-5 sm:px-16">
        <div className="w-full h-full bg-black/20 absolute inset-0"></div>

        <div className="py-4 flex justify-center">
          <h1 className="text-white font-roboto text-base lg:text-lg font-normal max-w-[1180px]">
            In this Interview Series, I speak with business leaders about how
            they grew their businesses. What have they found to be the secret to
            success, that somebody like me twenty five years younger than them
            can start to apply in my own business. Join me as we merge their
            wisdom with modern-day technology and take our own businesses to the
            next level.
          </h1>
        </div>

        <div className=" absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer">
          <img src={play} alt="" />
        </div>

        <div className="bg-[#FF4B4B] inline-block  absolute left-1/2 -translate-x-1/2 top-[75%] -translate-y-1/2">
          <button class="bg-[#FF4B4B] text-white border border-[#FF4B4B] border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span class="bg-[#FF4B4B] absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(255,161,161,0.3)]"></span>
            Watch the trailer
          </button>
        </div>

        <div className="absolute bottom-5 right-9">
          {showPopup && ( <Popup onClose={() => setShowPopup(false)} />)}
         
        </div>
      </div>
    </div>
  );
}

export default Hero;
