// src/pages/Page.jsx
import React from 'react'
import Card from './components/Card'
import './globals.css';

const Page = () => {
  // Updated content for each card
  const cardData = [
    {
      title: 'Beautiful Landscape',
      description: 'A scenic view of the mountains with a beautiful sunset.',
      imageUrl: './Images/lining.png',

    },
    {
      title: 'City Life',
      description: 'A bustling city with vibrant nightlife and modern architecture.',
      imageUrl: 'https://source.unsplash.com/300x200/?city',
    },
    {
      title: 'Ocean Breeze',
      description: 'Relaxing by the beach with the sound of the waves crashing.',
      imageUrl: 'https://source.unsplash.com/300x200/?ocean',
    },
    {
      title: 'Forest Adventure',
      description: 'Exploring dense woods with towering trees and peaceful silence.',
      imageUrl: 'https://source.unsplash.com/300x200/?forest',
    },
    {
      title: 'Desert Oasis',
      description: 'A peaceful oasis in the middle of a vast desert.',
      imageUrl: 'https://source.unsplash.com/300x200/?desert',
    },
    {
      title: 'Mountain Peak',
      description: 'Climbing the highest peak to watch the sunrise over the valley.',
      imageUrl: 'https://source.unsplash.com/300x200/?mountain',
    },
    {
      title: 'Autumn Forest',
      description: 'A vibrant forest with colorful leaves in the fall season.',
      imageUrl: 'https://source.unsplash.com/300x200/?autumn',
    },
    {
      title: 'Rainy Day',
      description: 'A peaceful view of the world on a rainy day with droplets on the window.',
      imageUrl: 'https://source.unsplash.com/300x200/?rain',
    },
    {
      title: 'Snowy Mountains',
      description: 'A serene winter landscape with snow-covered peaks.',
      imageUrl: 'https://source.unsplash.com/300x200/?snow',
    },
    {
      title: 'Tropical Paradise',
      description: 'A secluded beach with crystal-clear water and palm trees swaying.',
      imageUrl: 'https://source.unsplash.com/300x200/?tropical',
    },
    {
      title: 'Night Sky',
      description: 'Stargazing under the clear night sky with a view of the Milky Way.',
      imageUrl: 'https://source.unsplash.com/300x200/?night-sky',
    },
    {
      title: 'Lavender Fields',
      description: 'Walking through vast lavender fields during sunset.',
      imageUrl: 'https://source.unsplash.com/300x200/?lavender',
    },
    {
      title: 'Rolling Hills',
      description: 'Driving through rolling hills with lush green fields and blue skies.',
      imageUrl: 'https://source.unsplash.com/300x200/?hills',
    },
  ];

  // Define the headers you want to insert after every group of cards
  const headers = [
    "This is the Web Development Course",
    "This is the Software Development Course",
    "This is the Mobile Development Course",
    "This is the Data Science Course"
  ];

  
  // Function to chunk the cardData array into groups of 4 cards
  const chunkCards = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const cardChunks = chunkCards(cardData, 3);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div className="container mx-auto py-8">
        {/* Loop through each chunk of cards */}
        {cardChunks.map((chunk, index) => (
          <div key={index} className="my-8">
            {/* Insert the header with unique classes for animation */}
            <h2 className={`header-text header-text${index + 1}`}>
              {headers[index]}
            </h2>

            {/* Cards will be here */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {chunk.map((data, i) => (
                <Card
                  key={i}
                  title={data.title}
                  description={data.description}
                  imageUrl={data.imageUrl}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;