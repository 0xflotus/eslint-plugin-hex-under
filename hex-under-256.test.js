const { RuleTester } = require("eslint");
const hexUnder256Rule = require("./hex-under-256");

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2015 },
});

ruleTester.run("hex-under-256", hexUnder256Rule, {
  valid: [
    {
      code: "const foo = 0xff;",
    },
  ],
  invalid: [
    {
      code: "const foo = 0x100;",
      output: "const foo = 256;",
      errors: 1,
    },
  ],
});

ruleTester.run("hex-under-256", hexUnder256Rule, {
  valid: [
    {
      code: "let foo = 0xff;",
    },
  ],
  invalid: [
    {
      code: "let foo = 0x100;",
      output: "let foo = 256;",
      errors: 1,
    },
  ],
});

ruleTester.run("hex-under-256", hexUnder256Rule, {
  valid: [
    {
      code: "var foo = 0xff;",
    },
  ],
  invalid: [
    {
      code: "var foo = 0x100;",
      output: "var foo = 256;",
      errors: 1,
    },
  ],
});

console.log("All tests passed!");
