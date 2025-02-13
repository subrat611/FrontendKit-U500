
**Video Link:** https://youtu.be/HkWxvB1RJq0?si=u-OYKfty_YVJZTgh

## What is a Higher-Order Function (HOF)?

A higher-order function (HOF) is a function that either:

- Takes another function as an argument, or
- Returns a function as its result.

This allows for functional programming patterns, making code more modular and reusable.

**Example 1: Function Taking Another Function as an Argument**

```js
function applyOperation(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(applyOperation(5, 3, add)); // Output: 8
```

✅ `applyOperation` is a **higher-order function** because it takes `operation` (a function) as an argument.

**Example 2: Function Returning Another Function**

```js
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10
```

✅ `multiplier(2)` **returns a function**, making it a higher-order function.

## Functional Programming Principles

Functional programming (FP) is a paradigm where functions are treated as **first-class citizens** and emphasize **pure functions, immutability, and declarative code**.

### Key FP Concepts:

- **First-Class Functions**: Functions can be passed as arguments, returned, and stored in variables.
- **Pure Functions**: No side effects; given the same input, always returns the same output.
- **Immutability**: Avoids modifying data; prefers new copies.
- **Declarative Code**: Uses built-in methods like `map()`, `filter()`, `reduce()`.

## Common Higher-Order Functions in JavaScript

- `map()` – Transforming Arrays
- `filter()` – Filtering Arrays
- `reduce()` – Accumulating Values
- `forEach()` – Iterating Over Arrays
- `sort()` – Sorting Arrays

## Functional Composition

Functional composition combines multiple functions into one.

**Example: Chaining Higher-Order Functions**

```js
const numbers = [1, 2, 3, 4, 5];

// Double even numbers and sum them
const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((acc, curr) => acc + curr, 0);

console.log(result); // Output: 12 (2*2 + 4*2)
```

✅ This is **declarative**, concise, and easy to understand.

## Closures & Higher-Order Functions

Higher-order functions often work with **closures** (functions that remember their scope).

```js
function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2
```

✅ The inner function **remembers `count`** even after `createCounter()` execution.

## Functional Programming vs Object-Oriented Programming (OOP)

|Feature|Functional Programming (FP)|Object-Oriented Programming (OOP)|
|---|---|---|
|**State Management**|Immutability (avoids modifying state)|Encapsulation (modifies state via methods)|
|**Data & Behavior**|Kept separate (pure functions)|Encapsulated together (objects)|
|**Reusability**|Function composition|Inheritance & polymorphism|
|**Code Style**|Declarative (e.g., `map`, `filter`)|Imperative (e.g., loops, class methods)|
## When to Use Functional Programming?

- When you need **predictable, side-effect-free** behavior.
- When working with **large data sets** (methods like `map()` and `reduce()` optimize performance).
- When you want **better reusability** with **small, composable functions**.

## Key Takeaways

- **Higher-order functions** take functions as arguments or return functions.
- **Functional programming** emphasizes **pure functions, immutability, and declarative patterns**.
- Methods like **`map()`, `filter()`, and `reduce()`** make working with data **cleaner and more readable**.
- **Closures** and **functional composition** allow for powerful and flexible programming patterns.