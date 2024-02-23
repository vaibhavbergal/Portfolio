import React, { useRef } from "react";
import CC from "../assets/img/cc.png";
import Devify from "../assets/img/Devify.png";
import TODO from "../assets/img/ToDo.png";
import { Container } from "./index";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import { Button } from "./ui/button";
import { FaArrowRight, FaCode } from "react-icons/fa6";
import { useScroll, motion, useTransform } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: "",
    offset: ["-1 1", "2 6.8"],
    layoutEffect: true,
  });
  // const scaleProgress = useTransform(scrollYProgress, [2, 1], [1, 1]);

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
      <motion.div
        ref={ref}
        style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      >
        <Container id="projects" className="pt-5 md:py-5">
          <h1 className="py-1 text-2xl font-bold text-gray-400 border-b md:py-2 dark:border-white/30 border-black/30 md:text-4xl font-mooli">
            Projects
          </h1>
          <ul className="flex flex-wrap justify-center gap-5 my-10">
            {projects.map((item) => (
              <CardContainer key={item.id} className="py-2 inter-var">
                <CardBody className="bg-rose-50 relative group/card shadow-inner  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black lg:w-[450px] dark:border-white/[0.2] border-black/[0.1] w-80 sm:w-96 sm:h-fit h-auto rounded-xl px-6 py-4 border  ">
                  <CardItem
                    translateZ="30"
                    className="text-xl font-bold dark:text-white"
                  >
                    {item.title}
                  </CardItem>

                  <CardItem translateZ="60" className="w-full mt-4">
                    <img
                      src={item.img}
                      className="object-cover w-full rounded-xl dark:border group-hover/card:shadow-xl"
                      alt="thumbnail"
                      loading="lazy"
                    />
                  </CardItem>
                  <div className="flex items-center justify-between mt-4 text-white font-mooli">
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="inline-flex animate-shimmer py-1 items-center justify-center rounded-md border border-slate-800 hover:scale-105 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Live <FaArrowRight className="ml-2 text-sm" />
                      </button>
                    </a>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="tracking-widest transition-all text- dark:border-none bg-amber-400 hover:scale-105 hover:bg-amber-500 hover:text-white"
                      >
                        <span className="mr-2 text-lg text-black ">
                          <FaCode />
                        </span>{" "}
                        Code
                      </Button>
                    </a>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </ul>
        </Container>
      </motion.div>
    </>
  );
};

export default Projects;
