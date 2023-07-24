import React from "react";
import facebook from "../images/icon-facebook.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import Logo from "../images/logo.svg";

export default function Footer() {
  return (
    <section>
      <footer className="container flex flex-col items-center mx-auto bg-black text-veryLightGray p-12 md:flex-row-reverse md:items-start md:justify-between md:max-w-full" >
        <div id="input-copywright">
          <div className="inline-flex space-x-6 mb-12 md:max-w-sm">
            <input
              type="text"
              name="update"
              id=""
              placeholder="Updates in your inbox ..."
              className="rounded-full px-6 py-3 text-black"
            />
            <button className="font-bold text-white px-8 py-2 rounded-full pointer bg-brightRed capitalize  hover:bg-brightRedLight ">
              go
            </button>
          </div>
          <div class="hidden text-darkGrayishBlue md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
        <div id="footer-columns" className="flex space-x-24 justify-around mb-10">
          <div id="left-column" className="">
            <ul className="flex flex-col gap-6 capitalize cursor-default mx-auto">
              <li className="list-none  hover:text-darkGrayishBlue">Home</li>
              <li className="list-none  hover:text-darkGrayishBlue">pricing</li>
              <li className="list-none  hover:text-darkGrayishBlue ">products</li>
              <li className="list-none  hover:text-darkGrayishBlue">about us</li>
            </ul>
          </div>
          <div id="right-column" className="">
            <ul className="flex flex-col gap-6 capitalize cursor-default mx-auto">
              <li className="list-none  hover:text-darkGrayishBlue">careers</li>
              <li className="list-none  hover:text-darkGrayishBlue">community</li>
              <li className="list-none  hover:text-darkGrayishBlue ">
                privacy policy
              </li>
            </ul>
          </div>
        </div>
        <div id="manage-icons">
          <div
            id="social-icons"
            className="inline-flex flex-row items-center space-x-12 mb-12"
          >
            <div className="">
              <img src={facebook} alt="" className="w-15 aspect-square pointer" />
            </div>
            <div className="facebook">
              <img
                src={youtube}
                alt="youtube"
                className="w-15 aspect-square cursor-pointer"
              />
            </div>
            <div className="">
              <img
                src={twitter}
                alt="twitter"
                className="w-15 aspect-square cursor-pointer"
              />
            </div>
            <div className="">
              <img
                src={pinterest}
                alt="pinterest"
                className="w-15 aspect-square cursor-pointer"
              />
            </div>
            <div className="">
              <img
                src={instagram}
                alt="instagram"
                className="w-15 aspect-square cursor-pointer"
              />
            </div>
          </div>
          <div id="logo-div" className="mb-8">
            <img src={Logo} alt="" className="w-full " />
          </div>
        </div>
        <div class="block text-darkGrayishBlue md:hidden">
          Copyright &copy; 2022, All Rights Reserved
        </div>
      </footer>
    </section>
  );
}
