### Hoisting

Hoisting is JavaScript's default behavior of **moving declarations to the top** of their scope **before execution**. This means **variables and functions can be used before they are declared**.

```js
console.log(a); // this is ok
console.log(b); // ❌ Uncaught ReferenceError: cann't access 'b' before initialization
var a = 10;
var b = 20;
```

**Why this happen? Is `b` not hoisted?**
Yes `b` is hoisted but it's stored in separate memory space and you can not access this access memory space / you can not access this let and const declaration before putting any value to it. This is in temporal dead zone for `let` and `const`.

### Temporal Dead Zone (TDZ) in JavaScript for `let` & `const`

The **Temporal Dead Zone (TDZ)** is the period between the start of a scope and the moment a variable is declared and initialized. During this time, accessing the variable results in a **ReferenceError**.

or

**Temporal Dead Zone (TDZ)** is the time since this `let` & `const` variable was hoisted and till it is initialized some value.

- `const` declared variable are more strict than `let` while declaration you have to initialize with the value also. (same line declaration with initialization)

![tdz-demo-1](asset/Pasted%20image%2020250206090317.png)

If you see the `a` is inside **script** not in global just like `b`.

### When does the TDZ occur?

- **Only affects `let` and `const`** (not `var`).
- Starts **from the beginning of the enclosing scope**.
- Ends when the variable is **declared and initialized**.

### Example 1: Accessing `let` before declaration

```js
console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 10; // TDZ ends here
console.log(a); // ✅ 10
```

- The **TDZ** starts when the script begins.
- It ends when `a` is declared and initialized (`let a = 10`).

### Example 2: Function scope with TDZ

```js
function test() {
  console.log(x); // ❌ ReferenceError
  let x = 5; // TDZ ends here
  console.log(x); // ✅ 5
}
test();
```

- TDZ exists from the start of `test()` until `let x = 5`.
- Accessing `x` before declaration causes a **ReferenceError**.

### Example 3: `const` also has a TDZ

```js
console.log(y); // ❌ ReferenceError
const y = 20; // TDZ ends here
console.log(y); // ✅ 20
```

- Same behavior as `let`.
- But `const` must be initialized immediately.

### Key Differences

|Feature|`var`|`let`|`const`|
|---|---|---|---|
|Hoisted?|✅ Yes (initialized to `undefined`)|✅ Yes (but in TDZ)|✅ Yes (but in TDZ)|
|Temporal Dead Zone?|❌ No|✅ Yes|✅ Yes|
|Must be initialized?|❌ No|❌ No|✅ Yes|
### Why does TDZ exist?

TDZ helps **prevent unintended behavior**. Without it, JavaScript could allow using variables before they are defined, leading to hard-to-debug issues.

✅ **Best Practice:** Always declare `let` and `const` at the top of their scope to avoid TDZ issues.

## Type of Error

- TypeError
- SyntaxError
- ReferenceError
