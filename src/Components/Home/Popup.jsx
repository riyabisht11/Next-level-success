import React from "react";
import pic from "../../assets/Images/cardpic.png";
import play from "../../assets/SVG/cardplay.svg";
import cross from "../../assets/SVG/cardcross.svg";
import { Link } from "react-router";

function Popup({ onClose }) {
  return (
    

      <div className="hidden lg:inline-flex   px-4 py-4 gap-2 relative bg-white ">
        <div onClick={onClose} className="absolute bg-[#FF4B4B] text-white rounded-full size-7 text-xs flex justify-center items-center -top-3 -right-3 cursor-pointer">
          <img src={cross} alt="" />
        </div>
        <div className="first relative">
          <img src={pic} alt=""  />
          <div className="absolute right-1 bottom-2"><img src={play} alt="" className="cursor-pointer"/></div>
        </div>

        <div className="second ">
          <div className="name">
            <h1 className="text-[#2C2C2C] text-[13px] font-roboto font-medium">
              Ramesh Agarwal
            </h1>
          </div>

          <div className="text pb-3">
            <p className="text-[#696969] text-[10px] font-roboto font-normal max-w-[172px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <div className="button bg-[#FF4B4B] inline-block cursor-pointer  hover:scale-110">
            <button className="font-roboto font-normal text-[10px] text-white py-2 px-4 cursor-pointer ">
              View More
            </button>
          </div>
        </div>
      </div>

  );
}

export default Popup;
