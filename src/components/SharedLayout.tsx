import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import "../styles/SharedLayout.css";
import Navbar from "./Navbar";
import Home from "../views/Home";
import About from "../views/About";
import Projects from "../views/Projects";
import Contact from "../views/Contact";
import Footer from "./Footer";
import WorksTabs from "./WorksTab";

const SharedLayout = () => {
  const [sidebar, showSidebar] = useState(false);
  const [scrollUpBtn, setScrollUpBtn] = useState(false);

  useEffect(() => {
    const scrollEvent = () => {
      if (
        document.documentElement.scrollTop > 50 ||
        document.body.scrollTop > 50
      ) {
        setScrollUpBtn(true);
      } else {
        setScrollUpBtn(false);
      }
    };

    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [scrollUpBtn]);

  function scrollBackUp() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  return (
    <div className="flex flex-col gap-8 min-h-screen relative w-full font-sans">
      <nav
        id="home"
        className="flex items-center justify-center w-full min-h-[10vh] md:py-4 px-8 md:px-12"
      >
        <Navbar sidebar={sidebar} showSidebar={showSidebar} />
      </nav>

      <div className="flex items-center justify-center px-8 md:px-12 w-full">
        <div
          className={
            sidebar
              ? "flex flex-col gap-8 justify-between blur-lg transition-[all]"
              : "flex flex-col justify-between"
          }
        >
          <div className="flex items-start md:items-center justify-center min-h-[50vh] w-full">
            <Home />
          </div>

          <div
            id="about"
            className="flex items-center justify-start min-h-[50vh] md:min-h-[70vh] py-4 md:py-8 w-full"
          >
            <About />
          </div>

          <div id="experience" className="pt-12 w-full">
            <WorksTabs />
          </div>

          <div
            id="contact"
            className="flex items-center justify-center min-h-[80vh] relative w-full"
          >
            <Contact />
          </div>
        </div>
      </div>

      <footer className="w-full absolute bottom-0 px-2">
        <Footer />
      </footer>

      <div
        className={
          scrollUpBtn
            ? "fixed right-4 top-[85%] duration-300 ease-in-out z-50"
            : "fixed right-[-100%] top-[85%] duration-300 ease-in-out"
        }
      >
        <button
          title="Back Up"
          type="button"
          onClick={() => scrollBackUp()}
          className="p-2 md:p-4 rounded-md md:rounded-xl focus:outline-0 bg-black"
        >
          <ChevronUp
            className="scroll-up text-[20px] md:text-[32px] text-deepGrey"
          />
        </button>
      </div>
    </div>
  );
};

export default SharedLayout;
