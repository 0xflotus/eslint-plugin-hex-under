const hexUnderRule = require("./hex-under");
const hexUnderBigintRule = require("./hex-under-bigint");
const plugin = {
  rules: {
    "hex-under": hexUnderRule,
    "hex-under-bigint": hexUnderBigintRule,
  },
};
module.exports = plugin;
