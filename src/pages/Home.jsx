import React from "react";
import { Navbar, Footer, Hero } from "../components/index";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default Home;
