import React from "react";
import NeuralNetwork from "../components/NeuralNetwork";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import EducationCertifications from "../components/EducationCertifications";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
 
export default function Home() {
  return (
    <>
      {/* Neural Network as fixed background */}
      <NeuralNetwork />
      
      {/* Main content with higher z-index */}
      <div className="relative" style={{ zIndex: 10 }}>
        <HeroSection />
        <Skills />
        <Projects />
        <EducationCertifications />
        <Experience />
        <Contact />
      </div>
    </>
  );
}
