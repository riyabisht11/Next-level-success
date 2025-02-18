import React, { useState } from "react";
import pic from "../../assets/Images/learnpic.png";
import logo from "../../assets/SVG/learnlogo.svg";

function Mobilelearn() {
  const [count, setCount] = useState(1); // State to track how many times to render content
  const array = [1, 2, 3]; // Dummy array for mapping

  return (
    <div className="max-w-screen-2xl mx-auto px-5 sm:px-16 py-6 block lg:hidden ">
      {/* Heading should only appear once */}

      <div className="flex justify-center relative">
    <div className="absolute -bottom-2 w-[30px] md:w-[86px] h-[2px] bg-[#FF4B4B]"></div>
    <h1 className="font-roboto text-3xl md:text-5xl font-bold text-black text-center">
      Learn from Business Icons
    </h1>
  </div>



      {/* Rendering content based on the count state */}
      {[...Array(count)].map((_, index) => (
        <div key={index}>
          {array.map((idx) => (
            <div key={idx} className="flex flex-col">
              <div className="name pt-8">
                <div className="flex flex-col">
                  <h1 className="font-raleway font-bold text-base text-center">
                    Mr. Ramesh Agarwal
                  </h1>
                </div>
                <div className="py-2">
                  <h1 className="font-raleway font-medium text-sm text-center">
                    Chairman, Agarwal Packers and <br />
                    Moversmesh Agarwal
                  </h1>
                </div>
              </div>

              <div data-aos="fade-right" data-aos-duration="1500" className="pic h-full w-full">
                <img src={pic} alt="" className="mx-auto lg:mx-0" />
              </div>

              <div className="quote pt-7">
                <h1 className="font-raleway font-semibold text-sm text-black text-center">
                  <span className="font-raleway font-medium text-sm text-[#FF4B4B]"> “ </span>
                  Happy customers become your <br />
                  brand ambassadors.
                  <span className="font-raleway font-medium text-sm text-[#FF4B4B]"> ” </span>
                </h1>
              </div>

              <div className="points flex justify-center">
                <ul className="pt-7 space-y-7">
                  <li data-aos="fade-right" data-aos-duration="1500" className="flex gap-5">
                    <img src={logo} alt="" />
                    <h1 className="font-raleway font-semibold text-sm max-w-[248px]">
                      Customers are God – talk to them, study their pain points, and innovate to solve their problems.
                    </h1>
                  </li>

                  <li data-aos="fade-right" data-aos-duration="1500" className="flex gap-5">
                    <img src={logo} alt="" />
                    <h1 className="font-raleway font-semibold text-sm max-w-[248px]">
                      The secret to customer acquisition is to convert your happy customers into brand ambassadors.
                    </h1>
                  </li>

                  <li data-aos="fade-right" data-aos-duration="1500" className="flex gap-5">
                    <img src={logo} alt="" />
                    <h1 className="font-raleway font-semibold text-sm max-w-[248px]">
                      Hire only those who have fire inside them.
                    </h1>
                  </li>

                  <li data-aos="fade-right" data-aos-duration="1500" className="flex gap-5">
                    <img src={logo} alt="" />
                    <h1 className="font-raleway font-semibold text-sm max-w-[248px]">
                      A young entrepreneur should behave like a trustee instead of an owner while taking important business decisions.
                    </h1>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Load More Button */}
      <div className="flex justify-center pt-4">
        <div
          className="button bg-[#FF4B4B] inline-block cursor-pointer"
          onClick={() => setCount(count + 1)} // Increment the count state
        >
          <button className="text-white font-roboto font-medium text-sm px-5 py-3">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mobilelearn;
