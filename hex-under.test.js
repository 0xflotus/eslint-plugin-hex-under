const { RuleTester } = require("eslint");
const hexUnder256Rule = require("./hex-under");

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2015 },
});

ruleTester.run("hex-under-256", hexUnder256Rule, {
  valid: [
    {
      options: [{ limit: 255 }],
      code: "const foo = 0xff;",
    },
    {
      options: [{ limit: 256 }],
      code: "const foo = 0x100;",
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
      options: [{ limit: 255 }],
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
      options: [{ limit: 256 }],
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
