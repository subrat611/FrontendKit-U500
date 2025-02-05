What does the code snippet to the right output by `console.log`?

```js
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0)
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0)
}
```

### **Output Analysis**
#### Var

📌 **Why?**

- `var` is **function-scoped**, meaning it is **not block-scoped**.
- The loop increments `i` up to `5`, but since `setTimeout` is asynchronous, the loop finishes before `console.log(i)` runs.
- When `setTimeout` executes, `i` has already reached `5`, so all logs print `5`.

Behind the scenes:

```js
var i; // Declared once, shared across all iterations

for (i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0); 
}
// i is now 5
```

By the time `setTimeout` executes, `i` has already become `5`, so it logs `5` five times.

```
5
5
5
5
5
```

#### Let

📌 **Why?**

- `let` is **block-scoped**, meaning a **new `i` is created for each loop iteration**.
- Each iteration creates a **separate lexical environment** with its own `i`, preserving the correct values.

Behind the scenes:

```js
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0); // Each function captures a different `i`
}
```

Each iteration has its own unique `i`, so `setTimeout` logs the correct values.

### Key Takeaways

|Feature|`var`|`let`|
|---|---|---|
|**Scope**|Function-scoped|Block-scoped|
|**Hoisting**|Yes (initialized as `undefined`)|Yes (but in Temporal Dead Zone)|
|**Loop Behavior**|Single `i` shared across iterations|New `i` for each iteration|
|**SetTimeout Output**|Logs `5` five times|Logs `0, 1, 2, 3, 4`|

💡 **Fix for `var` (Using Closure)** If you must use `var`, you can use **closures** to create separate scopes:

```js
for (var i = 0; i < 5; i++) {
  (function(i) {
    setTimeout(() => console.log(i), 0);
  })(i);
}
```

This works because each `i` is passed as a function argument, creating a separate scope.