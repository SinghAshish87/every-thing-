import React from 'react';

const Loops = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Loops in Python</h2>
      <p>
        Python provides two main types of loops: `for` loops and `while` loops. Loops allow you to repeat a block of code multiple times.
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg">
        {`# Example of a for loop
for i in range(5):
    print(i)

# Example of a while loop
count = 0
while count < 5:
    print(count)
    count += 1`}
      </pre>
    </div>
  );
};

export default Loops;
