# eslint-plugin-hex-under

## hex-under-256

This ESLint plugin proves, if you use hexadecimal numbers in your variable declaration code, that its value is less than 256. If you use a hexadecimal number greater or equal 256, it will be transformed to its decimal value.

### Example

```js
// valid
const signal = 0xef;

// invalid
const signal = 0x21b;

// This will be transformed to:
const signal = 539;
```
