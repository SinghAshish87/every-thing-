// /pages/course/node/index.jsx
import React from 'react';
import Link from 'next/link';

const NodeCourse = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl text-center my-8 font-bold">Node.js Course</h1>
      <div className="space-y-4">
        <Link href="/course/node/intro">
          <button className="w-full py-2 px-4 bg-green-300 hover:bg-green-400 rounded-lg">
            Intro to Node.js
          </button>
        </Link>
        <Link href="/course/node/express">
          <button className="w-full py-2 px-4 bg-green-300 hover:bg-green-400 rounded-lg">
            Express.js Basics
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NodeCourse;
