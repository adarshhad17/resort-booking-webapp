import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import heroImg from "../../assets/Hero.jpg"; 

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {/* FIXED: overlay no longer blocks button */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-[#0c6169] to-[#ff007f]/15 pointer-events-none"></div>

      <div className="relative z-10 px-8 text-center text-white max-w-3xl">

        <h1
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-snug
          drop-shadow-[0_3px_8px_rgba(0,0,0,0.5)]"
        >
          Welcome to <br /> 
          <span className="text-pink-500">Paradise Resort</span>
        </h1>

        <p
          className="text-lg md:text-2xl mb-10 font-light text-gray-200 leading-relaxed
          drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]"
        >
          Experience luxury, comfort & nature like never before.
        </p>

        <Link
          to="/booking"
          className="
            group inline-flex items-center gap-3
            px-10 py-3 text-lg font-semibold rounded-lg
            border border-white/40 text-pink-500
            backdrop-blur-sm
            hover:border-pink-500
            transition-all duration-300
            hover:shadow-lg
          "
        >
          Book Now
          <FiArrowRight className="text-pink-500 text-xl transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

      </div>
    </section>
  );
};

export default Hero;
