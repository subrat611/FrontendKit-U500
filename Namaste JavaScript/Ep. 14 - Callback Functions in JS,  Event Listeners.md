**Video Link:** https://youtu.be/btj35dh3_U8?si=JBhySM2Q2KsktI7F

1. What is a callback function in js.
2. JavaScript is a synchronous and single threaded language.
3. Blocking main thread
4. Power of callbacks?
5. About Event listeners
6. Closures demo with event listeners
7. Scope demo with event listeners
8. Garbage collection & removeEventListeners

## Callback Function in JavaScript

A callback function is a function that is passed as an argument to another function and is executed later, usually after an operation completes.

```js
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
```

### Why Use Callback Functions?

- Handling Asynchronous Operations (e.g., API calls, setTimeout)
- Code Reusability & Flexibility
- Customizing Behavior

### Callback in Asynchronous Code

```js
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);
```

📌 `setTimeout` takes a **callback function** and executes it after 2 seconds.

### Callback Hell (Nested Callbacks Issue)

When callbacks are deeply nested, it makes the code hard to read and maintain.

```js
fetchData(() => {
  processData(() => {
    saveData(() => {
      console.log("All done!");
    });
  });
});
```

**Solution:** Use **Promises** or **Async/Await** instead.

## Summary

✅ A **callback function** is a function passed as an argument to another function.  
✅ It is commonly used for **asynchronous operations**.  
✅ It is also used in **array methods** like `.map()`, `.filter()`, `.forEach()`.  
✅ Too many nested callbacks lead to **callback hell**, which can be avoided with **Promises** or **Async/Await**.

## Blocking main thread

```js
setTimeout(function(){
	console.log("Timer");
}, 5000)

function x(y) {
	console.log("x");
	y();
}

x(function y(){
	console.log("y");
})
```

```js
// OUTPUT
x
y
Timer
```

JavaScript has one `call stack` and you can call this as `main thread`. Whatever is executed in the program it executed through the `call stack`. 

So If any operation block the `call stack` that is known as **`blocking the main thread`**

## Event Listeners

```js
document.getElementById("clickMe").addEventListener("click", function(){
	// this is a callback function
	// when the event occurs this function push into the call stack and execute
	
	console.log("Button Clicked"); // put a debugger here and check on call stack
})
```

**Qus:** Count the times the button clicked.

Here instead of creating a global variable it's better to create a closure.

```js
function attachEventListeners() {
	let count = 0;
	
	document.getElementById("clickMe").addEventListener("click", function(){
		// this is a callback function
		// when the event occurs this function push into the call stack and execute
		
		console.log("Button Clicked", ++count); // put a debugger here and check on call stack
	})
}
```

![evnet-listener-with-closures](asset/Pasted%20image%2020250211205605.png)

![event-listeners-clouser-2](asset/Pasted%20image%2020250211205745.png)

## Garbage Collection & Remove Event Listeners

Garbage collection (GC) is an automatic memory management process in JavaScript that removes **unreachable objects** from memory. However, improperly managed **event listeners** can cause **memory leaks** if they keep references to objects that should be garbage collected.

Even in the large code base you have seen that lot of people remove `Event Listeners` on certain events. (But why?)

- Event Listeners are heavy (i.e it takes memory). 
	- Because when you attach event listeners it forms closures. (Even the call stack is empty).
- For this the page get slower.

### Event Listeners & Memory Leaks

Event listeners **hold references** to DOM elements. If not removed properly, they prevent elements from being garbage collected, causing memory leaks.

#### Example of an Event Listener Causing a Memory Leak

```js
document.getElementById("btn").addEventListener("click", function () {
  console.log("Button clicked!");
});
```

 If the button element is removed from the DOM (document.getElementById("btn").remove()), the event listener still holds a reference, preventing garbage collection.

#### How to Properly Remove Event Listeners?

To remove an event listener, you must pass the **same function reference** used in `addEventListener()`.

```js
function handleClick() {
  console.log("Button clicked!");
}

const btn = document.getElementById("btn");
btn.addEventListener("click", handleClick);

// Later, when we want to remove it
btn.removeEventListener("click", handleClick);
```
