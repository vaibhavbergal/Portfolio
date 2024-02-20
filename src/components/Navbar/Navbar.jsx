import React, { useState } from "react";
import { Button } from "../ui/button";
import { FiX } from "react-icons/fi";
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const nav = ["Home", "Skills", "Projects", "Contact"];

  return (
    <>
      <div className="sticky top-0 z-10 mb-10 ">
        <div className="flex items-center h-16 gap-3 px-3 text-white bg-black shadow-lg md:px-10 ">
          <div className="flex items-center justify-between w-full ">
            <Button className="text-2xl font-semibold text-red-700 bg-transparent font-poppins">
              {"<"}
              <span className="text-amber-400">VAIB</span>
              <span className="text-white">HAV</span>
              {"/>"}
            </Button>
            <ul className="hidden space-x-10 md:flex font-mooli">
              {nav.map((item) => (
                <li
                  key={item}
                  className="py-2 cursor-pointer hover:text-amber-400"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Button
              onClick={toggleNavbar}
              className="p-0 px-1 text-3xl bg-transparent md:hidden hover:bg-black"
            >
              {!isOpen ? <CgMenuRightAlt /> : <FiX />}
            </Button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden border-t border-b shadow-inner transition-all ease-in-out border-white/20 py-3 mb-3   bg-neutral-900`}
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
      </div>
    </>
  );
};

export default Navbar;
