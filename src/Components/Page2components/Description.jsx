import React from "react";
import logo from "../../assets/SVG/learnlogo.svg";
function Description() {
  return (
    <div className="max-w-screen-2xl  mx-auto px-5 sm:px-16 py-6 xl:py-12">
      <div>
        <h1 className="text-black md:text-[#2C2C2C] font-raleway md:font-roboto font-bold text-base md:text-4xl text-center">
          Ramesh Agarwal
        </h1>
      </div>

      <div className=" flex justify-center md:justify-start relative pt-5">
        <div className="absolute -bottom-2 md:w-[86px] h-[2px] bg-[#FF4B4B] "></div>
        <h1 className="font-raleway md:font-roboto text-sm md:text-xl font-medium md:font-normal text-center text-black md:text-[#696969] ">
          Chairman, Agarwal Packers & Movers
        </h1>
      </div>

      <div className="pt-7 hidden md:block">
        <p className="font-roboto text-lg font-normal text-[#696969]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. dent, sunt in
          culpa quident, sunt in culpa quident, sunt in culpa quident, sunt in
          culpa qui.
        </p>
      </div>

      <div className="points">
        <ul className="pt-7 space-y-6">
          <li data-aos="fade-up"
                data-aos-duration="2000" className="flex gap-5">
            <img src={logo} alt="" />
            <h1 className="text-black md:text-[#696969] font-raleway md:font-roboto font-medium md:font-normal text-sm md:text-lg">
              Talk to your customers, study their pain points and innovate to
              solve their problems.
            </h1>
          </li>

          <li data-aos="fade-up"
                data-aos-duration="2000" className="flex gap-5">
            <img src={logo} alt="" />
            <h1 className="text-black md:text-[#696969] font-raleway md:font-roboto font-medium md:font-normal text-sm md:text-lg">
              The secret to customer acquisition is your existing happy
              customers.
            </h1>
          </li>

          <li data-aos="fade-up"
                data-aos-duration="2000" className="flex gap-5">
            <img src={logo} alt="" />
            <h1 className="text-black md:text-[#696969] font-raleway md:font-roboto font-medium md:font-normal text-sm md:text-lg">
              Hire only those who have fire inside them.
            </h1>
          </li>

          <li data-aos="fade-up"
                data-aos-duration="2000" className="flex gap-5">
            <img src={logo} alt="" />
            <h1 className="text-black md:text-[#696969] font-raleway md:font-roboto font-medium md:font-normal text-sm md:text-lg">
              A young entrepreneur should behave like a trustee instead of an
              owner while taking important business decisions.
            </h1>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Description;
