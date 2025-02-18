import logo from "../assets/SVG/mobilelogo.svg";
import arrow from "../assets/SVG/headarrow.svg";
import search from "../assets/SVG/search.svg";
import menu from "../assets/SVG/menu.svg";

import Menu from "../Components/Home/Menu";
import Search from "../Components/Home/Search";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

function Mobileheader() {
  const location = useLocation(); // Get current route
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Menu onClose={() => setIsMenuOpen(false)} isMenuOpen = {isMenuOpen} />
      <Search onClose={() => setIsSearchOpen(false)} isSearchOpen={isSearchOpen}/>
      <div className="bg-[#FF4B4B] w-full h-full block lg:hidden">
        <nav className="max-w-screen-2xl mx-auto bg-[#FF4B4B] px-5 sm:px-16">
          <div className="flex justify-between py-5">
          <div
              className="logo cursor-pointer"
              onClick={() => {
                if (location.pathname !== "/") {
                  navigate("/"); // Always go home when arrow is clicked.
                } else {
                  setIsMenuOpen(true); // Otherwise, open the menu.
                }
              }}
            >
              <img src={location.pathname === "/" ? menu : arrow} alt="icon" />
            </div>

            <Link to= "/" className="logo">
              <img src={logo} alt="Logo" />
            </Link>
            
            <div
              className="logo cursor-pointer"
              onClick={() => setIsSearchOpen(true)}
            >
              <img src={search} alt="Search" />
            </div>
          </div>
        </nav>
      

       
      </div>
    </>
  );
}

export default Mobileheader;
