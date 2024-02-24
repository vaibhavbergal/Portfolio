import React, { useRef } from "react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const fadeUp = {
  open: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 1 } },
  closed: { opacity: 0, y: 70 },
};

const ZoomIn = {
  open: {
    opacity: 1,
    scale: 1,
    transition: { staggerChildren: 0.3, duration: 1 },
  },
  closed: { opacity: 0, scale: 0.6 },
};

const Footer = () => {
  const scrollRef = useRef(null);

  return (
    <footer ref={scrollRef}>
      <div className="py-8 text-center bg-black">
        <motion.h1
          initial="closed"
          whileInView="open"
          variants={fadeUp}
          className="text-4xl font-semibold text-red-600 font-mooli "
        >
          <span className="text-white">Let's</span> Talk
        </motion.h1>
        <motion.div
          initial="closed"
          whileInView="open"
          variants={ZoomIn}
          className="flex justify-center py-8 space-x-5 text-xl text-amber-300 md:text-3xl"
        >
          <motion.a
            variants={ZoomIn}
            href="https://api.whatsapp.com/send?phone=918669899671&text=Hello"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110"
          >
            <FaWhatsapp />
          </motion.a>
          <motion.a
            variants={ZoomIn}
            href="https://www.linkedin.com/in/vaibhav-bergal-04869421b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110"
          >
            <FaLinkedinIn />
          </motion.a>
          <motion.a
            variants={ZoomIn}
            href="https://twitter.com/VaibhavBergal99"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110"
          >
            <FaXTwitter />
          </motion.a>
        </motion.div>

        <p className="pt-2 text-sm text-white border-t md:text-base font-ubuntu border-white/40">
          &copy; Copyright | Vaibhav 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
