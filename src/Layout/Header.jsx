import React, { useState } from "react";
import logo from "../assets/SVG/headlogo.svg";
import { Link, useLocation, useNavigate } from "react-router";
import Search from "../Components/Home/Search";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // const navigate = useNavigate();
  // const location = useLocation(); 
  

  
  return (
    <>
    <Search onClose={() => setIsSearchOpen(false)} isSearchOpen={isSearchOpen}/>
    <div className="bg-[#FF4B4B] w-full h-full hidden lg:block">
      <nav className="max-w-screen-2xl mx-auto bg-[#FF4B4B] px-5 sm:px-16 ">
        <div className="flex justify-between">
          <Link to="/" className="logo py-5">
            <img src={logo} alt="" className=" w-[200px] xl:w-auto"/>
          </Link>

          <div className="flex gap-5">
            <div className="py-5 flex justify-center items-center">
              <div onClick={() => setIsSearchOpen(true)} className="searchbox flex justify-center items-center bg-white/20 border border-white md:w-[240px] lg:w-[340px] xl:w-[540px] py-5">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="placeholder:text-white placeholder:font-roboto placeholder:text-lg placeholder:font-normal outline-none text-white font-roboto text-lg font-normal placeholder:text-center"
                />
              </div>
            </div>  
            

            <div className="py-5 flex justify-center items-center">
              <Link to="/recommend" className="recommend px-6 py-5 bg-white flex justify-center items-center cursor-pointer">
                <h1 className="text-[#FF4B4B] text-sm lg:text-base xl:text-lg font-roboto font-bold  ">
                  Recommend a Business Leader
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
}

export default Header;
