//import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8">
        <span>Home</span>
        <span className="mx-2">{">"}</span>
        <span>About</span>
      </div>

      <h1 className="text-5xl font-bold mb-16">About Us</h1>
      <p className="text-lg text-gray-600 mb-8">
        Welcome to Cybernix! We are dedicated to providing cutting-edge courses
        and expert guidance in technology and digital innovation. Our mission is
        to empower individuals and organizations to unlock their potential and
        achieve their goals in the digital world.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        At Cybernix, we believe in the power of education and the importance of
        staying ahead in the ever-evolving tech landscape. Our team of
        experienced instructors and industry professionals are here to support
        you every step of the way.
      </p>
      <p className="text-lg text-gray-600">
        Join us on this exciting journey and transform your digital skills with
        Cybernix!
      </p>
    </div>
  );
};

export default AboutPage;
