import React from "react";
import left from "../../assets/SVG/leftarrow.svg";
import right from "../../assets/SVG/rightarrow.svg";
import img1 from "../../assets/Images/ramesh.png";
import img2 from "../../assets/Images/stayanand.png";
import img3 from "../../assets/Images/anil.png";
import img4 from "../../assets/Images/naresh.png";
import translogo from "../../assets/SVG/translogo.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router";

function Related() {
  const guest = [
    {
      img: img1,
      name: "Ramesh Agarwal",
      des: "Chairman",
      comp: "Agarwal Packers & Movers",
    },
    {
      img: img2,
      name: "Satyanand Arya",
      des: "Chairman",
      comp: "Translogistics India",
    },
    {
      img: img3,
      name: "Anil Jain",
      des: "Managing Director",
      comp: "Shree Vardhman Group",
    },
    {
      img: img4,
      name: "Naresh Jain",
      des: "Chairman",
      comp: "Jainco Buildcon Pvt. Ltd.",
    },

    {
      img: img2,
      name: "Satyanand Arya",
      des: "Chairman",
      comp: "Translogistics India",
    },
    {
      img: img3,
      name: "Anil Jain",
      des: "Managing Director",
      comp: "Shree Vardhman Group",
    },
    {
      img: img4,
      name: "Naresh Jain",
      des: "Chairman",
      comp: "Jainco Buildcon Pvt. Ltd.",
    },
  ];

  return (
    <div className="max-w-screen-2xl  mx-auto px-5 sm:px-16 py-6 lg:py-12">
      <div className=" flex justify-center md:justify-start relative pt-2">
        <div className="absolute -bottom-2 w-[30px] md:w-[86px] h-[2px] bg-[#FF4B4B] "></div>
        <h1 className="font-raleway md:font-roboto text-2xl md:text-3xl font-bold text-[#2C2C2C] ">
          Related Interviews
        </h1>
      </div>

      <div className="flex justify-between pt-12 space-x-9 overflow-x-auto">

        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          
        
         
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            0: {
              spaceBetween: 30,
              slidesPerView:1,
            },
            768: {
              spaceBetween: 30, // spaceBetween 30px for screen width >= 1024px
              slidesPerView: 2,
            },
            1024: {
              spaceBetween: 30, // spaceBetween 30px for screen width >= 1024px
              slidesPerView: 3,
            },
            1280: {
              spaceBetween: 50, // spaceBetween 70px for screen width >= 1280px
              slidesPerView: 4,
            },
          }}
          className=" mySwiper  w-full flex "
        >
          {guest.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="cards shrink-0 flex flex-col w-[237px] md:w-[280px] h-[339px] md:h-[401px] border border-[#E7E7E7] shadow-[20px_20px_43px_0px_#0000001A] mx-auto">
                <div className="image bg-[#FF4B4B] relative">
                  <div className="absolute inset-0">
                    <img src={translogo} alt="" />
                  </div>
                  <div className="relative z-50">
                    <img src={item.img} alt="" />
                  </div>
                </div>

                <div className="  flex flex-col items-center py-5 space-y-3 bg-white">
                  <div className="name">
                    <h1 className="font-roboto font-bold text-base md:text-lg text-[#2C2C2C]">
                      {item.name}
                    </h1>
                  </div>

                  <div className="flex flex-col items-center">
                    <h1 className="text-[#696969] font-roboto font-normal text-sm">
                      {item.des}{" "}
                    </h1>
                    <h1 className="text-[#696969] font-roboto font-normal text-sm">
                      {item.comp}
                    </h1>
                  </div>
                  
                  
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        

        
      </div>
    </div>
  );
}

export default Related;
