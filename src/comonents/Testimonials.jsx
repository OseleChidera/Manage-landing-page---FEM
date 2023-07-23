import React from "react";
import anisha from "../images/avatar-anisha.png";
import ali from "../images/avatar-ali.png";
import richard from "../images/avatar-richard.png";
import shanai from "../images/avatar-shanai.png";
import simplifyMobile from "../images/bg-simplify-section-mobile.svg";
import simplify from "../images/bg-simplify-section-mobile.svg";

export default function Testimonials() {
  return (
    <section>
      <div
        id="testimonials section"
        className="container flex flex-col items-center mx-auto mb-12"
      >
        <h1 className="text-center text-4xl font-bold mb-20">
          Whats diferent about manage ?
        </h1>
        <div className="relative flex flex-col  mx-auto mb-6  md:flex-row md:space-x-6 md:text-center md:justify-between md:w-11/12">
          <div
            id="testimonial-item"
            className="flex flex-col items-center max-w-sm bg-veryLightGray p-10 rounded-lg  md:h-full"
          >
            <div className="reltive -mt-20 w-20 round-fully mb-3">
              <img src={anisha} alt="" />
            </div>
            <h1 className="capitalize text-lg font-bold mb-3">anisha Li</h1>
            <p className="max-w-sm text-darkGrayishBlue text-center md:max-w-sm">
              “Manage has supercharged our team\’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
          <div
            id="testimonial-item"
            className="hidden flex-col items-center bg-veryLightGray p-10 rounded-lg min-h-full max-h-96 md:flex md:max-w-xl "
          >
            <div className="reltive -mt-20 w-20 round-fully mb-3">
              <img src={ali} alt="" />
            </div>
            <h1 className="capitalize text-lg font-bold mb-3">Ali Bravo</h1>
            <p className="max-w-sm text-darkGrayishBlue text-center md:max-w-sm md:">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
          <div
            id="testimonial-item"
            className="hidden items-center bg-veryLightGray p-10 rounded-lg md:flex md: flex md:flex-col"
          >
            <div className="reltive -mt-20 w-20 round-fully mb-3">
              <img src={richard} alt="" />
            </div>
            <h1 className="capitalize text-lg font-bold mb-3">richard watts</h1>
            <p className="max-w-sm text-darkGrayishBlue text-center md:max-w-xs">
              “Manage has supercharged our team\’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
          <div
            id="testimonial-item"
            className="hidden items-center bg-veryLightGray p-10 rounded-lg md:flex md: flex md:flex-col"
          >
            <div className="reltive -mt-20 w-20 round-fully mb-3 ">
              <img src={shanai} alt="" />
            </div>
            <h1 className="capitalize text-lg font-bold mb-3">shanai gough</h1>
            <p className="max-w-sm text-darkGrayishBlue text-center md:max-w-xs">
              “Manage has supercharged our team\’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </div>
        <button className="bg-brightRed p-2 rounded-full pointer text-white capitalize mb-6">
          get started
        </button>
        <div id="indicator" className="flex space-x-3 md:hidden">
          <div className="rounded-full w-3 h-3 bg-veryLightGray border-2 border-brightRed"></div>
          <div className="rounded-full w-3 h-3 bg-brightRed border-2 border-brightRed"></div>
          <div className="rounded-full w-3 h-3 bg-veryLightGray border-2 border-brightRed"></div>
          <div className="rounded-full w-3 h-3 bg-veryLightGray border-2 border-brightRed"></div>
        </div>
      </div>
      <Simplify />
    </section>
  );
}

function Simplify() {
  return (
    <section>
      <div className="mx-auto container flex flex-col items-center space-y-12 w-full bg-brightRed  p-12 md:flex-row md:items-center md:justify-around  md:space-y-0">
        <h1 className="text-5xl text-bold text-white text-center leading-20 md:text-3xl md:max-w-sm md:text-left">
          Simplify how your team works today
        </h1>
        <button className="bg-veryLightGray px-4 py-2 rounded-full pointer text-brightRed capitalize  hover:bg-brightRedLight ">
          get started
        </button>
      </div>
    </section>
  );
}
