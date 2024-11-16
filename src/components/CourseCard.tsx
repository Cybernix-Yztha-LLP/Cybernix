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
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="aspect-video relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-medium">{title}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-current text-yellow-400" />
            <span className="text-sm">{rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button className="group flex items-center text-sm font-medium">
          Learn more
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;