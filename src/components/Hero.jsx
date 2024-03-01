import React, { useRef } from "react";
import myImg from "@/assets/img/person.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaDownload } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const fadeUp = {
  open: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 1 } },
  closed: { opacity: 0, y: 100 },
};

const ZoomIn = {
  open: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: 0.5 },
  },
  closed: { opacity: 0, scale: 0.6 },
};

const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="flex flex-col shadow-lg  dark:shadow-md shadow-black/30 mb-10 relative items-center py-5 sm:px-3 md:px-10 md:flex-row-reverse md:h-[92vh] dark:from-black dark:to-black bg-gradient-to-tr from-blue-400 to-blue-200"
      >
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          loading="lazy"
          className="absolute z-0 hidden object-cover w-full h-full dark:block opacity-10"
        />

        <motion.div
          initial="closed"
          animate="open"
          variants={ZoomIn}
          className="flex z-10 gap-2 sm:gap-5 lg:gap-8 md:w-1/2 md:pr-3 lg:w-[40%]"
        >
          <motion.img
            variants={ZoomIn}
            src={myImg}
            alt="Vaibhav Img"
            loading="lazy"
            className="h-[50vh] sm:h-[65vh] lg:h-[75vh] bg-blue-600 rounded-2xl "
          />
          <motion.ul
            variants={ZoomIn}
            className="flex flex-col justify-around text-xl dark:text-white sm:text-2xl"
          >
            <a
              href="https://github.com/vaibhavbergal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border rounded-full cursor-pointer border-black/40 dark:border-white/10 hover:scale-105"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhav-bergal-04869421b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border rounded-full cursor-pointer border-black/40 dark:border-white/10 hover:scale-105"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com/VaibhavBergal99"
              loading="lazy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border rounded-full cursor-pointer border-black/40 dark:border-white/10 hover:scale-105"
            >
              <FaXTwitter />
            </a>
          </motion.ul>
        </motion.div>
        <motion.div
          initial="closed"
          animate="open"
          variants={fadeUp}
          className="py-2 z-10 mt-5 text-center md:mt-0 md:text-left md:w-1/2 lg:w-[60%] "
        >
          <motion.h1
            variants={fadeUp}
            className="font-mono text-3xl font-bold dark:text-white md:leading-snug md:text-4xl lg:text-5xl"
          >
            Hello, I'm <span className="text-red-600">Vaibhav</span>
            <br />
            Bergal
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-2xl lg:mt-8 lg:text-3xl md:mt-5 text-amber-500 font-ubuntu "
          >
            Frontend Developer
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="https://drive.google.com/file/d/1Yn4QNAg6LhBz6hJsBwMBSz2IneXxiniG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="mt-3 text-lg text-white transition-all border-none lg:mt-8 md:mt-5 bg-amber-400 hover:scale-105 hover:bg-amber-500 hover:text-white font-poppins"
              >
                Resume <FaDownload className="ml-2" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
