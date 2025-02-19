import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?team,company')" }}
      >
      </div>
      <div className="max-w-4xl mx-auto p-8 text-gray-700">
        <h2 className="text-3xl font-bold text-center mb-6">Who We Are</h2>
        <p className="text-lg leading-relaxed text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque, felis at eleifend pharetra, odio ligula suscipit magna,
          nec malesuada dolor dui nec ipsum. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>

        <h2 className="text-3xl font-bold text-center mt-10 mb-6">Our Mission</h2>
        <p className="text-lg leading-relaxed text-center">
          Our mission is to empower individuals and businesses by providing top-notch 
          solutions that drive success and innovation. We strive to create 
          an inclusive and forward-thinking environment that fosters growth.
        </p>

        <div className="flex justify-center mt-10">
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 transition">
            Contact Us
          </button>
        </div>
        <div className="flex justify-center mt-10">
        <p>
        @designed and developed by diwas
        </p>
        </div>
      </div>
    </>
  );
}

export default About;
