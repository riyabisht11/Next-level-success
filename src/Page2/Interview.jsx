import React from "react";
import play from "../assets/SVG/play.svg";
import play1 from "../assets/SVG/redplay.svg"
import Description from "../Components/Page2components/Description";
import Related from "../Components/Page2components/Related";

function Interview() {
  return (
    <>
    <div className="relative w-full h-[580px] md:h-[800px] overflow-hidden">
        {/* Video Element */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/src/assets/Videos/interviewvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      <div className="max-w-screen-2xl  mx-auto px-5 sm:px-16">
        <div className="w-full h-full bg-black/20 absolute inset-0"></div>

       
      </div>
    </div>
     <Description/>
     <Related/>
     </>

  );
}

export default Interview;
