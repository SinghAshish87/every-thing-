// src/components/Card.jsx
import React from 'react';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-xs rounded-2xl overflow-hidden bg-gradient-to-r from-orange-100 via-rose-100 to-teal-100 shadow-xl transform hover:scale-102 hover:shadow-lg transition-all duration-300 ease-in-out relative">
      
      {/* Badge for Featured or New */}
      <div className="absolute top-4 left-4 bg-teal-500 text-white text-xs font-semibold py-1 px-3 rounded-full shadow-md">
        Featured
      </div>

      {/* Full Image with Object Cover */}
      <div className="relative w-full h-56">
        <img
          src={imageUrl} // Image URL passed as a prop
          alt={title}
          className="w-full h-full object-cover rounded-t-2xl transform transition-all duration-300 hover:scale-105 hover:rotate-1"
        />
      </div>

      {/* Card Content */}
      <div className="p-6 bg-white rounded-b-2xl">
        {/* Title with Soft Hover Color */}
        <h3 className="text-2xl font-medium text-gray-800 mb-3 hover:text-teal-600 transition-colors duration-200">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed">
          {description}
        </p>

        {/* Action Button */}
        <button className="mt-4 bg-teal-500 text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-teal-600 transition-colors duration-200">
          View More
        </button>
      </div>
    </div>
  );
};

export default Card;
