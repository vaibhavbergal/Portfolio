import React from "react";
import { Navbar, Footer, Hero, Skill, Projects } from "../components/index";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <Skill />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default Home;
