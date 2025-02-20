const hexUnderRule = require("./rules/hex-under");
const hexUnderBigintRule = require("./rules/hex-under-bigint");
const plugin = {
  rules: {
    "hex-under": hexUnderRule,
    "hex-under-bigint": hexUnderBigintRule,
  },
};
module.exports = plugin;
