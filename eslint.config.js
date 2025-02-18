"use strict";

const eslintPluginHexUnder = require("./eslint-plugin-hex-under");

module.exports = [
  {
    plugins: {
      "hex-under": eslintPluginHexUnder,
    },
    rules: {
      "hex-under/hex-under": ["error", { limit: 255 }],
      "hex-under/hex-under-bigint": ["warn"],
    },
  },
];
