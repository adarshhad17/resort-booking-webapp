import React from "react";

import accommodationImg from "../../assets/Accommodation.jpg";
import adventureImg from "../../assets/Adventure.jpg";
import spaImg from "../../assets/Spa.jpg";

const Services = () => {
  const services = [
    {
      title: "Accommodation",
      desc: "Luxury rooms with stunning nature views.",
      bg: accommodationImg,
    },
    {
      title: "Adventure Activities",
      desc: "Trekking, water sports & thrilling experiences.",
      bg: adventureImg,
    },
    {
      title: "Wellness & Spa",
      desc: "Relaxation therapy, massage & wellness treatments.",
      bg: spaImg,
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-black text-white border-b border-gray-300/30
"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-4xl font-extrabold mb-12 tracking-wide 
          text-emerald-600"
        >
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden border border-gray-700
              shadow-lg hover:shadow-pink-500/40 hover:-translate-y-2 cursor-pointer
              transition-all duration-500"
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${item.bg})` }}
              ></div>

              <div className="absolute inset-0 bg-black/30"></div>

              <div className="relative p-10 text-center">
                <div className="mb-6 h-12"></div>

                <h3 className="text-2xl font-semibold mb-3 text-white/90">
                  {item.title}
                </h3>

                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
