import React, { useState } from "react";
import "./nav.css";

const Nav = () => {
  const [activeState, setActiveState] = useState("#home");
  return (
    <nav>
      <a href="#home" className={activeState === "#home" ? "active" : ""} onClick={() => setActiveState("#home")}>
        Home
      </a>
      <a href="#about" className={activeState === "#about" ? "active" : ""} onClick={() => setActiveState("#about")}>
        About
      </a>
      <a href="#skills" className={activeState === "#skills" ? "active" : ""} onClick={() => setActiveState("#skills")}>
        Skills
      </a>
      <a href="#projects" className={activeState === "#projects" ? "active" : ""} onClick={() => setActiveState("#projects")}>
        Projects
      </a>
      <a href="#contact" className={activeState === "#contact" ? "active" : ""} onClick={() => setActiveState("#contact")}>
        Contact Me
      </a>
    </nav>
  );
};

export default Nav;
