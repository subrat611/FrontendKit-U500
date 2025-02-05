Video Link: https://youtu.be/uH-tVP8MUs8?si=85FYJ1dk9a0uz-HE

> TIP: Scope in JavaScript is directly related to Lexical Environment.

### Lexical Environment

A **lexical environment** is a **data structure** that holds **variable and function declarations** in a specific execution context.
#### How It Works?

- Each function and block creates a new **lexical environment**.
- It contains:
	- **Local variables** declared inside that function or block.
    - **A reference to the outer lexical environment** (parent scope).

```js
function outer() {
  let a = 10;

  function inner() {
    let b = 20;
    console.log(a); // 10 (inner has access to outer's variables)
  }

  inner();
}
outer();
```

Here:

- The **inner function** has access to `a` because it was **lexically (statically) defined** inside `outer()`.
- The **lexical environment** of `inner()` includes:
    - Local variables (`b`).
    - A reference to `outer()`’s lexical environment (which has `a`).

You can say the `inner()` function lexically inside `outer()` function. Same the `outer()` function lexically inside `global` scope (global execution context).

#### Demo

![lexical-environment-demo](asset/Pasted%20image%2020250205213346.png)

If you see the lexical environment of `a`, it have local memory of `a` + `reference` to the lexical environment of it's parent (`this: Window`).

Same for the lexical environment of `c`

![demo-lexical-environment-2](asset/Pasted%20image%2020250205213816.png)

### Scope

Scope defines **where a variable can be accessed** in the code.
#### Types of Scope

**Global Scope**
    - Variables declared outside any function/block.
    - Accessible anywhere in the script.

```js
let globalVar = "I am global";

function test() {
  console.log(globalVar); // Accessible
}
test();
```

**Function Scope**

- Variables declared inside a function are **only accessible within that function**.

```js
function test() {
  let localVar = "I am local";
}
console.log(localVar); // ReferenceError: localVar is not defined
```

**Block Scope (ES6 - `let` & `const`)**

- Variables declared with `let` or `const` inside `{}` **are only accessible inside that block**.

```js
{
  let blockVar = "Inside block";
  console.log(blockVar); // Works
}
console.log(blockVar); // ReferenceError: blockVar is not defined
```

**Lexical Scope (Static Scope)**

- A function **can access variables from its outer function scope**, even if called elsewhere.

```js
function outer() {
  let outerVar = "Outer";
  function inner() {
    console.log(outerVar); // Accessible due to lexical scope
  }
  return inner;
}

const fn = outer();
fn(); // "Outer"
```

### Scope Chain

The **scope chain** is how JavaScript **resolves variables** by searching through nested lexical environments.
#### How It Works?

- If a variable is **not found in the current scope**, JavaScript moves up the **parent lexical environment** until it reaches the **global scope**.
- If it’s **not found anywhere**, a `ReferenceError` is thrown.

```js
let x = "Global";

function outer() {
  let y = "Outer";

  function inner() {
    let z = "Inner";
    console.log(x); // Global (found in global scope)
    console.log(y); // Outer (found in outer scope)
    console.log(z); // Inner (found in inner scope)
  }

  inner();
}

outer();
```

Here, JavaScript looks for:

1. `x` → Not found in `inner()`, found in **global scope**.
2. `y` → Not found in `inner()`, found in **outer()`.
3. `z` → Found in **inner()**, so no need to search further.

**Scope Chain Example with `var` (Function Scope)**

```js
function test() {
  if (true) {
    var a = "Function Scoped";
  }
  console.log(a); // "Function Scoped" (var ignores block scope)
}
test();
```

- `var` is **function-scoped**, so `a` is accessible outside the block.

### Summary

|Concept|Explanation|
|---|---|
|**Lexical Environment**|A data structure storing variables & references to the outer scope.|
|**Scope**|Defines where a variable can be accessed (global, function, block).|
|**Scope Chain**|How JavaScript searches for variables through nested lexical environments.|
