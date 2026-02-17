import React from 'react';
import Link from 'next/link';

const PythonCourse = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl text-center my-8 font-bold">Python Programming Course</h1>
      <div className="space-y-4">
        <Link href="/course/python/intro">
          <button className="w-full py-2 px-4 bg-blue-300 hover:bg-blue-400 rounded-lg">
            Intro to Python
          </button>
        </Link>
        <Link href="/course/python/advanced">
          <button className="w-full py-2 px-4 bg-blue-300 hover:bg-blue-400 rounded-lg">
            Advanced Python Concepts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PythonCourse;
