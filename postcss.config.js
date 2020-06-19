/* eslint-disable import/no-extraneous-dependencies */

const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./public/**/*.html", "./src/**/*.jsx"],
  defaultExtractor: (content) => {
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
    return broadMatches.concat(innerMatches);
  },
});

module.exports = {
  plugins: [tailwindcss, autoprefixer, purgecss],
};
