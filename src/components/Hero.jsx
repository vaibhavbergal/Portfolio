import React from "react";
import myImg from "@/assets/img/person.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaDownload } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col shadow-lg  dark:shadow-md shadow-black/30 mb-10  items-center py-5 sm:px-3 md:px-10 md:flex-row-reverse bg-gradient-to-tr md:h-[85vh] dark:from-blue-300 dark:to-green-300 from-green-200 to-blue-200">
        <div className="flex gap-2 sm:gap-5 lg:gap-8 md:w-1/2 md:pr-3 lg:w-[40%]">
          <img
            src={myImg}
            alt="Vaibhav Img"
            loading="lazy"
            className="h-[50vh] sm:h-[65vh] lg:h-[75vh] border bg-blue-600 rounded-2xl "
          />
          <ul className="flex flex-col justify-around text-xl dark:text-black sm:text-2xl">
            <a
              href="https://github.com/vaibhavbergal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border rounded-full cursor-pointer border-black/30 hover:scale-105"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhav-bergal-04869421b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border rounded-full cursor-pointer border-black/30 hover:scale-105"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com/VaibhavBergal99"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border rounded-full cursor-pointer border-black/30 hover:scale-105"
            >
              <FaXTwitter />
            </a>
          </ul>
        </div>
        <div className="py-2 mt-5 text-center md:mt-0 md:text-left md:w-1/2 lg:w-[60%] ">
          <h1 className="font-mono text-3xl font-bold dark:text-black md:leading-snug md:text-4xl lg:text-5xl">
            Hello, I'm <span className="text-red-600">Vaibhav</span>
            <br /> Bergal
          </h1>
          <p className="mt-3 text-2xl lg:mt-8 lg:text-3xl md:mt-5 text-amber-500 font-ubuntu ">
            Frontend Developer
          </p>
          <Button
            variant="outline"
            className="mt-3 text-lg text-white transition-all dark:border-none lg:mt-8 md:mt-5 bg-amber-400 hover:scale-105 hover:bg-amber-500 hover:text-white font-poppins"
          >
            Resume <FaDownload className="ml-2" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Hero;
