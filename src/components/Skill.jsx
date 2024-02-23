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

const Skill = () => {
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
      <Container id="skills" className="py-2">
        <h1 className="py-1 text-2xl font-bold text-gray-400 border-b md:py-2 dark:border-white/30 border-black/30 md:text-4xl font-mooli">
          Tech Stack
        </h1>
        <ul className="flex flex-wrap justify-center gap-5 my-5 mt-8 md:mt-14">
          {skills.map((item) => {
            return (
              <li
                key={item.id}
                className="flex items-center gap-3 p-2 px-3 font-mono font-medium text-white border-2 border-red-600 rounded-lg cursor-pointer bg-black/85 dark:bg-black md:text-lg odd:border-purple-600 hover:scale-105"
              >
                <img src={item.img} alt={item.title} className="w-8" />
                <p>{item.title}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </>
  );
};

export default Skill;
