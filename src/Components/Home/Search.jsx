import React, { useState } from 'react';
import cross from "../../assets/SVG/cross.svg";
import back from '../../assets/SVG/searchback.svg';
import { Link } from 'react-router';

function Search({ onClose,isSearchOpen }) {
  const [isActive, setIsActive] = useState(false);
  const recentSearches = ["Ramesh Agarwal", "GD Goel", "Anil Jain", "Ghanshyam Das Goyal", "Satyanand Arya"];

  return (
    <div
    className={`fixed inset-0 z-100 flex flex-col h-svh
    transform transition-transform duration-500 ease-in-out p-5 items-center bg-[#2C2C2C]
    ${
      isSearchOpen
        ? "translate-x-0"
        : "translate-x-full "
    }`}
  >
      
      {/* Search Input */}
      <div className="relative w-[320px]">
        <input
          type="text"
          placeholder={isActive ? "" : "Search here for interviews"}
          className=" caret-[#FF4B4B] w-full p-3 bg-transparent text-center border border-gray-600 outline-none text-sm font-raleway font-medium 
                     text-white/30 placeholder:text-center placeholder:font-raleway placeholder:font-medium placeholder:text-sm"
          onFocus={() => setIsActive(true)}
          onBlur={(e) => setIsActive(e.target.value ? true : false)}
        />

       
        {/* Cross Icon on Right when Active */}
        {isActive && (
          <button onClick={() => setIsActive(false)} className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <img src={cross} alt="Close" className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Recent Searches */}
      <div className="mt-16">
        <h2 className="font-raleway text-2xl lg:text-4xl font-bold text-white/30 text-center">Recently</h2>
        <ul  onClick={onClose}  className="space-y-2 lg:space-y-6 pt-12">
          {recentSearches.map((name, index) => (

            <li  key={index} className="text-white/30 text-base lg:text-xl font-raleway font-medium cursor-pointer hover:text-white transition-all duration-300 ease-in-out text-center">
              
              <Link to = "/interview">{name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Back Arrow */}
      <div className="flex pt-20 justify-center">
        <Link to="/">
        <img src={back} alt="Back" className="w-6 h-6 cursor-pointer" onClick={onClose} /></Link>
      </div>
    </div>
  );
}

export default Search;
