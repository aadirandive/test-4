import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Artform from "./components/Artform";
import Contact from "./components/Contact";
import { IconArrowUp } from "@tabler/icons-react";
import Bglmg from "./components/Bglmg";
import "./App.css";

const App: React.FC = () => {
  const [activeContent, setActiveContent] = useState<string>("about");

  const handleContentChange = (content: string) => {
    setActiveContent(content);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollButton = document.getElementById("btn-back-to-top");
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrollButton!.style.display = "block";
      } else {
        scrollButton!.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <Navbar onContentChange={handleContentChange} />
      <div>
        <br />
        <br />
        <br />
      </div>
      <div className="content-container">
        <Projects active={activeContent === "projects"} />
        <div>
          <br />
          <br />
          <br />
        </div>

        <Bglmg active={activeContent === "bglmg"} />
        <div>
          <br />
          <br />
          <br />
        </div>

        <About active={activeContent === "about"} />
        <div>
          <br />
          <br />
          <br />
        </div>

        <Artform active={activeContent === "art-form"} />
        <div>
          <br />
          <br />
          <br />
        </div>

        <Contact active={activeContent === "contact"} />
      </div>
      <button
        id="btn-back-to-top"
        className="scroll-to-top"
        onClick={handleScrollToTop}
      >
        <IconArrowUp size="1rem" className="scroll-to-top-icon" />
      </button>
    </>
  );
};

export default App;
