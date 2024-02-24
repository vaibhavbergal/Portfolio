import React, { useRef, useEffect } from "react";
import {
  Navbar,
  Footer,
  Hero,
  Contact,
  Skill,
  Projects,
} from "../components/index";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skill />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
