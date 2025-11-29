import React from "react";
import { FaGlobe, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-10 relative border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
        {/* BRAND + DESCRIPTION */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-linear-to-r from-pink-400 via-purple-400 to-blue-400">
            Paradise
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            Enjoy world-class comfort, breathtaking nature, and unforgettable
            relaxation at Paradise Resort. Book your perfect getaway today.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <HashLink
                smooth
                to="/#home"
                className="hover:text-pink-400 transition"
              >
                Home
              </HashLink>
            </li>

            <li>
              <Link
                to="/booking"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-pink-400 transition"
              >
                Book Now
              </Link>
            </li>

            <li>
              <HashLink
                smooth
                to="/#services"
                className="hover:text-pink-400 transition"
              >
                Services
              </HashLink>
            </li>

            <li>
              <HashLink
                smooth
                to="/#gallery"
                className="hover:text-pink-400 transition"
              >
                Gallery
              </HashLink>
            </li>
          </ul>
        </div>

        {/* CONTACT  */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Contact</h3>

          <p className="text-gray-400 text-sm">Email: support@paradise.com</p>
          <p className="text-gray-400 text-sm">Phone: +91 98765 43210</p>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl mt-2">
            <a href="#" className="hover:text-pink-400 transition">
              <FaGlobe />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-400 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gray-800 mt-10"></div>

      <p className="text-center text-gray-500 text-xs mt-4">
        © {new Date().getFullYear()} Paradise Resort — All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
