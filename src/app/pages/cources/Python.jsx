import React, { useState } from 'react';
import Intro from '../../components/Python/Intro';
import Loops from '../../components/Python/Loops';
import Functions from '../../components/Python/Functions';
import Conditions from '../../components/Python/Conditions';

const Python = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl text-center my-8 font-bold">Python Programming</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        <button onClick={() => handleTopicClick('intro')} className="p-4 bg-indigo-500 text-white rounded-lg shadow-lg hover:bg-indigo-600 transition-all">
          Introduction to Python
        </button>
        <button onClick={() => handleTopicClick('loops')} className="p-4 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition-all">
          Loops in Python
        </button>
        <button onClick={() => handleTopicClick('functions')} className="p-4 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-all">
          Functions in Python
        </button>
        <button onClick={() => handleTopicClick('conditions')} className="p-4 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-all">
          Conditional Statements
        </button>
      </div>

      {/* Render topics dynamically */}
      <div>
        {selectedTopic === 'intro' && <Intro />}
        {selectedTopic === 'loops' && <Loops />}
        {selectedTopic === 'functions' && <Functions />}
        {selectedTopic === 'conditions' && <Conditions />}
      </div>
    </div>
  );
};

export default Python;
