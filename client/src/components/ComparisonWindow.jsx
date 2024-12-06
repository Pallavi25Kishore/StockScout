import React from "react";

function ComparisonWindow({ comparison }) {
  return (
    <div className="w-full mt-6 p-4 rounded-md shadow-md"
    style={{
      background: "linear-gradient(to left, #4D194D, #3E1F47, #312244, #272640)",
    }}>
      <h2 className="text-lg font-bold">ANALYSIS</h2>
      <p className="mt-2 text-gray-300">{comparison}</p>
    </div>
  );
}

export default ComparisonWindow;
