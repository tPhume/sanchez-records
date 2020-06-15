/* eslint-disable import/no-extraneous-dependencies */

const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    purgecss({ content: ["./src/**/*.jsx", ".public/**/*.html"] }),
  ],
};
