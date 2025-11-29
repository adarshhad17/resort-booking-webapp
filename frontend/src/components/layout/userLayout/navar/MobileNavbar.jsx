import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FiX } from "react-icons/fi";
import Logo from "../../../../assets/logo.png";
import React from "react";

const MobileNavbar = ({ setOpen, sidebarRef }) => {
  const { hash } = useLocation();

  const activeStyle = "text-teal-300 font-bold";
  const normalStyle = "text-gray-300 hover:text-white";

  return (
    <div
      ref={sidebarRef}
      className="
        fixed top-0 right-0 h-full w-64 bg-black
        shadow-2xl border-l border-gray-700
        md:hidden transition-transform duration-300 z-50
        flex flex-col
      "
    >
      <div className="flex justify-between items-center p-6 border-b border-gray-700">
       <HashLink
  to="/#home"
  onClick={() => setOpen(false)}
  className="flex items-center gap-3"
>
  <img src={Logo} alt="logo" className="w-8 h-8 rounded-md" />

  <span
    className="
      text-base font-extrabold tracking-wide 
      bg-clip-text text-transparent 
      bg-linear-to-r from-pink-400 via-purple-400 to-blue-400
    "
  >
    Paradise
  </span>
</HashLink>


        <button
          onClick={() => setOpen(false)}
          className="text-2xl text-gray-300 hover:text-white"
        >
          <FiX />
        </button>
      </div>

      <div className="flex flex-col gap-6 px-6 py-6 text-lg">
        <HashLink
          smooth
          to="/#home"
          onClick={() => setOpen(false)}
          className={hash === "#home" ? activeStyle : normalStyle}
        >
          Home
        </HashLink>

        <NavLink
          to="/booking"
          onClick={() => {
            window.scrollTo(0, 0);
            setOpen(false);
          }}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          Book Now
        </NavLink>

        <HashLink
          smooth
          to="/#services"
          onClick={() => setOpen(false)}
          className={hash === "#services" ? activeStyle : normalStyle}
        >
          Our Services
        </HashLink>

        <HashLink
          smooth
          to="/#gallery"
          onClick={() => setOpen(false)}
          className={hash === "#gallery" ? activeStyle : normalStyle}
        >
          Gallery
        </HashLink>

        <HashLink
          smooth
          to="/#contact"
          onClick={() => setOpen(false)}
          className={hash === "#contact" ? activeStyle : normalStyle}
        >
          Contact
        </HashLink>
      </div>
    </div>
  );
};

export default MobileNavbar;
