import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-row-reverse">
      <img
        className="flex-shrink-0 w-[440px] h-[377px] m-9"
        src={require("../images/Hero.png")}
        alt="good"
      ></img>
      <div className="flex-shrink-0 w-3/5 mx-2">
        <h1 className="text-5xl text-black my-7 font-light mt-16">
          Save time by building fast<br></br> with Boldo Template{" "}
        </h1>
        <p className="text-md font-normal text-gray-500 mb-14">
          Funding handshake buyer business-to-business metrics iPad partnership.
          First<br></br> mover advantage innovator success deployment
          non-disclosure.
        </p>
        <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-3xl mr-6">
          Buy Service
        </button>{" "}
        <button className="bg-transparent text-blue-800 hover:text-blue-700 font-bold py-3 px-12 rounded-3xl border border-blue-800 hover:border-blue-700">
          Explore
        </button>
        <div className="flex mt-9  ">
          <img
            className="flex-shrink-0 m-32"
            src={require("../images/logos.png")}
            alt="good"
          ></img>
        </div>
      </div>
    </div>
    
  );
};

export default Hero;
