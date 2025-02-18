import React from "react";
import logo from "../../assets/SVG/learnlogo.svg";
import pic from "../../assets/Images/learnpic.png";
import play from "../../assets/SVG/smallplay.svg";
import Mobilelearn from "./Mobilelearn";

function Learn() {
  const array = [
    {
      img: pic,
      name: "Ramesh Agarwal",
      des: "Chairman, Agarwal Packers and Movers",
      comp: "Agarwal Packers and Movers",
      quote: "Lies have to be remembered. Truth needs no memory",
      list: [
        "Talk to your customers, study their pain points and innovate to solve their problems.",
        "The secret to customer acquisition is your existing happy customers.",
        "Hire only those who have fire inside them.",
        "A young entrepreneur should behave like a trustee instead of an owner while taking important business decisions.",
      ],
    },
    {
      img: pic,
      name: "Anil Jain",
      des: "Managing Director, Shree Vardhman Group",
      comp: "Shree Vardhman Group",
      quote: "Lies have to be remembered. Truth needs no memory",
      list: [
        "In business too, slow and steady wins the race.",
        "Fulfil your commitments at all costs.",
        "Deliver before the promised deadline.",
      ],
    },
    {
      img: pic,
      name: "Satyanand Arya",
      des: "Chairman, Translogistics India ",
      comp: "Translogistics India",
      quote: "Lies have to be remembered. Truth needs no memory",
      list: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing ",
        "Lorem ipsum dolor sit amet, consectetur adipiscing ",
        "Lorem ipsum dolor sit amet, consectetur adipiscing ",
      ],
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-16  py-12 hidden lg:block">
        <div className=" flex justify-center relative">
          <div className="absolute -bottom-2 w-[30px] md:w-[86px] h-[2px] bg-[#FF4B4B] "></div>
          <h1 className="font-roboto text-2xl md:text-3xl lg:text-5xl font-bold text-black text-center">
            Learn from Business Icons
          </h1>
        </div>

        {array.map((item, idx) => (
          <div className="flex-col md:flex-col lg:flex-row flex pt-16 gap-10 xl:gap-7 md:mx-auto">
            <div className="h-full w-1/2 mx-auto lg:mx-0" 
            data-aos="fade-right"
             data-aos-duration="1500">
              <img src={item.img} alt="" />
            </div>

            <div className="right flex-col flex w-1/2 mx-auto lg:mx-0">
              <div>
                <div className="name ">
                  <h1 className="font-roboto text-[#2C2C2C] font-bold text-3xl xl:text-4xl">
                    {item.name}
                  </h1>
                </div>

                <div className="des pt-2 xl:pt-3">
                  <h1 className="font-roboto font-normal text-base text-[#2C2C2C]">
                    {item.des}
                  </h1>
                </div>

                <div className="comp pt-2 xl:pt-3">
                  <h1 className="font-roboto font-normal text-base text-[#FF4B4B]">
                    {item.comp}
                  </h1>
                </div>

                <div className="quote pt-3 xl:pt-7">
                  <h1 className="font-roboto font-normal italic text-base text-[#2C2C2C] ">
                    <span className="font-roboto font-normal italic text-base text-[#FF4B4B]">
                      {" "}
                      “{" "}
                    </span>
                    {item.quote}{" "}
                    <span className="font-roboto font-normal italic text-base text-[#FF4B4B]">
                      ”
                    </span>
                  </h1>
                </div>

                <div className="points">
      <ul className="pt-7 space-y-4 xl:space-y-7">
        {item.list.map((point, idx) => (
          <li
            key={idx}
            className="flex gap-5"
            data-aos="fade-up"
            data-aos-delay={idx * 150} 
            data-aos-duration="1500"
            // Stagger animation for each item
          >
            <img src={logo} alt="" />
            <h1 className="text-[#696969] font-roboto font-normal text-base xl:text-lg">
              {point}
            </h1>
          </li>
        ))}
      </ul>
    </div>

              </div>
            </div>
          </div>
        ))}
      </div>
      <Mobilelearn />
    </>
  );
}

export default Learn;
