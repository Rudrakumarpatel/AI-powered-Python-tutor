import React, { useState } from "react";

const ConfigureAPIKey = ({ setApiKey }) => {
  const [inputKey, setInputKey] = useState("");

  const handleSave = () => {
    setApiKey(inputKey);
    localStorage.setItem("apiKey", inputKey); // Save the key in localStorage
  };

  return (
    <div className="p-8">
      <h2 className="text-xl mb-4">Enter Your OpenAI API Key</h2>
      <input
        type="text"
        className="p-2 border rounded w-1/2"
        value={inputKey}
        onChange={(e) => setInputKey(e.target.value)}
        placeholder="Enter your API key"
      />
      <button
        className="ml-2 bg-blue-500 text-white p-2 rounded"
        onClick={handleSave}
      >
        Save API Key
      </button>
    </div>
  );
};

export default ConfigureAPIKey;
