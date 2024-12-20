import React from "react";
import TypingEffect from "react-typing-effect";

function Header() {
  return (
    <header className="text-white p-4 flex items-center justify-between shadow-md" style={{background: "#272640"}}>
      {/* Logo and App Name */}
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 bg-[#212F45] rounded-full flex items-center justify-center">
          <span className="text-lg font-bold">$S</span>
        </div>
        <h1 className="text-3xl font-bold">StockScout </h1>
        <TypingEffect
          text={["An AI-powered platform for stock exploration"]}
          speed={200}
          eraseSpeed={50}
          eraseDelay={1000}
          typingDelay={500}
          className="italic text-sm"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6">
        <a
          href="https://finance.yahoo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#006466]"
        >
          Yahoo Finance
        </a>
        <a
          href="https://www.cnbc.com/stocks/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#006466]"
        >
          CNBC Stocks
        </a>
        <a
          href="https://www.marketwatch.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#006466]"
        >
          MarketWatch
        </a>
        <a
          href="https://www.bloomberg.com/markets/stocks"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#006466]"
        >
          Bloomberg
        </a>
      </nav>
    </header>
  );
}

export default Header;

