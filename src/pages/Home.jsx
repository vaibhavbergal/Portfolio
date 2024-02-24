import React, { useRef, useEffect } from "react";
import {
  Navbar,
  Footer,
  Hero,
  Contact,
  Skill,
  Projects,
} from "../components/index";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true, // Enable smooth scrolling
      // Add more options as needed
    });

    // Clean up function to destroy LocomotiveScroll instance
    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <div style={{ minHeight: "100vh" }} ref={scrollRef}>
      <Navbar />
      <main>
        <Hero />
        <Skill />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
