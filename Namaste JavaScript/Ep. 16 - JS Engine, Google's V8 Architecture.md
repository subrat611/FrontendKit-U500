## JavaScript Engine (Detailed Notes)

A **JavaScript engine** is a program that interprets and executes JavaScript code. It converts JavaScript into **machine code** that a computer can understand and execute efficiently. Different browsers use different JavaScript engines:

- **V8** → Google Chrome, Node.js
- **SpiderMonkey** → Mozilla Firefox
- **JavaScriptCore** → Safari (WebKit)
- **Chakra** → Internet Explorer (deprecated)

![js-engine](asset/Pasted%20image%2020250213084846.png)

## Components of a JavaScript Engine

- Parser
- Interpreter (Ignition in V8)
- Just-In-Time (JIT) Compiler (TurboFan in V8)
- Garbage Collector (GC) (Orinoco in V8)

### Parser

- Converts JavaScript **code** into an **Abstract Syntax Tree (AST)**.
- Code is broken down to **Token** -> **AST**

**Example**

```js
let x = 10 + 5;
```

**AST representation:**

```js
VariableDeclaration
  ├─ Identifier (x)
  ├─ AssignmentExpression
      ├─ BinaryExpression (+)
          ├─ Literal (10)
          ├─ Literal (5)
```

### Interpreter (Ignition in V8)

- **Executes code line by line** (slower than compiled code).
- Converts AST into **bytecode** (an intermediate representation).
- Example: Bytecode for `let x = 5;`

```js
LdaSmi 5
StaGlobal x
```

### Just-In-Time (JIT) Compiler (TurboFan in V8)

- Converts bytecode into **machine code** for faster execution.
- Uses **optimizations** like **inline caching**, **hidden classes**, and **dead code elimination**.

### Garbage Collector (GC) (Orinoco in V8)

- Frees memory by removing **unused objects**.
- Uses **Mark-and-Sweep Algorithm**:
    - Marks **reachable** objects.
    - Sweeps (removes) **unreachable** objects.

## Execution Pipeline in V8 (Google Chrome & Node.js)

V8 JavaScript Engine executes code in **4 stages**:

- Parsing → AST generation
- Interpreter (Ignition) → Bytecode
- Baseline JIT Compilation (TurboFan) → Optimized Machine Code
- Garbage Collection (Orinoco)

## Optimizations in JavaScript Engines

- Hidden Classes & Inline Caching
	- JavaScript is dynamically typed, so engines optimize objects by assigning hidden classes.

```js
function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User("Alice", 25);
const user2 = new User("Bob", 30);	
```

Both objects (`user1`, `user2`) get the **same hidden class**, making property lookups **faster**.

- Dead Code Elimination
	- Unused code is **removed**.

```js
function test() {
  return 5;
  console.log("This will never run"); // Removed
}
```

- Function Inlining
	- Frequently used small functions are **inlined** for performance.

```js
function square(x) { return x * x; }
console.log(square(4)); // Optimized as direct multiplication
```

## Why JavaScript is Fast Despite Being Single-Threaded?

1. **JIT Compilation** → Converts bytecode to machine code dynamically.
2. **Hidden Classes & Inline Caching** → Faster object property access.
3. **Garbage Collection** → Efficient memory management.
4. **Event Loop & Web APIs** → Non-blocking async execution.

## JavaScript Engine vs JavaScript Runtime

|**JavaScript Engine**|**JavaScript Runtime**|
|---|---|
|Only executes JS code|Includes JS engine + Web APIs + Event Loop|
|Example: V8, SpiderMonkey|Example: Chrome, Node.js|
|Converts JS to machine code|Provides I/O, timers, fetch, etc.|
## JavaScript Runtime

A **JavaScript Runtime Environment (JRE)** is an environment where JavaScript code executes. It consists of:

- **JavaScript Engine** (like V8, SpiderMonkey)
- **Web APIs** (in browsers) or **Node.js APIs** (in Node.js)
- **Event Loop & Callback Queue**

In contrast, a **JavaScript Engine** (like V8) only compiles and executes JavaScript code but does not provide additional APIs like `setTimeout`, `fetch`, or `DOM manipulation`.