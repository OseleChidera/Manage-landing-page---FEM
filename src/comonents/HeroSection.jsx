import React from "react";
import HeroImg from "../images/illustration-intro.svg";
export default function HeroSection() {
  return (
    <section>
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 mb-16 md:space-y-0 md:flex-row md:justify-around">
        <div
          id="left"
          className="flex flex-col items-center space-y-12 md:w-1/2 md:max-w-md md:items-start"
        >
          <h1 class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring everyone together to build better products
          </h1>
          <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="bg-brightRed px-4 py-2 rounded-full pointer text-white capitalize  hover:bg-brightRedLight ">
            get started
          </button>
        </div>
        <div id="right" className="md:w-1/2 ">
          <img src={HeroImg} alt="hero-image" className="w-full" />
        </div>
      </div>
    </section>
  );
}
