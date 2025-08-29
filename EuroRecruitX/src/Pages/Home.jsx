import React from "react";
import Hero from "../sections/Hero";
import Highlights from "../sections/Highlights";
import About from "../sections/About";
import Services from "../sections/Services";
import Industries from "../sections/Industries";
import JobSeekers from "../sections/JobSeekers";
import Employers from "../sections/Employers";

export default function Home(){
  return (
    <div>
      <Hero />
      <Highlights />
      <About />
      <Services />
      <Industries />
      <JobSeekers />
      <Employers />
    </div>
  );
}

