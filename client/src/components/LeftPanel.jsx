import React, { useEffect } from "react";

function LeftPanel() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.innerHTML = `
      {
        "feedMode": "all_symbols",
        "isTransparent": false,
        "displayMode": "regular",
        "width": "100%",
        "height": "100%",
        "colorTheme": "dark",
        "locale": "en"
      }
    `;
    const widgetContainer = document.querySelector(".tradingview-widget-container");
    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }
  }, []);

  return (
    <div
      className="w-72 bg-gray-800 shadow-md h-screen sticky top-0"
    >
      <div className="tradingview-widget-container w-full h-full">
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright text-xs text-center mt-2">
          <a
            href="https://www.tradingview.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-400"
          >
            Track all markets on TradingView
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
