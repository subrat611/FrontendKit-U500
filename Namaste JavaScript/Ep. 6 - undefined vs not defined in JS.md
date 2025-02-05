### undefined

- A variable is **declared but not assigned a value**, so it holds the special value `undefined`.

```js
let x; 
console.log(x); // Output: undefined
```

- `x` is **declared**, but no value is assigned, so JavaScript sets it to `undefined`.

Example with `var`

```js
console.log(y); // Output: undefined
var y = 10;
```

- Due to **hoisting**, `y` exists but is `undefined` before the assignment.


```js
var a = undefined; // ❌ Don't do
var a = null; // ✅ Do
```

### Not Defined (ReferenceError)

- A variable that has **never been declared** results in a **ReferenceError** when accessed.

```js
console.log(z); // ReferenceError: z is not defined
```

#### **Key Differences:**

|Aspect|`undefined`|Not Defined|
|---|---|---|
|**When it occurs?**|Variable is declared but not assigned a value|Variable was never declared|
|**Error?**|No, it just prints `undefined`|Yes, throws a `ReferenceError`|
|**Example**|`let x; console.log(x); // undefined`|`console.log(y); // ReferenceError`|
### Common Mistakes

#### **Accidentally Using an Undeclared Variable**

```js
if (isActive) { // ReferenceError if isActive is not declared
  console.log("Active");
}
```

✅ **Fix: Always declare variables explicitly**

```js
let isActive = true;
if (isActive) {
  console.log("Active");
}
```

**Accessing `undefined` Properties**

```js
let obj = {};
// undefined (property doesn't exist but no error)
console.log(obj.name);
// TypeError: Cannot read properties of undefined
console.log(obj.age.toUpperCase()); 
```

✅ **Fix: Use Optional Chaining (`?.`)**

```js
console.log(obj.age?.toUpperCase()); // undefined, no error
```
