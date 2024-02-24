import React, { useRef } from "react";
import { Container } from "./index";
import JS from "../assets/javascript.svg";
import ReactIcon from "../assets/react.svg";
import Sass from "../assets/sass.svg";
import RTK from "../assets/RTK.svg";
import HTML from "../assets/html.svg";
import Bootstrap from "../assets/bootstrap.svg";
import Tailwind from "../assets/tailwind.svg";
import CSS from "../assets/css.svg";
import { motion } from "framer-motion";

const fadeUp = {
  open: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 1 } },
  closed: { opacity: 0, y: 60 },
};
const ZoomIn = {
  open: {
    opacity: 1,
    scale: 1,
    transition: { staggerChildren: 0.2, duration: 1 },
  },
  closed: { opacity: 0, scale: 0.6 },
};

const Skill = () => {
  const scrollRef = useRef(null);

  const skills = [
    { id: 1, title: "HTML", img: HTML },
    { id: 2, title: "CSS", img: CSS },
    { id: 3, title: "JavaScript", img: JS },
    { id: 4, title: "React", img: ReactIcon },
    { id: 5, title: "Sass", img: Sass },
    { id: 6, title: "Bootstrap", img: Bootstrap },
    { id: 7, title: "Tailwind CSS", img: Tailwind },
    { id: 8, title: "Redux ToolKit", img: RTK },
  ];

  return (
    <>
      <div>
        <Container id="skills" ref={scrollRef} className="py-2">
          <motion.h1
            initial="closed"
            whileInView="open"
            viewport={{ root: scrollRef }}
            variants={fadeUp}
            className="py-1 text-2xl font-bold text-gray-400 md:py-2 md:text-4xl font-mooli"
          >
            Tech Stack
          </motion.h1>
          <hr className="border-black/30 dark:border-white/30" />

          <motion.ul
            initial="closed"
            whileInView="open"
            viewport={{ root: scrollRef }}
            variants={ZoomIn}
            className="flex flex-wrap justify-center gap-5 my-5 mt-8 md:mt-14"
          >
            {skills.map((item) => (
              <motion.li
                variants={ZoomIn}
                key={item.id}
                className="flex items-center gap-3 p-2 px-3 font-mono font-semibold bg-gray-400 border-2 border-blue-600 rounded-lg shadow-lg cursor-pointer shadow-black/50 dark:text-white dark:border-red-600 dark:bg-black md:text-lg dark:even:border-purple-600 hover:scale-105"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-8 mix-blend-multiply dark:mix-blend-normal"
                />
                <p>{item.title}</p>
              </motion.li>
            ))}
          </motion.ul>
        </Container>
      </div>
    </>
  );
};

export default Skill;
