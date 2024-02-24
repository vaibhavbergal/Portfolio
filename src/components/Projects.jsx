import React, { useEffect } from "react";
import CC from "../assets/img/cc.png";
import Devify from "../assets/img/Devify.png";
import TODO from "../assets/img/ToDo.png";
import { Container, ProjectCard } from "./index";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Devify",
      img: Devify,
      link: "https://github.com/vaibhavbergal/Devify.git",
      live: "https://devify9.vercel.app/",
    },
    {
      id: 2,
      title: "ToDo List",
      img: TODO,
      link: "https://github.com/vaibhavbergal/To-Do-App.git",
      live: "https://to-do-app-vert-three.vercel.app/",
    },
    {
      id: 3,
      title: "Currency Converter",
      img: CC,
      link: "https://github.com/vaibhavbergal/Currency-Convertor.git",
      live: "https://currency-convertor-two-pi.vercel.app/",
    },
  ];

  return (
    <>
      <div>
        <Container id="projects" className="pt-5 md:py-5">
          <h1 className="py-1 text-2xl font-bold text-gray-400 border-b md:py-2 dark:border-white/30 border-black/30 md:text-4xl font-mooli">
            Projects
          </h1>
          <ul className="flex flex-wrap justify-center gap-5 my-10">
            <ProjectCard projects={projects} />
          </ul>
        </Container>
      </div>
    </>
  );
};

export default Projects;
