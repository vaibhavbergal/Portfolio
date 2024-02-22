import React, { useState } from "react";
import { Button } from "../ui/button";
import { FiX } from "react-icons/fi";
import { CgMenuRightAlt } from "react-icons/cg";
import { ThemeBtn } from "..";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const nav = ["Home", "Skills", "Projects", "Contact"];

  return (
    <>
      <nav className="sticky top-0 z-30 ">
        <div className="relative ">
          <div className="flex items-center h-16 gap-3 px-3 text-white bg-black shadow-lg md:px-10 ">
            <div className="flex items-center justify-between w-full xl:justify-around ">
              <Button className="text-2xl font-semibold text-red-700 bg-transparent font-poppins hover:bg-black">
                {"<"}
                <span className="text-amber-400">VAIB</span>
                <span className="text-white">HAV</span>
                {"/>"}
              </Button>
              <ul className="flex space-x-2 md:space-x-10 font-mooli">
                {nav.map((item) => (
                  <li
                    key={item}
                    className="hidden py-2 cursor-pointer md:block hover:text-amber-400"
                  >
                    {item}
                  </li>
                ))}
                <li className="">
                  <ThemeBtn />
                </li>
                <li>
                  <Button
                    onClick={toggleNavbar}
                    className="p-0 px-1 text-3xl bg-transparent dark:text-white md:hidden hover:bg-black"
                  >
                    {!isOpen ? <CgMenuRightAlt /> : <FiX />}
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "top-16" : "-top-48"
          } md:hidden absolute  z-20 text-center w-full border-t border-b shadow-inner  transition-all ease-in-out duration-150 border-white/20 py-3 mb-3   bg-neutral-900`}
        >
          <ul className="text-center text-white capitalize font-mooli">
            {nav.map((item) => (
              <li
                key={item}
                className="py-2 cursor-pointer hover:text-amber-400"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
