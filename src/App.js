import React from "react";
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Project from './components/projects/Project';
import Skills from './components/skills/Skills';
import Social_contacts from './components/social_contacts/Social_contacts';





const App = () => {
  return (
    <>
      <Nav/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Social_contacts/>
    </>
  );
};

export default App;
