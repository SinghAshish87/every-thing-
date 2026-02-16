import React from 'react';
import Card from './components/Card'; // Importing the Card component
import './globals.css';

const Page = () => {
  // Data for different sections
  const sections = [
    {
      title: 'Web Development',
      headerColor: 'text-indigo-500', // Lighter color for header
      cards: [
        {
          title: 'React.js',
          imageUrl: '/images/react.png',
          link: '/course/react', // Link to the React course page
          header: 'Learn React.js',
          buttonType1: 5, // Soft Green
          buttonType2: 6, // Soft Purple
          iconType: 'react', // Icon for React
        },
        {
          title: 'Vue.js',
          imageUrl: '/images/vue.png', // Example image URL for Vue
          link: '/course/vue', // Link to the Vue course page
          header: 'Explore Vue.js',
          buttonType1: 1, // Soft Teal
          buttonType2: 2, // Soft Blue
          iconType: 'node', // Icon for Node.js
        },
        {
          title: 'Angular',
          imageUrl: '/images/angular.jpg',
          link: '/course/angular', // Link to the Angular course page
          header: 'Master Angular',
          buttonType1: 3, // Soft Coral
          buttonType2: 4, // Soft Yellow
          iconType: 'lightbulb', // Icon for Lightbulb (generic)
        },
      ],
    },
    {
      title: 'Backend Languages',
      headerColor: 'text-gray-600', // Soft Gray for header
      cards: [
        {
          title: 'Node.js',
          imageUrl: '/images/nodejs.png',
          link: '/course/node', // Link to the Node.js course page
          header: 'Node.js Basics',
          buttonType1: 2, // Soft Blue
          buttonType2: 3, // Soft Coral
          iconType: 'node', // Icon for Node.js
        },
        {
          title: 'Python',
          imageUrl: '/images/python.png',
          link: '/courses/Python', // Link to the Python course page
          header: 'Python for Backend',
          buttonType1: 4, // Soft Yellow
          buttonType2: 5, // Soft Green
          iconType: 'data', // Icon for Data Usage
        },
        {
          title: 'Go',
          imageUrl: '/images/go.jpg',
          link: '/course/go', // Link to the Go course page
          header: 'Go for Web Servers',
          buttonType1: 6, // Soft Purple
          buttonType2: 1, // Soft Teal
          iconType: 'react', // Icon for React (example)
        },
      ],
    },
    {
      title: 'Databases',
      headerColor: 'text-green-500', // Soft Green for header
      cards: [
        {
          title: 'MongoDB',
          imageUrl: '/images/mongo.png',
          link: '/course/mongo', // Link to the MongoDB course page
          header: 'Working with MongoDB',
          buttonType1: 1, // Soft Teal
          buttonType2: 2, // Soft Blue
          iconType: 'lightbulb', // Icon for Lightbulb
        },
        {
          title: 'PostgreSQL',
          imageUrl: '/images/postgres.jpg',
          link: '/course/postgres', // Link to the PostgreSQL course page
          header: 'PostgreSQL Basics',
          buttonType1: 3, // Soft Coral
          buttonType2: 4, // Soft Yellow
          iconType: 'data', // Icon for Data Usage
        },
        {
          title: 'MySQL',
          imageUrl: '/images/mysql.png',
          link: '/course/mysql', // Link to the MySQL course page
          header: 'MySQL Introduction',
          buttonType1: 5, // Soft Green
          buttonType2: 6, // Soft Purple
          iconType: 'node', // Icon for Node.js
        },
      ],
    },
    // Add more sections here if needed
  ];

  return (
    <div>
      <h1 className="text-4xl text-center my-8 font-bold">Welcome to the Development Hub</h1>
      <div className="container mx-auto py-8">
        {sections.map((section) => (
          <div key={section.title} className="mb-12">
            <h2 className={`text-3xl font-semibold mb-6 ${section.headerColor}`}>
              {section.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Render cards for each section */}
              {section.cards.map((data) => (
                <Card key={data.title} {...data} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
