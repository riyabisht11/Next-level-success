import React from "react";
import cross from "../../assets/SVG/cross.svg"; // Add a close (X) icon\
import { Link } from "react-router";

function Menu({ onClose ,isMenuOpen }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col h-svh
            transform transition-transform duration-800 ease-in-out 
            ${
              isMenuOpen
                ? "translate-x-0 "
                : "translate-x-full "
            }`}
    >
        <div className="bg-[#2C2C2C] text-white relative h-1/2">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            {" "}
            <Link
              to="/viewall"
              onClick={onClose}
              className="text-4xl font-bold text-center font-raleway"
            >
              View All <br /> Interviews
            </Link>
          </div>
          <div>
            {" "}
            <button onClick={onClose} className="absolute right-5 top-5">
              <img src={cross} alt="Close Menu" className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-[#FF4B4B] flex items-center justify-center h-1/2">
          <Link
            to="/recommend"
            onClick={onClose}
            className="text-white text-4xl font-bold font-raleway"
          >
            Recommend a <br />
            Business Leader
          </Link>
        </div>
      </div>

  );
}

export default Menu;
