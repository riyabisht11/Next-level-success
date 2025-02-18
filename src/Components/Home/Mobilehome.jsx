import React from "react";
import play from "../../assets/SVG/redplay.svg";
import Mobileheadcont from "./Mobileheadcont";

function Mobilehome() {
  return (
    <>
    <div className="bg-[url(/src/assets/Images/mobilehomebg.png)] relative bg-cover bg-center bg-no-repeat  w-full h-[580px] overflow-hidden block md:hidden">
      <div className="max-w-screen-2xl  mx-auto px-5 sm:px-16">
        <div className=" absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer">
          <img src={play} alt="" />
        </div>
        <div className="">
          <div className="absolute bottom-20 px-5">
            <h1 className="font-raleway text-4xl text-white font-semibold">
              Watch The <br />{" "}
              <span className=" text-[#FF4B4B] font-raleway text-4xl font-semibold">
                Trailer
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
<Mobileheadcont/>
    </>
  );
}

export default Mobilehome;
