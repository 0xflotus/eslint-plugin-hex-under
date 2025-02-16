"use strict";

const eslintPluginHexUnder = require("./eslint-plugin-hex-under");

module.exports = [
  {
    files: ["*.js"],
    plugins: {
      "hex-under": eslintPluginHexUnder,
    },
    rules: {
      "hex-under/hex-under-256": ["error", { limit: 255 }],
    },
  },
];
