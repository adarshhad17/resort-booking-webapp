import React from "react";
import Hero from "../../components/home/Hero";
import Services from "../../components/home/Services";
import Gallery from "../../components/home/Gallery";
import Contact from "../../components/home/Contact";

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />

      <Services/>

      <Gallery />

      <Contact />
    </div>
  );
};

export default Home;
