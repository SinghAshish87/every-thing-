// import React from 'react';
// import Link from 'next/link';

// const Index = () => {
//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-4xl text-center my-8 font-bold">Welcome to the Programming Courses</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         <Link href="/course/python">
//           <button className="p-4 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all">
//             Python
//           </button>
//         </Link>
//         <Link href="/course/react">
//           <button className="p-4 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition-all">
//             React.js
//           </button>
//         </Link>
//         <Link href="/course/node">
//           <button className="p-4 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-all">
//             Node.js
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Index;






// /pages/index.jsx
import React from 'react';
import Link from 'next/link';

const Index = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl text-center my-8 font-bold">Welcome to the Programming Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Link href="/course/python">
          <button className="p-4 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all">
            Python
          </button>
        </Link>
        <Link href="/course/react">
          <button className="p-4 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition-all">
            React.js
          </button>
        </Link>
        <Link href="/course/node">
          <button className="p-4 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-all">
            Node.js
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
