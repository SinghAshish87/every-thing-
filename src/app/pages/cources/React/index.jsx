// /pages/course/react/index.jsx
import React from 'react';
import Link from 'next/link';

const ReactCourse = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl text-center my-8 font-bold">React.js Course</h1>
      <div className="space-y-4">
        <Link href="/course/react/intro">
          <button className="w-full py-2 px-4 bg-teal-300 hover:bg-teal-400 rounded-lg">
            Intro to React
          </button>
        </Link>
        <Link href="/course/react/hooks">
          <button className="w-full py-2 px-4 bg-teal-300 hover:bg-teal-400 rounded-lg">
            React Hooks
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReactCourse;
