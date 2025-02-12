
**Video Link:** https://youtu.be/8zKuNo4ay8E?si=r9XjjzDVkgEMaPAS
**Video Link:** https://youtu.be/eiC58R16hb8?si=bply00WPYHz9fQgm

The Event Loop is a fundamental concept in JavaScript that enables asynchronous, non-blocking execution while JavaScript remains single-threaded. It ensures that JavaScript can efficiently handle multiple operations (such as I/O tasks, API calls, or timers) without blocking the execution of code.

## Call Stack, Web APIs, Task Queue & Microtask Queue

The **event loop** manages the interaction between the following components:

### Call Stack

- JavaScript uses a **stack** to keep track of function calls.
- When a function is called, it is **pushed** onto the stack.
- When execution is complete, it is **popped** off the stack.

```js
function greet() {
  console.log("Hello");
}

greet();
console.log("World");
```

Execution:

1. `greet()` is pushed onto the stack.
2. `console.log("Hello")` executes, then `greet()` is popped.
3. `console.log("World")` executes

### Web APIs

JavaScript itself is single-threaded, but **Web APIs (provided by the browser)** allow it to handle asynchronous operations like:

- `setTimeout`
- DOM events (`click`, `keydown`, etc.)
- `fetch()` requests
- `Promises`
- `WebSockets`

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 1000);

console.log("End");
```

Execution:

1. `"Start"` is logged.
2. `setTimeout()` moves its callback to the **Web API**.
3. `"End"` is logged.
4. After **1 second**, the callback moves to the **Task Queue** (explained below).
5. The **Event Loop** moves the callback to the **Call Stack** when it’s empty.
6. `"Timeout callback"` is logged.

### Task Queue (Callback Queue)

- Stores **callbacks** from `setTimeout`, `setInterval`, and DOM events.
- The Event Loop moves **one task at a time** from the Task Queue to the Call Stack.

### Microtask Queue

- Stores **higher-priority** asynchronous tasks like:
    - `Promises` (`.then()`, `.catch()`)
    - `MutationObserver`
    - `queueMicrotask()`
- Microtasks **always execute before Task Queue** items.

```js
console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

Execution:

1. `"Start"` → Call Stack → Logs to console.
2. `"End"` → Call Stack → Logs to console.
3. **Microtask Queue executes first** → `"Promise"` is logged.
4. **Task Queue executes next** → `"setTimeout"` is logged.

```js
// Output
Start
End
Promise
setTimeout
```

## Event Loop Execution Flow

- **Execute all synchronous code** (runs inside the Call Stack).
- **Process Microtasks (Promises, MutationObserver, queueMicrotask).**
- **Process Task Queue (setTimeout, setInterval, I/O, DOM events).**
- **Repeat continuously**.

## Starvation Issue (Microtasks Blocking Event Loop)

Since Microtasks always execute before the Task Queue, an infinite loop of Microtasks can **block** other tasks.

```js
Promise.resolve().then(function run() {
  console.log("Microtask");
  Promise.resolve().then(run);
});

setTimeout(() => console.log("setTimeout"), 0);
```

- The Microtask (`Promise`) keeps executing before `setTimeout()`, leading to **starvation**.
- The **Task Queue (setTimeout) never gets a chance** to execute.

## Practical Use Cases of the Event Loop

### Handling API Calls Efficiently

```js
console.log("Fetching data...");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log("Received:", data));

console.log("Done!");
```

**Execution:**

1. `"Fetching data..."` logs.
2. `fetch()` starts and moves to Web API.
3. `"Done!"` logs (fetch is still pending).
4. When the API responds, the `then()` callback moves to the **Microtask Queue**.
5. The **Microtask executes** and logs `"Received: ..."`.

## Summary

- **Call Stack:** Executes synchronous code.
- **Web APIs:** Handles async operations (`setTimeout`, `fetch`, DOM events).
- **Task Queue:** Stores `setTimeout`, `setInterval`, and I/O callbacks.
- **Microtask Queue:** Stores Promises, MutationObserver callbacks (executes **before** Task Queue).
- **Event Loop:** Moves tasks from Microtask/Task Queues to the Call Stack.

## Example: Clicking a button continuously

![clicking-btn-continuously](asset/Pasted%20image%2020250212091156.png)