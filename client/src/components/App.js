import React, { useState, useEffect} from "react";
import Tiles from "./Tiles";
import ComparisonWindow from "./ComparisonWindow";
import ChatWindow from "./ChatWindow";
import Header from "./Header";
import LeftPanel from "./LeftPanel";
import TradingViewWidget from "./TradingViewWidget"

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);

  const handleInput = (inputText) => {
    setQuery(inputText);
    setData(null)
  };

  useEffect(() => {
      findStocks();
  }, [query]);

  const findStocks = async () => {

    try {
      // for local env use http://localhost:5001/api/chat
      const response = await fetch("https://stockscout.onrender.com/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const result = await response.json();
      setData(result);
      console.log(result);
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
        <div className="flex-1 p-6">
          <ChatWindow handleInput={handleInput} findStocks={findStocks} />

          {/* Render Tiles */}
          <div className="w-full mt-6">
            <Tiles companies={data?.companies || []} />
          </div>

          {/* Render Comparison */}
          {data?.comparison && <ComparisonWindow comparison={data.comparison} />}
          {/*Graphs*/}
          {data?.companies && <TradingViewWidget companies={data.companies}/>}
        </div>


      </div>
    </div>
  );
}

export default App;
