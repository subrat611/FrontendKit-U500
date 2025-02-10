A closure is a function that remembers the variables from its outer scope even after the outer function has finished executing.

or

Function along with its lexical scope forms a closure.

> MDN:
> A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical environment**). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

## How Closures Work?

Whenever a function is defined inside another function, it forms a closure over the outer function's variables.

![closures-in-js](asset/Pasted%20image%2020250210202130.png)

![closure-in-js-2](asset/Pasted%20image%2020250210203818.png)
### Example

```js
function outer() {
  let count = 0;  // Outer function variable

  return function inner() {
    count++; // Inner function remembers `count`
    console.log(count); // in log() the count is the reference not the value `0`
  };
}

const counter = outer(); // outer() executes, but inner() still has access to `count`
counter(); // 1
counter(); // 2
counter(); // 3
```

Even though `outer()` has finished executing, the `inner()` function **still has access to `count`** because of the closure.

## Why Closures Are Useful?

**Data Encapsulation (Private Variables)**

- You can **hide variables** inside a function to **prevent global pollution**.

```js
function createCounter() {
  let count = 0;

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
console.log(counter.count); // Undefined (can't access `count` directly)
```

**Function Factories (Dynamic Function Creation)**

- You can **create multiple functions with different preserved values**.

```js
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

**Callbacks & Event Listeners**

- Closures help **preserve state** inside asynchronous functions like event listeners or timeouts.

```js
function delayMessage(message, delay) {
  setTimeout(function () {
    console.log(message); // Closure remembers `message`
  }, delay);
}

delayMessage("Hello, World!", 2000); // Prints "Hello, World!" after 2 seconds
```

## Common Pitfall: Closures with `var` in Loops

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

**OUTPUT**

```js
3
3
3
```

**Fix using `let` (Block Scope)**

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

**OUTPUT**

```js
0
1
2
```

- `let` creates a new lexical scope for each iteration.

## Uses of Closures

- Module Design Pattern
- Currying
- Function like `once`
- Memoize
- Maintaining state in `async` world
- setTimeouts
- Iterators
- and many more...

## Key Takeaways

1. A closure **remembers the variables from its outer function** even after the function has finished executing.
2. Useful for **data encapsulation, function factories, event handling, and async operations**.
3. Be careful with closures inside loops when using `var`, as it does not create block-scoped variables.