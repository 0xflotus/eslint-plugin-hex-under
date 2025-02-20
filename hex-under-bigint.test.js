const { RuleTester } = require("eslint");
const hexUnderBigintRule = require("./hex-under-bigint");

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
  },
});

ruleTester.run("hex-under-bigint", hexUnderBigintRule, {
  valid: [
    {
      options: [{ limit: 255 }],
      code: "const foo = 0xffn;",
    },
    {
      options: [{ limit: 15 }],
      code: "const foo = 0xfn;",
    },
    {
      options: [{ limit: 256 }],
      code: "const foo = 0x100n;",
    },
    {
      options: [{ limit: 255 }],
      code: "let foo = 0xffn;",
    },
    {
      options: [{ limit: 256 }],
      code: "var foo = 0xffn;",
    },
    {
      code: "function func() {\n  return 0xffn;\n}",
    },
    {
      code: "functionA(0xefn);",
    },
    {
      code: "const func = () => 0xabn;",
    },
  ],
  invalid: [
    {
      code: "const foo = 0x100n;",
      errors: 1,
    },
  ],
});

console.log("All tests passed!");
