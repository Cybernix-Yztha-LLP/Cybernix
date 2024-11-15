//import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  rating: number;
}

const CourseCard = ({ title, description, image, rating }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-[4/3] relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-current text-yellow-400" />
            <span className="text-sm">{rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
        <button className="group flex items-center justify-between w-full bg-black text-white rounded-full px-6 py-3 hover:bg-gray-800 transition-colors">
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;