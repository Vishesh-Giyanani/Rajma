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
      <div className="grid gap-2 lg:grid-cols-3 content-center">
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

      <div className="flex flex-wrap ">
        <div className="flex-auto">
          <img
            className="flex-shrink-0 m-32"
            src={require("../images/Smile.png")}
            alt="good"
          ></img>
        </div>
        <div className="flex-auto">
          <h2 className="text-5xl font-light leading-normal text-black mt-32 mb-11">
            We connect our customers
            <br /> with the best, and help them
            <br /> keep up-and stay open.
          </h2>
          <ul class="list-disc text-xl p-6">
            <li className="">
              <p className="text-2xl leading-loose">We connect our customers with the best.</p>
            </li>
            <li className="">
              <p className="text-2xl leading-loose">Advisor success customer launch party.</p>
            </li>
            <li className="">
              <p className="text-2xl leading-loose">Business-to-consumer long tail.</p>
            </li>
          </ul>
          <button className="text-xl text-white font-semibold mt-9 cursor-pointer bg-blue-800 rounded-3xl py-3 px-11 underline-offset-4 flex align-middle">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Second;
