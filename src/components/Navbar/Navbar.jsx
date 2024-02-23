import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { FiX } from "react-icons/fi";
import { CgMenuLeftAlt } from "react-icons/cg";
import { ThemeBtn } from "..";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const fadeDown = {
  open: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 1 } },
  closed: { opacity: 0, y: -70 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("home");
  const [scrollPosition, setScrollPosition] = useState(0);

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
              isOpen
                ? "bg-black"
                : scrollPosition > 0
                ? "bg-black/90"
                : "bg-black"
            }`}
          >
            <motion.div
              initial="closed"
              animate="open"
              variants={fadeDown}
              className="flex items-center justify-between w-full xl:justify-around "
            >
              <motion.div variants={fadeDown} className="md:hidden ">
                <Button
                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                  className="p-0 px-1 text-3xl text-white bg-transparent "
                >
                  {!isOpen ? (
                    <CgMenuLeftAlt className="hover:text-amber-400 hover:bg-transparent" />
                  ) : (
                    <FiX className="hover:text-amber-400 hover:bg-transparent" />
                  )}
                </Button>
              </motion.div>
              <motion.div variants={fadeDown}>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-65}
                  duration={500}
                  className="text-2xl font-semibold text-red-700 shadow-none cursor-pointer font-poppins"
                >
                  {"<"}
                  <span className="text-amber-400">VAIB</span>
                  <span className="text-white">HAV</span>
                  {"/>"}
                </Link>
              </motion.div>
              <motion.ul
                variants={fadeDown}
                className="flex space-x-2 md:space-x-10 font-mooli"
              >
                {nav.map((item) => (
                  <motion.li variants={fadeDown} key={item.id}>
                    <Link
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-65}
                      duration={500}
                      className={`${
                        isActive === item.link ? "text-amber-400" : "text-white"
                      } hidden p-0 py-2 cursor-pointer md:block hover:text-amber-400`}
                      onSetActive={() => setIsActive(item.link)}
                    >
                      {item.title}
                    </Link>
                  </motion.li>
                ))}

                <ThemeBtn variants={fadeDown} />
              </motion.ul>
            </motion.div>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden absolute top-16 w-1/2 z-20 text-center border-t border-b shadow-inner  transition-all ease-in-out duration-150 border-white/20 py-3 mb-3  h-screen bg-gray-700 bg-black/90`}
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
                className={`${
                  isActive === item.link ? "text-amber-400" : "text-white"
                } py-8  cursor-pointer hover:text-amber-400`}
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
