import React from "react";
import play from "../assets/SVG/play.svg";
import play1 from "../assets/SVG/redplay.svg"
import Description from "../Components/Page2components/Description";
import Related from "../Components/Page2components/Related";

function Interview() {
  return (
    <>
    <div className="bg-[url(/src/assets/Images/bgimg2.png)] relative bg-cover bg-center bg-no-repeat md:w-full h-[580px] md:h-[800px] overflow-hidden">
      <div className="max-w-screen-2xl  mx-auto px-5 sm:px-16">
        <div className="w-full h-full bg-black/20 absolute inset-0"></div>

        <div className=" absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer hidden md:block">
          <img src={play} alt="" />
        </div>
        <div className=" absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer block md:hidden">
          <img src={play1} alt="" />
        </div>
       
      </div>
    </div>
     <Description/>
     <Related/>
     </>

  );
}

export default Interview;
