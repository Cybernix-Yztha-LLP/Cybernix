//import React from 'react';
import About from "../components/about ";
const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8">
        <span>Home</span>
        <span className="mx-2">{">"}</span>
        <span>About</span>
      </div>
      <About />
    </div>
    

  );
};

export default AboutPage;
