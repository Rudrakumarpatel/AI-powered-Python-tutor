import React, { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import ChatInterface from "./components/ChatInterface";
import ConfigureAPIKey from "./components/ConfigureAPIKey";

function App() {
  const [apiKey, setApiKey] = useState(localStorage.getItem("apiKey"));

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {!apiKey ? (
        <ConfigureAPIKey setApiKey={setApiKey} />
      ) : (
        <div>
          <HomePage />
          <ChatInterface apiKey={apiKey} />
        </div>
      )}
    </div>
  );
}

export default App;
