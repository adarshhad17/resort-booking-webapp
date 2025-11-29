import React from "react";

import img1 from "../../assets/image1.jpg";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.jpg";
import img4 from "../../assets/image4.jpg";
import img5 from "../../assets/image5.jpg";
import img6 from "../../assets/image6.jpg";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-20 
      bg-linear-to-b from-black via-[#050505] to-[#000000]"


    >
      <div className="absolute inset-0 bg-linear-to-b from-black via-[#0c6169] to-[#ff007f]/15"></div>

      <div className="relative max-w-6xl mx-auto px-4">

        <h2
          className="text-4xl font-extrabold text-center mb-12 tracking-wide
            text-emerald-600"
        >
          Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((url, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow-xl shadow-blue-900/30">
              <img
                src={url}
                alt="Resort"
                className="w-full h-64 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
