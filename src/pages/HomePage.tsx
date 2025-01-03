//import React from 'react';
import Hero from '../components/Hero';
import ScrollBasedVelocityDemo from "../components/velocityscroll";
import TextRevealDemo from "../components/TextRevealDemo";
import TypingAnimationDemo from "../components/typing-text";
import Services from "../components/service-box";
import About from "../components/about ";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Hero />
      <TypingAnimationDemo />
      <Services />
      <TextRevealDemo />
      <About />
      <ScrollBasedVelocityDemo />
    </div>
  );
};

export default HomePage;