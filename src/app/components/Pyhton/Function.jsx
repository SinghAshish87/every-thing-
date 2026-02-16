import React from 'react';

const Functions = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Functions in Python</h2>
      <p>
        Functions in Python allow you to group related code into reusable blocks. You can define functions using the `def` keyword.
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg">
        {`# Example of a simple function
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")  # Output: Hello, Alice!`}
      </pre>
    </div>
  );
};

export default Functions;
