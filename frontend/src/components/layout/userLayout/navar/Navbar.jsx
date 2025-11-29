import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import Logo from "../../../../assets/logo.png";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0A0A0A] text-white border-b border-gray-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-2 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} alt="Resort Logo" className="w-12 h-12" />
          <span
            className="text-2xl font-extrabold tracking-wide 
  bg-clip-text text-transparent 
  bg-linear-to-r from-pink-400 via-purple-400 to-blue-400"
          >
            Paradise Resort
          </span>
        </Link>

        <DesktopNavbar setOpen={setOpen} />

        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          <FiMenu />
        </button>

        {open && <MobileNavbar setOpen={setOpen} sidebarRef={sidebarRef} />}
      </div>
    </nav>
  );
};

export default Navbar;
