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
import Interview from "../../Page2/Interview";
import { Link } from "react-router";

function Guest() {
  const guest = [
    {
      img: img1,
      name: "Ramesh Agarwal",
      des: "Chairman",
      comp: "Agarwal Packers & Movers",
      button: "Read More",
    },
    {
      img: img2,
      name: "Satyanand Arya",
      des: "Chairman",
      comp: "Translogistics India",
      button: "Read More",
    },
    {
      img: img3,
      name: "Anil Jain",
      des: "Managing Director",
      comp: "Shree Vardhman Group",
      button: "Read More",
    },
    {
      img: img4,
      name: "Naresh Jain",
      des: "Chairman",
      comp: "Jainco Buildcon Pvt. Ltd.",
      button: "Read More",
    },
    {
      img: img2,
      name: "Satyanand Arya",
      des: "Chairman",
      comp: "Translogistics India",
      button: "Read More",
    },
    {
      img: img3,
      name: "Anil Jain",
      des: "Managing Director",
      comp: "Shree Vardhman Group",
      button: "Read More",
    },
    {
      img: img4,
      name: "Naresh Jain",
      des: "Chairman",
      comp: "Jainco Buildcon Pvt. Ltd.",
      button: "Read More",
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto px-5 sm:px-16  py-12">
      <div className=" flex justify-center relative">
        <div className="absolute -bottom-2 w-[30px] md:w-[86px] h-[2px] bg-[#FF4B4B] "></div>
        <h1 className="font-roboto text-3xl md:text-5xl font-bold text-black text-center">
          Guests on Next Level Success
        </h1>
      </div>

      <div className="flex justify-between py-16  relative ">
        {/* <div className="grey flex items-center justify-center">
          <div className="size-8 md:size-12 bg-black/20 rounded-full flex justify-center items-center">
            <img src={left} alt="" />
          </div>
        </div> */}

        {/* button */}
        <div className="btns block">
          {/* left button */}
          <div className="swiper-button-prev bg-black/20  absolute  z-10 left-0 lg:-left-12 top-1/2 -translate-y-1/2   !size-11  rounded-full flex  justify-center items-center cursor-pointer">
            <img src={left} alt="" />
          </div>

          {/* Right button */}
          <div className="swiper-button-next  absolute z-10 right-0 lg:-right-12 top-1/2 -translate-y-1/2 !size-11  rounded-full flex justify-center items-center bg-[#FF4B4B] cursor-pointer">
            <img src={right} alt="" className="shrink-0" />
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 4000,
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
              <div className="cards shrink-0 flex flex-col w-[237px] md:w-[280px] h-[350px] md:h-[401px] border border-[#E7E7E7]  mx-auto">
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
                  
                  <Link to="/interview" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })} className="pb-2">
                    <button className="read-button text-white font-roboto font-medium text-xs md:text-sm px-5 py-2 md:py-3 cursor-pointer">
                      {item.button}
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        

        {/* <div className="red flex justify-center items-center ">
          <div className="size-8 md:size-12 bg-[#FF4B4B] rounded-full flex justify-center items-center shrink-0">
            <img src={right} alt="" className="shrink-0" />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Guest;


