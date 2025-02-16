const hexUnder256Rule = require("./hex-under-256");
const plugin = { rules: { "hex-under-256": hexUnder256Rule } };
module.exports = plugin;
