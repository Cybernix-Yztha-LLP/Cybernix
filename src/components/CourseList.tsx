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
  {
    id: 3,
    title: 'Web Development',
    description: 'Master modern web development',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80',
    rating: 4.7,
  },
  {
    id: 4,
    title: 'Data Science',
    description: 'Explore the world of data analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    rating: 4.6,
  }
];

const CourseList = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Our Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;