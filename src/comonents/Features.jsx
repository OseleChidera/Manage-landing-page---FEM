import React from "react";

export default function Features() {
  return (
    <>
      <div className="container flex flex-col mx-auto p-y-6 mb-16 md:flex-row md:ga-6 "
      >
        <div
          id="left"
          className="flex flex-col  mb-6  items-center md:w-1/2 md:mb-0">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-4xl font-bold  text-center capitalize mb-6 md:max-w-md md:text-left md:mb-8 md:text-5xl">
              whats different about manage?
            </h2>
            <p className=" max-w-sm text-center text-darkGrayishBlue md:text-left md:text-lg md:">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
            </p>
          </div>
        </div>

        <div id="right" className="flex flex-col text-left md:w-1/2 md:gap-8 ">
          {/* ====================================================================================================================================== */}
          <div className="flex flex-col mb-8 ">
            <div id="feature" className="md:flex gap-6 ">

              {/* while his appears on screens smaller than 768px */}
              <div className="flex items-center rounded-l-full bg-brightRedLight mb-2 md:hidden">
                <span className="bg-brightRed px-5 py-2 rounded-full pointer text-white capitalize mr-6 h-fit">
                  01
                </span>
                <h3 className="font-bold capitalize md:hidden">
                  track company wide progress
                </h3>
              </div>

              {/* while his appears on screens higher than 768px */}
              <span className="hidden bg-brightRed px-5 py-2 rounded-full pointer text-white capitalize h-fit md:block ">
                01
              </span>
              <div id="left" className="text-left flex flex-col text-left items-center md:text-left md:items-start">
                <h3 className="hidden font-bold capitalize mb-1 md:block ">
                  track company wide progress
                </h3>
                <p className="text-darkGrayishBlue max-w-sm">
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way down
                  to the smallest of details. Never lose sight of the bigger
                  picture
                </p>
              </div>
            </div>
          </div>
          {/* ====================================================================================================================================== */}
          <div className="flex flex-col mb-8">
            <div id="feature" className="md:flex gap-6 ">

              {/* while his appears on screens smaller than 768px */}
              <div className="flex items-center rounded-l-full bg-brightRedLight mb-2 md:hidden">
                <span className="bg-brightRed px-5 py-2 rounded-full pointer text-white capitalize mr-6 h-fit">
                  02
                </span>
                <h3 className="font-bold capitalize md:hidden">
                  Advanced built-in reports
                </h3>
              </div>

              {/* while his appears on screens higher than 768px */}
              <span className="hidden bg-brightRed px-5 py-2 rounded-full pointer text-white capitalize h-fit md:block ">
                02
              </span>

              <div id="left" className="text-left flex flex-col text-left items-center md:text-left md:items-start" >
                <h3 className="hidden font-bold capitalize mb-1 md:block ">
                  Advanced built-in reports
                </h3>
                <p className="text-darkGrayishBlue max-w-sm">
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
            </div>
          </div>
          {/* ====================================================================================================================================== */}
          <div className="flex flex-col mb-8">
            <div id="feature" className="md:flex gap-6 ">

              {/* this secion only appears on screens less than 768px */}
              <div  className="flex items-center rounded-l-full bg-brightRedLight mb-2 md:hidden">
                <span className="bg-brightRed px-5 py-2 rounded-full pointer text-white capitalize mr-6 h-fit">
                  03
                </span>
                <h3 className="font-bold capitalize md:hidden">
                  Everything you need in one place
                </h3>
              </div>
              {/* while his appears on screens higher than 768px */}
              <span className="hidden bg-brightRed px-5 py-2 rounded-full pointer text-white capitalize h-fit md:block ">
                03
              </span>
              <div id="left" className="text-left flex flex-col text-left items-center md:text-left md:items-start">
                <h3 className="hidden font-bold capitalize mb-1 md:block ">
                  Everything you need in one place
                </h3>
                <p className="text-darkGrayishBlue max-w-sm">
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </div>
          </div>
          {/* ====================================================================================================================================== */}

        </div>
      </div>
    </>
  );
}
