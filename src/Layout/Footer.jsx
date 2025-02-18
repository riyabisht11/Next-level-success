import React from "react";
import logo from "../assets/SVG/footlogo.svg";
import twitter from "../assets/SVG/twitter.svg";
import facebook from "../assets/SVG/facebook.svg";
import google from "../assets/SVG/google.svg";
import linkedin from "../assets/SVG/linkedin.svg";

function Footer() {
  return (
    <div className="bg-[#2C2C2C] w-full h-full">
      <footer className="max-w-screen-2xl mx-auto bg-[#2C2C2C] px-5 sm:px-16">
        <div className="flex flex-col md:flex-row justify-between py-12 gap-0 md:gap-10">
          <div className="first order-2 md:order-1 flex flex-col items-center md:items-start gap-10 md:gap-0">
            <div className="logo order-2 md:order-1">
              <img src={logo} alt="" />
            </div>

            <div className="pt-5 order-1 md:order-2">
              <h1 className="text-white font-roboto font-normal text-base">info@nextlevelsuccess.com</h1>
            </div>

            <div className="pt-0 md:pt-16 order-3  md:order-3">
              <h1 className="text-[#ABABAB] font-roboto font-normal text-lg">© 2020-2021 Nextlevelsuccess.com</h1>
            </div>
          </div>

          <div className="second order-1 md:order-2 flex items-center justify-center md:justify-start">
            <div className="flex space-x-5">

                <div className="twitter size-12 rounded-full flex justify-center items-center bg-[#414141] cursor-pointer hover:bg-[#FF4B4B] transition-all duration-300 ease-in-out ">
                    <img src={twitter} alt="" />

                </div>

                <div className="google size-12 rounded-full flex justify-center items-center bg-[#414141] cursor-pointer hover:bg-[#FF4B4B] transition-all duration-300 ease-in-out">
                    <img src={google} alt="" />
                </div>

                <div className="facebook size-12 rounded-full flex justify-center items-center bg-[#414141] cursor-pointer hover:bg-[#FF4B4B] transition-all duration-300 ease-in-out">
                    <img src={facebook} alt="" />
                </div>

                <div className="linkedin size-12 rounded-full flex justify-center items-center bg-[#414141] cursor-pointer hover:bg-[#FF4B4B] transition-all duration-300 ease-in-out">
                    <img src={linkedin} alt="" />
                </div>

            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
