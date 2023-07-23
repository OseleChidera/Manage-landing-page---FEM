import React, { useState } from "react";
import logo from "../images/logo.svg";
import Hamburger from "hamburger-react";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="relative -top-0 container mx-auto p-5">
      <div className="flex items-center justify-between items-center mb-6">
        <div className="">
          <img src={logo} />
        </div>
        <ul className="hidden space-x-6 capitalize cursor-default md:flex">
          <li className="list-none  hover:text-darkGrayishBlue ">pricing</li>
          <li className="list-none  hover:text-darkGrayishBlue">product</li>
          <li className="list-none  hover:text-darkGrayishBlue">about us</li>
          <li className="list-none  hover:text-darkGrayishBlue ">careers</li>
          <li className="list-none  hover:text-darkGrayishBlue">community</li>
        </ul>
        <button className="hidden bg-brightRed py-2 px-4 rounded-full pointer text-white capitalize hover:bg-brightRedLight md:block">
          get started
        </button>
        <div className="md:hidden" onClick={() => setOpen((isOpen) => !isOpen)}>
          <Hamburger direction="right" rounded />
        </div>
      </div>
      {isOpen ? <MobileMenu /> : ""}
    </nav>
  );
}

function MobileMenu() {
  return (
    <div
      id="mobile-menu"
      className="max-w-md  flex items-center space-y-6 bg-white p-6 text-center rounded-md"
    >
      <ul className="flex flex-col gap-6 capitalize cursor-default mx-auto">
        <li className="list-none  hover:text-darkGrayishBlue">pricing</li>
        <li className="list-none  hover:text-darkGrayishBlue">product</li>
        <li className="list-none  hover:text-darkGrayishBlue">about us</li>
        <li className="list-none  hover:text-darkGrayishBlue ">careers</li>
        <li className="list-none  hover:text-darkGrayishBlue">community</li>
      </ul>
    </div>
  );
}
