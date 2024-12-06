import React, { useState } from "react";

function ChatWindow({ handleInput, findStocks }) {
  const [inputText, setInputText] = useState("");

  const onSubmit = () => {
    handleInput(inputText); // Pass input to App's handler
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Input Section with Button */}
      <div className="w-full md:w-2/3 mt-6 relative">
        <textarea
          className="w-full h-32 p-4 text-gray-100 rounded-md resize-none"
          style={{
            background: "linear-gradient(to left, #4D194D, #3E1F47, #312244, #272640)",
          }}
          placeholder="Enter description of the kinds of stock you are looking for..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        {/* Button Section */}
        <button
          onClick={onSubmit}
          disabled={!inputText.trim()} // Disable if no input
          className={`absolute bottom-4 right-2 px-6 py-2 rounded-md ${
            inputText.trim()
              ? "bg-[#272640] hover:bg-[#006466] cursor-pointer"
              : "bg-gray-500 cursor-not-allowed"
          }`}
        >
          Find Top 8 Stocks!
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
