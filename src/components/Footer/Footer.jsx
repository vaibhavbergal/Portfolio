import React from "react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="py-8 text-center bg-black">
        <h1 className="text-4xl font-semibold text-red-600 font-mooli ">
          Let's Talk
        </h1>
        <div className="flex justify-center py-8 space-x-5 text-xl text-amber-300 md:text-3xl">
          <a
            href="https://api.whatsapp.com/send?phone=918669899671&text=Hello"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhav-bergal-04869421b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com/VaibhavBergal99"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110"
          >
            <FaXTwitter />
          </a>
        </div>

        <p className="pt-2 text-sm text-white border-t md:text-base font-ubuntu border-white/40">
          &copy; Copyright | Vaibhav 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
