import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export function CardComponent() {
  const posts = [
    {
      title: "Cool feature title",
      img: "./images/Cards/Card1.png",
    },
    {
      title: "Even cooler feature",
      img: "./images/Cards/Card1.png",
    },
    {
      title: "Cool feature title",
      img: "./images/Cards/Card1.png",
    },
  ];
  return (
    <>
      <div className="grid gap-2 lg:grid-cols-3 content-center	">
        {posts.map((items, key) => (
          <div className="w-full rounded-lg lg:max-w-sm" key={key}>
            <img
              className="object-cover w-[300px] h-[354px] rounded-lg ml-24"
              src={require("../images/Cards/Card1.png")}
              alt="imag"
            />

            <div className="p-4">
              <h4 className="text-3xl font-normal text-gray-100 mb-12 ml-24">
                {items.title}
              </h4>
              <button className="pr-20 text-2xl text-blue-100 font-semibold  ml-24 cursor-pointer underline underline-offset-4 flex align-middle">
                Explore Page <AiOutlineArrowRight className="ml-1 mb-14" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const Second = () => {
  return (
    <div>
      <div className="bg-blue-800">
        <p className="text-white text-2xl text-center pt-14">Our services</p>
        <h2 className="text-white text-5xl text-center mt-6 mb-24">
          Handshake infographic mass market
          <br /> crowdfunding iteration.
        </h2>
        <CardComponent />
      </div>
      <div className="flex">
      <img
            className="flex-shrink-0 m-32"
            src={require("../images/Smile.png")}
            alt="good"
          ></img>
          
      </div>
    </div>
  );
};

export default Second;
