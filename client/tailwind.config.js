const plugin = require("tailwindcss/plugin");

const CardFlipPlugin = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": { transform: "rotateY(180deg)" },
    ".transform-style-3d": { transformStyle: "preserve-3d" },
    ".perspective": { perspective: "1000px" },
    ".backface-hidden": { backfaceVisibility: "hidden" },
  });
});

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [CardFlipPlugin],
};
