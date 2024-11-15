//import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

const Hero = () => {
  return (
    <div className="relative">
      {/* Background shape */}
      <div className="absolute top-32 right-0 w-3/4 h-[600px] bg-gray-100 rounded-l-[100px] -z-10" />
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl font-bold leading-tight">
              Transform your digital journey with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Cybernix
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Unlock your potential with cutting-edge courses and expert guidance in technology and digital innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="/courses">
                View courses
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" href="/join">
                Join now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

const HeroImage = () => (
  <div className="relative aspect-square">
    <img
      src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?auto=format&fit=crop&q=80"
      alt="Digital Learning"
      className="w-full h-full object-cover rounded-[40px] shadow-xl"
    />
  </div>
);

export default Hero;