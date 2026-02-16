import React from 'react';
import Link from 'next/link';

const Card = ({ 
  title, 
  description, 
  imageUrl, 
  link, 
  header, 
  content, 
  buttonType1 = 1, // Default to Teal for button 1
  buttonType2 = 2, // Default to Blue for button 2
  cardSize = 'small' // Default size is 'small'
}) => {

  // Function to determine button styles based on buttonType
  const getButtonStyles = (type) => {
    switch (type) {
      case 1:
        return 'bg-teal-500 hover:bg-teal-600'; // Teal
      case 2:
        return 'bg-blue-500 hover:bg-blue-600'; // Blue
      case 3:
        return 'bg-red-500 hover:bg-red-600'; // Red
      case 4:
        return 'bg-yellow-500 hover:bg-yellow-600'; // Yellow
      case 5:
        return 'bg-green-500 hover:bg-green-600'; // Green
      case 6:
        return 'bg-purple-500 hover:bg-purple-600'; // Purple
      default:
        return 'bg-gray-500 hover:bg-gray-600'; // Default Gray
    }
  };

  // Function to get size styles based on card size
  const getCardStyles = (size) => {
    switch (size) {
      case 'small':
        return {
          cardWidth: 'max-w-xs',
          imageSize: 'w-16 sm:w-20 md:w-24',
          padding: 'p-4',
          titleSize: 'text-lg',
          textSize: 'text-sm',
          buttonPadding: 'py-1 px-3',
        };
      case 'medium':
        return {
          cardWidth: 'max-w-sm',
          imageSize: 'w-24 sm:w-28 md:w-32',
          padding: 'p-6',
          titleSize: 'text-xl',
          textSize: 'text-sm',
          buttonPadding: 'py-2 px-4',
        };
      case 'large':
        return {
          cardWidth: 'max-w-md',
          imageSize: 'w-32 sm:w-36 md:w-40',
          padding: 'p-8',
          titleSize: 'text-2xl',
          textSize: 'text-base',
          buttonPadding: 'py-2 px-5',
        };
      case 'extra-large':
        return {
          cardWidth: 'max-w-lg',
          imageSize: 'w-40 sm:w-48 md:w-56',
          padding: 'p-10',
          titleSize: 'text-3xl',
          textSize: 'text-base',
          buttonPadding: 'py-3 px-6',
        };
      case 'full-width':
        return {
          cardWidth: 'w-full',
          imageSize: 'w-full',
          padding: 'p-10',
          titleSize: 'text-4xl',
          textSize: 'text-lg',
          buttonPadding: 'py-4 px-8',
        };
      default:
        return {
          cardWidth: 'max-w-xs',
          imageSize: 'w-16 sm:w-20 md:w-24',
          padding: 'p-4',
          titleSize: 'text-lg',
          textSize: 'text-sm',
          buttonPadding: 'py-1 px-3',
        };
    }
  };

  // Get styles for the current card size
  const { cardWidth, imageSize, padding, titleSize, textSize, buttonPadding } = getCardStyles(cardSize);

  return (
    <div className={`${cardWidth} rounded-2xl overflow-hidden bg-gradient-to-r from-orange-100 via-rose-100 to-teal-100 shadow-xl transform hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out relative mx-auto`}>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-6 sm:space-y-0">
        
        {/* Image with margin */}
        <div className={`${imageSize} h-auto p-2`}>
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-3xl transform transition-all duration-300 hover:scale-105 hover:rotate-1"
          />
        </div>

        {/* Card Content */}
        <div className={`flex flex-col items-start ${padding} bg-white rounded-2xl space-y-2 w-full`}>
          {/* Header (H2 tag) */}
          <h2 className={`${titleSize} font-semibold text-gray-800 mb-2 hover:text-teal-600 transition-colors duration-200`}>
            {header}
          </h2>
          
          {/* Title */}
          <h3 className={`text-xl font-medium text-gray-800 mb-2 hover:text-teal-600 transition-colors duration-200 ${titleSize}`}>
            {title}
          </h3>

          {/* Description */}
          <p className={`text-gray-600 ${textSize} leading-relaxed mb-2`}>
            {description}
          </p>

          {/* Additional Content */}
          <div className="text-gray-600 text-xs leading-relaxed mb-3">
            {content}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0 mt-2 w-full">
            {/* First Button */}
            <button
              className={`text-white text-sm font-semibold ${buttonPadding} rounded-full transition-colors duration-200 w-full sm:w-auto ${getButtonStyles(buttonType1)}`}
            >
              View More
            </button>

            {/* Second Button */}
            <Link href={link}>
              <button
                className={`text-white text-sm font-semibold ${buttonPadding} rounded-full transition-colors duration-200 w-full sm:w-auto ${getButtonStyles(buttonType2)}`}
              >
                Go to Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
