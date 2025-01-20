### **Type Conversions in JavaScript**

JavaScript automatically converts values to the expected type in certain operations. However, explicit conversion is sometimes needed.
### 1. String Conversion

- Happens when a value needs to be represented as a string.
- **Implicit:** `alert(value)` automatically converts values to strings.
- **Explicit:** `String(value)`

```js
let value = true;
console.log(typeof value); // boolean

value = String(value);
console.log(typeof value); // string

```

Examples

```js
console.log(String(null)); // "null"
console.log(String(false)); // "false"
```

### 2. Numeric Conversion

- Happens automatically in mathematical operations.
- **Implicit:** `"6" / "2"` → `3` (strings converted to numbers)
- **Explicit:** `Number(value)`

```js
let str = "123";
let num = Number(str);
console.log(typeof num); // number
```

If conversion fails, the result is `NaN`.

```js
console.log(Number("abc")); // NaN
```

**Conversion Rules:**

| Value        | Becomes |
| ------------ | ------- |
| `undefined`  | `NaN`   |
| `null`       | `0`     |
| `true/false` | `1 / 0` |
| `"123"`      | `123`   |
| `"123abc"`   | `NaN`   |
```js
console.log(Number("   123   ")); // 123
console.log(Number("123z")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
```

Whitespaces (includes spaces, tabs `\t`, newlines `\n` etc.) from the start and end are removed. If the remaining string is empty, the result is `0`. Otherwise, the number is “read” from the string. An error gives `NaN`.

Please note that `null` and `undefined` behave differently here: `null` becomes zero while `undefined` becomes `NaN`.

### 3. Boolean Conversion

- Happens in logical operations.
- **Explicit:** `Boolean(value)`
- **Falsy values** (convert to `false`):
    - `0, "" (empty string), null, undefined, NaN`
- **Truthy values** (convert to `true`):
    - Everything else, including `"0"` and `" "` (non-empty strings).

```js
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true
```

## Key Takeaways

- `"0"` and `" "` (space) **are truthy** in JavaScript.
- `undefined` converts to `NaN`, **not 0**.
- **Type Conversion Methods:**
    - `String(value)` → Converts to string
    - `Number(value)` → Converts to number
    - `Boolean(value)` → Converts to boolean