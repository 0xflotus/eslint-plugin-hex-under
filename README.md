# eslint-plugin-hex-under

## hex-under

This ESLint plugin proves, if you use hexadecimal numbers in your variable declaration code, that its value is less than or equal a specified value (default: 255). If you use a hexadecimal number greater than this specified value, it will be transformed to its decimal value.

### Example

```js
// valid with { limit: 255 }
const signal = 0xef;

// invalid with { limit: 255 }
const signal = 0x21b;

// This can be transformed to:
const signal = 539;
```

## Integration

```sh
npm install --save-dev eslint-plugin-hex-under
```

```js
// eslint.config.js

const eslintPluginHexUnder = require("eslint-plugin-hex-under");

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
```
