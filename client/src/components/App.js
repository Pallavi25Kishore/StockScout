import React, { useState } from "react";
import Tiles from "./Tiles";
import ComparisonWindow from "./ComparisonWindow";
import ChatWindow from "./ChatWindow";
import Header from "./Header";
import LeftPanel from "./LeftPanel";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);

  const handleInput = (inputText) => {
    setQuery(inputText);
    setData(null)
  };

  const findStocks = async () => {

    try {
      const response = await fetch("http://localhost:5001/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="text-white min-h-screen flex flex-col bg-black">
      {/* Header */}
      <Header />

      {/* Main Content with Left Panel */}
      <div className="flex flex-grow">
        {/* Left Panel */}
        <LeftPanel />

        {/* Main Content */}
        <div className="flex-1 p-4">
          <ChatWindow handleInput={handleInput} findStocks={findStocks} />

          {/* Render Tiles */}
          <div className="w-full mt-6">
            <Tiles companies={data?.companies || []} />
          </div>

          {/* Render Comparison */}
          {data?.comparison && <ComparisonWindow comparison={data.comparison} />}
        </div>
      </div>
    </div>
  );
}

export default App;
