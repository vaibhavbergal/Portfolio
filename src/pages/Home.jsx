import React from "react";
import { Navbar, Footer, Hero, Skill } from "../components/index";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skill />
      </main>
      <Footer />
    </>
  );
};

export default Home;
