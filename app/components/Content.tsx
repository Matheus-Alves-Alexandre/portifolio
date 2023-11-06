import React from "react";
import Hero from "./Hero";
import About from "./About";
import Resume from "./Resume";
import Services from "./Services";
import Skills from "./Skills";

const Content = () => {
  return (
    <div>
      <Hero />
      <About />
      <Resume />
      <Services />
      <Skills />
      {/*<Portifolio/>
        <Testimonials/>
        <Contact/> */}
    </div>
  );
};

export default Content;
