These three methods are **higher-order functions** used for processing arrays in JavaScript. They provide a more functional and declarative approach compared to traditional loops.

## `map()` – Transforming Arrays

**What it does:**

- **Creates a new array** by applying a function to each element.
- **Does not modify the original array**.
- Useful for **transforming** data.

**Syntax**

```js
array.map((element, index, array) => {
  // return transformed element
});
```

**Example**

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
```

**Example: Extracting Names from Objects**

```js
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 }
];

const names = users.map(user => user.name);
console.log(names); // Output: ["Alice", "Bob", "Charlie"]
```

## `filter()` – Selecting Specific Elements

**What it does:**

- **Creates a new array** with elements that satisfy a given condition.
- **Does not modify the original array**.
- Useful for **filtering data**.

**Syntax**

```js
array.filter((element, index, array) => {
  return condition; // Only elements that return true will be in the new array
});
```

**Example: Filtering Even Numbers**

```js
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4, 6]
```

**Example: Filtering Users by Age**

```js
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 22 }
];

const adults = users.filter(user => user.age >= 18);
console.log(adults); 
// Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 22 }]
```

## `reduce()` – Accumulating Values

**What it does:**

- **Reduces an array to a single value** (e.g., sum, product, object aggregation).
- **Uses an accumulator** to store the ongoing result.

**Syntax**

```js
array.reduce((accumulator, currentValue, index, array) => {
  return newAccumulatorValue;
}, initialValue);
```

**Example: Summing Numbers**

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15
```

**Example: Counting Occurrences of Items**

```js
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(fruitCount);
// Output: { apple: 3, banana: 2, orange: 1 }
```

**Example: Flattening an Array**

```js
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]
```

## Comparison Table

|Function|Purpose|Returns a New Array?|Common Use Cases|
|---|---|---|---|
|`map()`|Transforms each element|✅ Yes|Modify data (e.g., double numbers, extract fields)|
|`filter()`|Selects elements based on a condition|✅ Yes|Get specific elements (e.g., filter adults, even numbers)|
|`reduce()`|Accumulates array elements into a single value|❌ No|Sum, count, flatten arrays, merge data|
## When to Use What?

- Use **`map()`** when you want to **transform** each element.
- Use **`filter()`** when you want to **select** specific elements.
- Use **`reduce()`** when you want to **aggregate** values into a **single** result.

## Chaining `map()`, `filter()`, and `reduce()`

These methods can be **combined** for cleaner, declarative code.

**Example: Sum of Squares of Even Numbers**

```js
const numbers = [1, 2, 3, 4, 5, 6];

const sumOfSquares = numbers
  .filter(num => num % 2 === 0)  // [2, 4, 6]
  .map(num => num * num)         // [4, 16, 36]
  .reduce((sum, num) => sum + num, 0); // 4 + 16 + 36 = 56

console.log(sumOfSquares); // Output: 56
```

✅ This is much cleaner than writing loops manually.

## Key Takeaways

- **`map()`** transforms data.
- **`filter()`** extracts specific elements.
- **`reduce()`** combines elements into a single value.
- These methods make **code cleaner, readable, and functional**.
- Chaining them leads to **powerful and concise solutions**.
