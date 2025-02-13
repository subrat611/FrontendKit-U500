`setTimeout()` **does not guarantee** exact timing. It only schedules a task **after at least** the specified delay but doesn’t execute it **exactly on time** due to how the **event loop** works.

## Why `setTimeout()` is Unreliable?

### Delays are not exact (Minimum Delay ≠ Exact Delay)

When you set `setTimeout(fn, 1000)`, it **does not mean** `fn` will execute exactly after 1000ms. It means **it will be scheduled after at least 1000ms**, but execution depends on the **Call Stack and Event Loop**.

### Blocking Code Can Delay Execution

If the **main thread (Call Stack)** is busy when the timer expires, `setTimeout()` waits until the stack is clear.

```js
console.log("Start");

setTimeout(() => console.log("Timeout"), 1000);

let start = Date.now();
while (Date.now() - start < 3000) {} // Simulates blocking operation

console.log("End");
```

```js
// OUTPUT
Start
End
Timeout  (delayed by 3s instead of 1s)
```

✅ **Why?** The `while` loop blocks the event loop, delaying `setTimeout()` execution.

## setTimeout(fn, 0) Does Not Run Immediately

A `setTimeout(fn, 0)` **does not execute immediately**. It moves to the **callback queue** and waits for the **Call Stack to be empty**.

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");
```

```js
// OUTPUT
A
C
B
```

✅ **Why?** Even though `setTimeout` has `0` delay, it gets scheduled **after synchronous code finishes**.

## Nested setTimeout() vs setInterval()

Using `setTimeout()` in recursion is more **reliable** than `setInterval()`, because `setInterval()` does not account for execution time.

```js
let count = 0;
setInterval(() => {
  console.log(`Tick ${count++}`, Date.now());
}, 1000);
```

**If execution takes longer than 1000ms, the next call still happens after 1000ms, leading to overlapping calls.**

Better Alternative: Recursive `setTimeout()`

```js
function tick() {
  console.log("Tick", Date.now());
  setTimeout(tick, 1000); // Waits for previous execution to finish before scheduling
}
tick();
```

✅ **This ensures** each execution finishes before scheduling the next one.

## setTimeout() Timing Accuracy Hack

To avoid drift, use `performance.now()` or `Date.now()` to measure the actual delay.

```js
let start = performance.now();
setTimeout(() => {
  console.log(`Actual delay: ${performance.now() - start}ms`);
}, 1000);
```

**You may notice the actual delay is greater than 1000ms.** 🔥

## Key Takeaways

- `setTimeout(fn, delay)` **only guarantees a minimum delay**, not exact execution.
- **Blocking operations delay `setTimeout()` execution** (since JS is single-threaded).
- `setTimeout(fn, 0)` **executes after all synchronous code**.
- **Use recursive `setTimeout()` instead of `setInterval()`** for accurate intervals.
- **Use `Date.now()` or `performance.now()` to measure drift.**
