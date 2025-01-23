import { ArrowRight } from "lucide-react";
import Button from "./Button";

const Hero = () => {
  return (
    <div>
      <div className="relative h-screen mt-24 mb-20 hidden lg:block">
        {/* Background shape */}
        <div className="absolute top-0 right-0 w-3/4 h-full bg-gray-100 rounded-l-[100px] -z-10" />

        {/* Video filling the center */}
        <div className="flex items-center justify-center h-full">
          <HeroVideo />
        </div>

        {/* Buttons */}
        <div className="absolute bottom-9 left-40">
          <Button variant="secondary" to="/courses" width="w-60">
            View Courses
          </Button>
        </div>
        <div className="absolute bottom-4 right-40">
          <Button variant="secondary" to="/join" width="w-96">
            Join Now
          </Button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="relative block lg:hidden">
        {/* Background shape */}
        <div className="absolute top-32 right-0 w-3/4 h-[600px] bg-gray-100 rounded-l-[100px] -z-10" />

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Cybernix
                </span>
              </h1>
            </div>
            <HeroVideo />
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" to="/courses">
                View Courses
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" to="/join">
                Join Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroVideo = () => (
  <div className="mask1">
    <video
      src="https://cdn.pixabay.com/video/2022/12/10/142363-780562112_large.mp4"
      autoPlay
      loop
      muted
      className="w-full h-full object-cover rounded-[40px] shadow-xl"
    >
      Your browser does not support the video tag.
    </video>
  </div>
);

export default Hero;
