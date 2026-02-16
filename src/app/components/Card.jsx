import React from "react";
import Link from "next/link"; // Importing Link from Next.js
import { FaReact, FaNodeJs } from "react-icons/fa"; // Importing Font Awesome icons
import { MdDataUsage } from "react-icons/md"; // Importing Material Design icons
import { HiOutlineLightBulb } from "react-icons/hi"; // Importing Heroicons
import Image from 'next/image'; // Import Image from next/image for optimization

const Card = ({ title, imageUrl, link, header, buttonType1, buttonType2, iconType }) => {
  // Function to determine button styles based on buttonType
  const getButtonStyles = (type) => {
    switch (type) {
      case 1:
        return "bg-teal-300 hover:bg-teal-400"; // Soft Teal
      case 2:
        return "bg-blue-300 hover:bg-blue-400"; // Soft Blue
      case 3:
        return "bg-orange-300 hover:bg-orange-400"; // Soft Coral
      case 4:
        return "bg-yellow-300 hover:bg-yellow-400"; // Soft Yellow
      case 5:
        return "bg-green-300 hover:bg-green-400"; // Soft Green
      case 6:
        return "bg-purple-300 hover:bg-purple-400"; // Soft Purple
      default:
        return "bg-gray-300 hover:bg-gray-400"; // Soft Gray
    }
  };

  // Choose the icon based on iconType
  const getIcon = () => {
    switch (iconType) {
      case "react":
        return <FaReact className="w-6 h-6 text-teal-500" />;
      case "node":
        return <FaNodeJs className="w-6 h-6 text-green-500" />;
      case "data":
        return <MdDataUsage className="w-6 h-6 text-blue-500" />;
      case "lightbulb":
        return <HiOutlineLightBulb className="w-6 h-6 text-yellow-500" />;
      default:
        return <FaReact className="w-6 h-6 text-teal-500" />;
    }
  };

  return (
    <div className="max-w-sm h-auto bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between space-y-4 p-4">
        {/* Icon Section */}
        <div className="w-full sm:w-1/4 flex justify-center">
          {getIcon()} {/* Displaying Icon */}
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-1/2">
          <Image
            src={imageUrl}
            alt={title}
            width={500} // Specify the width and height
            height={500}
            className="w-full h-full object-cover rounded-2xl transform transition-all duration-300 hover:scale-105"
          />
        </div>

        {/* Header Section */}
        <div className="flex flex-col items-start sm:w-1/2 p-4 bg-white rounded-2xl space-y-2">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-teal-600 transition-colors duration-200">
            {header}
          </h2>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0 mt-4 p-4">
        <button
          className={`text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200 w-full sm:w-auto ${getButtonStyles(buttonType1)}`}
        >
          PROJECTS
        </button>
        <Link href={link}>
          <button
            className={`text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200 w-full sm:w-auto ${getButtonStyles(buttonType2)}`}
          >
            LEARN
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
