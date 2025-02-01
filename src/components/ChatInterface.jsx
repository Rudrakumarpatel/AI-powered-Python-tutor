import React, { useState } from "react";
import axios from "axios";

const ChatInterface = ({ apiKey }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, user: true }]);
      setLoading(true);
      try {
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions", // New endpoint for Chat models
          {
            model: "gpt-3.5-turbo", // Updated model
            messages: [
              { role: "system", content: "You are a helpful Python tutor." },
              { role: "user", content: message }
            ],
            max_tokens: 150,
            temperature: 0.7
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        setMessages([
          ...messages,
          { text: message, user: true },
          { text: response.data.choices[0].message.content, user: false },
        ]);
      } catch (error) {
        console.error("Error fetching AI response:", error);
      }
      setMessage("");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-4 shadow-lg rounded w-2/3">
        <div className="mb-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-2 mb-2 rounded ${msg.user ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            className="p-2 border rounded w-3/4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask a question about Python!"
          />
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={sendMessage}
            disabled={loading}
          >
            {loading ? "Thinking..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;