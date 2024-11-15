//import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    title: 'Trading for Beginners',
    description: 'Learn the fundamentals of trading',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Linux basics',
    description: 'Learn the fundamentals of Linux',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80',
    rating: 4.5,
  },
  // Add more courses as needed
];

const CourseList = () => {
  return (
    <div className="space-y-12">
      <h1 className="text-5xl font-bold">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;