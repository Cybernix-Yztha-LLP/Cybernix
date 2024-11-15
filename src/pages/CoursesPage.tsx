//import React from 'react';
import CourseList from '../components/CourseList';
import Breadcrumb from '../components/Breadcrumb';

const CoursesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Courses' }]} />
      <CourseList />
    </div>
  );
};

export default CoursesPage;