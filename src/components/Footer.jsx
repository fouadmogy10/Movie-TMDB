import { AiFillDribbbleCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#020c1b] shadow ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-center">
          <div className="text-center">
            <ul className="flex flex-wrap items-center justify-center mb-6 text-sm  text-white  sm:mb-0 md:text-[20px] font-semibold">
              <li>
                <a aria-label="Read more about Seminole tax hike"
                  href="!#"
                  className="mr-4 text-white transition-all duration-500 hover:text-hover md:mr-6 "
                >
                  About
                </a>
              </li>
              <li>
                <a aria-label="Read more about Seminole tax hike"
                  href="!#"
                  className="mr-4 text-white transition-all duration-500 hover:text-hover md:mr-6"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a aria-label="Read more about Seminole tax hike"
                  href="!#"
                  className="mr-4 text-white transition-all duration-500 hover:text-hover md:mr-6 "
                >
                  Licensing
                </a>
              </li>
              <li>
                <a aria-label="Read more about Seminole tax hike"
                  href="!#"
                  className="text-white transition-all duration-500 hover:text-hover"
                >
                  Contact
                </a>
              </li>
            </ul>
            <p className="text-[#7b8188] lg:w-8/12 sm:w-10/12 mx-auto text-[12px] md:text-[14px] my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
        <hr
          className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
          size={20}
        />

        <div className="flex mt-4 space-x-5 justify-center sm:mt-0 flex-wrap">
          <a aria-label="Read more about Seminole tax hike"
            href="!#"
            className="md:mb-0 mb-3 text-white hover:text-hover hover:shadow-[0px_0px_20px_5px_#da2f68] bg-primary md:p-3  rounded-full transition-all
              duration-500 dark:hover:text-white"
          >
            <CgFacebook size={20} />
          </a>
          <a aria-label="Read more about Seminole tax hike"
            href="!#"
            className="md:mb-0 mb-3 text-white hover:text-hover hover:shadow-[0px_0px_20px_5px_#da2f68] bg-primary md:p-3  rounded-full hover: transition-all
              duration-500 dark:hover:text-white"
          >
            <BsDiscord size={20} />
          </a>
          <a aria-label="Read more about Seminole tax hike"
            href="!#"
            className="md:mb-0 mb-3 text-white hover:text-hover hover:shadow-[0px_0px_20px_5px_#da2f68] bg-primary md:p-3  rounded-full hover: transition-all
              duration-500 dark:hover:text-white"
          >
            <AiOutlineTwitter size={20} />
          </a>
          <a aria-label="Read more about Seminole tax hike"
            href="!#"
            className="md:mb-0 mb-3 text-white hover:text-hover hover:shadow-[0px_0px_20px_5px_#da2f68] bg-primary md:p-3  rounded-full hover: transition-all
              duration-500 dark:hover:text-white"
          >
            <AiFillGithub size={20} />
          </a>
          <a aria-label="Read more about Seminole tax hike"
            href="!#"
            className="md:mb-0 mb-3 text-white hover:text-hover hover:shadow-[0px_0px_20px_5px_#da2f68] bg-primary md:p-3  rounded-full hover: transition-all
              duration-500 dark:hover:text-white"
          >
            <AiFillDribbbleCircle size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
