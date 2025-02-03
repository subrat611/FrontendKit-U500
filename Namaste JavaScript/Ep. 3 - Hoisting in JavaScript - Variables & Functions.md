Hoisting is JavaScript's default behavior of **moving declarations to the top** of their scope **before execution**. This means **variables and functions can be used before they are declared**.

```js
getName();
console.log(x);
console.log(getName);

var x = 7;

function getName() {
	console.log("Namaste JS");
}
```

```bash
# OUTPUT
Namaste JS
undefined
function getName() {
	console.log("Namaste JS");
}
```

The whole concept is lies in `How JavaScript Code is executed`. Remember the two phase of JavaScript `Memory allocation` & `Code execution`.

But in case of arrow function and  it throw

```js

// the getName & getName2 variable in memory is set as undefined (phase 1).
// When in the phase 2 this gives getName is not a function.
getName(); 
getName2();

var getName = () => {
	console.log("Namaste JS");
}

// Function Expressions (Not Hoisted)
var getName2 = function() {
	console.log("Namaste JS");
}
```

- JavaScript hoists **only declarations** (not initializations) to the top of their scope (global or function).

### Hoisting with var

```js
console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10
```

How JavaScript interprets this code:

```js
var a; // Declaration is hoisted to the top
console.log(a); // undefined (initialization is NOT hoisted)
a = 10; // Assignment happens here
console.log(a); // 10
```

Since `var` variables are **hoisted but not initialized**, accessing them before assignment gives `undefined`.

### Hoisting with `let` and `const`

Unlike `var`, `let` and `const` are also **hoisted** but placed in the **"Temporal Dead Zone" (TDZ)** until they are assigned a value.

#### let

```js
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;
```

`let` is hoisted, but accessing it before the declaration line causes an error because of the **TDZ**.

#### const

```js
console.log(y); // ReferenceError
const y = 10;
```

`const` behaves like `let` but also **must be initialized** at the time of declaration.

### Summary

- `var` is hoisted but initialized as `undefined`.
- `let` and `const` are hoisted but remain in the Temporal Dead Zone (TDZ), causing a ReferenceError if accessed before declaration.
- Function declarations are fully hoisted, allowing them to be used before they are defined.
- Function expressions and arrow functions are NOT hoisted, only the variable declaration (`var`) is hoisted as `undefined`.
