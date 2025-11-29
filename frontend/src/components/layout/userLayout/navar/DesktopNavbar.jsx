import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const DesktopNavbar = () => {
  const { hash } = useLocation();

  const activeStyle = "text-teal-300 font-semibold";
  const normalStyle = "text-gray-400 hover:text-white";

  return (
    <div className="hidden md:flex gap-8 lg:gap-10 text-base lg:text-lg items-center font-medium tracking-wide">

      {/* HOME */}
      <HashLink
        smooth
        to="/#home"
        className={hash === "#home" ? activeStyle : normalStyle}
      >
        Home
      </HashLink>

      {/* BOOK NOW */}
      <NavLink
        to="/booking"
        onClick={() => window.scrollTo(0, 0)}
        className={({ isActive }) =>
          isActive ? activeStyle : normalStyle
        }
      >
        Book Now
      </NavLink>

      {/* SERVICES */}
      <HashLink
        smooth
        to="/#services"
        className={hash === "#services" ? activeStyle : normalStyle}
      >
        Our Services
      </HashLink>

      {/* GALLERY */}
      <HashLink
        smooth
        to="/#gallery"
        className={hash === "#gallery" ? activeStyle : normalStyle}
      >
        Gallery
      </HashLink>

      {/* CONTACT */}
      <HashLink
        smooth
        to="/#contact"
        className={hash === "#contact" ? activeStyle : normalStyle}
      >
        Contact
      </HashLink>
    </div>
  );
};

export default DesktopNavbar;
