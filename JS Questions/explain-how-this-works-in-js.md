# Explain how `this` works in JavaScript

`this` refers to the object that is executing the current function.

**Categories of this**

| Invocation Type         | Value of `this`                                |
| ----------------------- | ---------------------------------------------- |
| Global context          | `window` (in browser) or `global` (in Node.js) |
| Regular function        | `undefined` (in strict mode) or `window`       |
| Object method           | The object before the dot                      |
| Constructor function    | A newly created object                         |
| Arrow function          | `this` from **lexical (outer)** context        |
| DOM event handler       | The element that fired the event               |
| `call`, `apply`, `bind` | Explicitly defined by argument                 |

## Example: this in Object Method

```js
const person = {
  name: "John",
  greet() {
    console.log(`Hello, I am ${this.name}`);
  },
};

person.greet(); // Hello, I am John
```

`this` refers to the person object because it’s called using `person.greet()`.

## Common Mistake (Losing this)

```js
const greetFunc = person.greet;
greetFunc(); // undefined or window.name
```

`this` is lost. `greetFunc` is a plain function now - no object before the dot.

- You're copying the function reference from the object into a standalone variable (greetFunc).
- When you call greetFunc(), there’s no object before the dot — it’s called as a regular function, not as a method of person. (For regular function value of this is undefind (in strict mode) or window).
- So, inside greetFunc `this.name` is undefined.name (in strict mode) or window.name → " " (empty string or whatever the global name is).

### Fix using bind (Explicit Binding)

```js
const boundFunc = person.greet.bind(person);
boundFunc(); // Hello, I am John
```

## this in Arrow Functions

```js
const person = {
  name: "Jane",
  greet: () => {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet(); // Hi, I am undefined
```

Arrow functions don’t have their own this. They inherit from the outer scope (likely window).

## this in Constructor Functions

```js
function Car(model) {
  this.model = model;
}

const c = new Car("Tesla");
console.log(c.model); // Tesla
```

`this` refers to the newly created object.

## this in Custom Array Prototype

```js
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

[1, 2, 3].myForEach(function (num, i, arr) {
  console.log(this); // not the array!
});
```

`this` inside the callback here is not the array. To access array this inside callback:

Use .call() or .bind():

```js
[1, 2, 3].myForEach(
  function (num, i, arr) {
    console.log(this); // now 'arr'
  },
  [1, 2, 3]
);
```

Or use arrow function to retain outer this.

## this in Event Handlers

```js
document.querySelector("button").addEventListener("click", function () {
  console.log(this); // button element
});
```

But with arrow function:

```js
document.querySelector("button").addEventListener("click", () => {
  console.log(this); // lexical parent (likely window)
});
```

NOTE: Always clarify how a function is called, not just where it's defined. That determines what this points to.
