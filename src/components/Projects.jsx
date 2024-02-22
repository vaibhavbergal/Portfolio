import React from "react";
import CC from "../assets/img/cc.png";
import Devify from "../assets/img/Devify.png";
import TODO from "../assets/img/ToDo.png";
import { Container } from "./index";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";

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
      title: "TODO List",
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
      <Container className="pt-5 md:py-5">
        <h1 className="py-1 text-2xl font-bold text-gray-400 border-b md:py-2 dark:border-white/30 border-black/30 md:text-4xl font-mooli">
          Projects
        </h1>
        <ul className="flex flex-wrap justify-center gap-5 my-5">
          {projects.map((item) => (
            <CardContainer key={item.id} className="inter-var w-96 h-72">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {item.title}
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={item.img}
                    className="object-cover w-full h-64 rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex items-center justify-between mt-10">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 text-xs font-normal rounded-xl dark:text-white"
                  >
                    Live →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 text-xs font-bold text-white bg-black rounded-xl dark:bg-white dark:text-black"
                  >
                    Code
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default Projects;
