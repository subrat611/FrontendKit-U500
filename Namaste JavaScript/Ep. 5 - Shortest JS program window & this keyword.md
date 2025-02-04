When a `execution context` is created a `this` is created along with it (also for the functional execution context). 

- In a browser `this` points to the **global object** is `window`.
- In Node.js `this` points to the **global object** is `global`.

```js
// nothing written here
// empty js file
```

 Even in an **empty JavaScript file**, a **Global Execution Context (GEC)** is created.

```js
var a = 10;
console.log(window.a); // 10
console.log(this.a);   // 10
```

- When using `var` at the global level, the variable `a` is added to the **global object (`window` in browsers)**.
- So, `window.a === a` is `true`.

**`let` and `const` don’t attach to `window`**:

```js
let b = 20;
console.log(window.b); // undefined
```

- Unlike `var`, `let` and `const` **do not** become properties of `window`.

Even if the file is empty, the JavaScript engine still **creates a Global Execution Context**.