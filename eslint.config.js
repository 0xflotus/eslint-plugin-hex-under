"use strict";

const eslintPluginHexUnder = require("./eslint-plugin-hex-under");

module.exports = [
  {
    files: ["*.js"],
    plugins: {
      "hex-under": eslintPluginHexUnder,
    },
    rules: {
      "hex-under/hex-under": ["error", { limit: 255 }],
    },
  },
];
