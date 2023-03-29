import React from "react";

const Hero = () => {
  return (
    <div>
      <div>
        <h1 className=" text-4xl text-black">
          Save time by building fast with Boldo Template{" "}
        </h1>
        <p className=" text-sm text-gray-400">
          Save time by building fast with Boldo Template{" "}
        </p>
      </div>
      <div>
        <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl mr-5">
          Buy Service
        </button>{" "}
        <button className="bg-transparent text-blue-800 hover:text-blue-700 font-bold py-2 px-4 rounded-2xl border border-blue-800 hover:border-blue-700">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Hero;
