import React, { useState } from "react";

const Homework = ({ setMessages }) => {
  const [homeworkResponse, setHomeworkResponse] = useState("");

  const submitHomework = () => {
    setMessages(prevMessages => [
      ...prevMessages,
      { text: "Great job! Here's your homework assignment:", user: false },
      { text: "Write a Python function that adds two numbers.", user: false },
      { text: "Your code should look like this:", user: false },
      { text: `def add_numbers(a, b):\n    return a + b`, user: false },
      { text: "Good luck!", user: false },
    ]);
    setHomeworkResponse("");
  };

  return (
    <div className="p-8">
      <h2 className="text-xl mb-4">Python Homework Assignment</h2>
      <p>Here's your homework assignment!</p>
      <p>Write a Python function that adds two numbers. Example:</p>
      <pre>
        <code>
          def add_numbers(a, b):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;return a + b
        </code>
      </pre>
      <button
        className="mt-4 bg-blue-500 text-white p-2 rounded"
        onClick={submitHomework}
      >
        Submit Homework
      </button>
    </div>
  );
};

export default Homework;
