1. Anonymous function?
2. First class function?
3. Function statement?
4. Function expression?
5. Function declaration?

## Function Statement (Function Declaration)

A function statement, also called a function declaration, defines a function with a name.

```js
function greet() {
  console.log("Hello!");
}

greet(); // "Hello!"
```

📌 **Key Points:**

- **Hoisted** to the top of the scope, meaning it can be called **before** its declaration.
- Must have a **function name**.
- Commonly used for **defining reusable functions**.

```js
greet(); // ✅ Works due to hoisting

function greet() {
  console.log("Hello!");
}
```

## Function Expression

A **function expression** defines a function and assigns it to a variable.

```js
const greet = function() {
  console.log("Hello!");
};

greet(); // "Hello!"
```

📌 **Key Points:**

- **Not hoisted**, so it **cannot** be called before definition.
- Can be **anonymous or named**.
- Often used for **callbacks and inline functions**.

```js
console.log(sayHi); // undefined
sayHi(); // ❌ ReferenceError: Cannot access 'sayHi' before initialization

const sayHi = function () {
  console.log("Hi!");
};
```

## Function Declaration vs Function Expression

| Feature               | Function Declaration (Statement) | Function Expression                  |
| --------------------- | -------------------------------- | ------------------------------------ |
| **Syntax**            | `function myFunc() {}`           | `const myFunc = function() {}`       |
| **Hoisting**          | ✅ Hoisted                        | ❌ Not Hoisted                        |
| **Can be Anonymous?** | ❌ No                             | ✅ Yes                                |
| **Use Case**          | Defining functions for reuse     | Callback functions, inline functions |

## Anonymous Function

An anonymous function is a function without a name. It is often assigned to a variable or used as an argument in higher-order functions.

```js
const greet = function() {
  console.log("Hello, world!");
};

greet(); // Hello, world!
```

📌 **Key Points:**

- Does **not** have a function name.
- Cannot be called before its definition.
- Commonly used in **callbacks and function expressions**.

## First-Class Functions

In JavaScript, **functions are first-class citizens**, meaning:

- They can be assigned to variables.
- They can be **passed as arguments** to other functions.
- They can be **returned from other functions**.

```js
function sayHello() {
  return "Hello!";
}

// Assign function to a variable
const greet = sayHello;
console.log(greet()); // "Hello!"

// Pass function as an argument
function executeFunction(fn) {
  console.log(fn()); 
}
executeFunction(sayHello); // "Hello!"

// Return function from a function
function createMultiplier(factor) {
  return function (num) {
    return num * factor;
  };
}
const double = createMultiplier(2);
console.log(double(5)); // 10
```

📌 **Key Points:**

- Functions can be stored in variables.
- Functions can be used as arguments and return values.
- Enables concepts like **callbacks and higher-order functions**.

## Conclusion

1. **Anonymous functions** have no name and are often used as callbacks.
2. **First-class functions** can be assigned to variables, passed as arguments, and returned from other functions.
3. **Function statements (declarations)** are hoisted and must have a name.
4. **Function expressions** are assigned to variables and are **not hoisted**.
5. **Function declarations** are best for reusable functions, while **expressions** are useful for callbacks and event handlers.