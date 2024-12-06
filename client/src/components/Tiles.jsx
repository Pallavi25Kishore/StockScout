import React from "react";

function Tiles({ companies = [] }) {
  if (!companies || companies.length === 0) {
    return <></>;
  }

  return (
    <div className="flex flex-wrap justify-center items-center w-full my-4">
      {companies.map((company, index) => (
        <div
          key={index}
          className="group perspective w-60 h-96 mx-4 my-4"
        >
          <div className="relative w-full h-full transform-style-3d group-hover:rotate-y-180 duration-700">
            {/* Front Side */}
            <div
              className="absolute backface-hidden border-2 w-full h-full shadow-lg rounded-md p-4 flex flex-col justify-between"
              style={{
                background: "linear-gradient(to bottom, #4D194D, #3E1F47, #312244, #272640)",
              }}
            >
              {/* Ticker */}
              <div className="text-sm font-bold text-white">
                {company.Ticker}
              </div>

              {/* Description */}
              <div className="flex-grow flex items-center justify-center text-xs text-gray-300 leading-snug text-center">
                {company.Description.length > 600
                  ? `${company.Description.substring(0, 500)}...`
                  : company.Description}
              </div>
            </div>

            {/* Back Side */}
            <div
              className="absolute rotate-y-180 backface-hidden border-2 w-full h-full shadow-lg rounded-md p-4"
              style={{
                background: "linear-gradient(to bottom, #4D194D, #3E1F47, #312244, #272640)",
              }}
            >
              {/* Ticker */}
              <div className="absolute top-2 left-2 text-sm font-bold text-white">
                {company.Ticker}
              </div>

              {/* Stock Information */}
              <div className="flex flex-col items-center justify-center space-y-2 text-xs text-white text-center mt-4">
                <p>
                  <strong>Earnings Quarterly Growth</strong>
                  <br />
                  {company["Earnings Quarterly Growth"]}
                </p>
                <p>
                  <strong>Market Cap</strong>
                  <br />
                  {company["Market Cap"]}
                </p>
                <p>
                  <strong>Volume</strong>
                  <br />
                  {company.Volume}
                </p>
                <p>
                  <strong>Revenue Growth</strong>
                  <br />
                  {company["Revenue Growth"]}
                </p>
                <p>
                  <strong>Gross Margins</strong>
                  <br />
                  {company["Gross Margins"]}
                </p>
                <p>
                  <strong>EBITDA Margins</strong>
                  <br />
                  {company["EBITDA Margins"]}
                </p>
                <p>
                  <strong>52 Weeks Change</strong>
                  <br />
                  {company["52 Week Change"]}
                </p>
                <p>
                  <strong>Revenue Per Share</strong>
                  <br />
                  {company["Revenue Per Share"]}
                </p>

                {/* Website */}
                <p>
                  <a
                    href={company.Website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    Visit Website
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tiles;
