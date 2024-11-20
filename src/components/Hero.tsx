import { ArrowRight } from "lucide-react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="relative h-screen mt-24 mb-20">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gray-100 rounded-l-[100px] -z-10" />

      {/* Image filling the center */}
      <div className="flex items-center justify-center h-full">
        <HeroImage />
      </div>

      {/* Buttons */}
      <div className="absolute bottom-9 left-40">
        <Button variant="secondary" to="/courses">
          View Courses
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
      <div className="absolute bottom-3 right-60">
        <Button variant="secondary" to="/join">
          Join Now
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

const HeroImage = () => (
  <div className="mask1">
    <img
      src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?auto=format&fit=crop&q=80"
      alt="Digital Learning"
      className="w-full h-full object-cover rounded-[40px] shadow-xl"
    />
  </div>
);

export default Hero;
