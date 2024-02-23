import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { FiX } from "react-icons/fi";
import { CgMenuRightAlt } from "react-icons/cg";
import { ThemeBtn } from "..";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("home");
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const nav = [
    { id: 1, title: "Home", link: "home" },
    { id: 2, title: "Skills", link: "skills" },
    { id: 3, title: "Projects", link: "projects" },
    { id: 4, title: "Contact", link: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`sticky top-0 z-30  `}>
        <div className="relative ">
          <div
            className={`flex items-center h-16 gap-3 px-3 text-white shadow-lg  md:px-10 ${
              scrollPosition > 0 ? "bg-black/90" : "bg-black"
            }  `}
          >
            <div className="flex items-center justify-between w-full xl:justify-around ">
              <Button className="text-2xl font-semibold text-red-700 bg-transparent shadow-none font-poppins hover:bg-black">
                {"<"}
                <span className="text-amber-400">VAIB</span>
                <span className="text-white">HAV</span>
                {"/>"}
              </Button>
              <ul className="flex space-x-2 md:space-x-10 font-mooli">
                {nav.map((item) => (
                  <Link
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-65}
                    duration={500}
                    key={item.id}
                    className={`${
                      isActive === item.link ? "text-amber-400" : "text-white"
                    } hidden p-0 py-2 cursor-pointer md:block hover:text-amber-400`}
                    onSetActive={() => setIsActive(item.link)}
                  >
                    {item.title}
                  </Link>
                ))}
                <li>
                  <ThemeBtn />
                </li>
                <li>
                  <Button
                    onClick={toggleNavbar}
                    className="p-0 px-1 text-3xl bg-transparent dark:text-white md:hidden "
                  >
                    {!isOpen ? (
                      <CgMenuRightAlt className="hover:text-amber-400 hover:bg-transparent" />
                    ) : (
                      <FiX className="hover:text-amber-400 hover:bg-transparent" />
                    )}
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
          <ul className="flex flex-col text-white capitalize font-mooli">
            {nav.map((item) => (
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
                key={item.id}
                className="py-2 cursor-pointer hover:text-amber-400"
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
