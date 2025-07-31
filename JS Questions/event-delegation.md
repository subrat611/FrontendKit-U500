# Explain Event Delegation

Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of individual child elements. This works because of event bubbling.

**Event bubbling:**

Event bubbling is a behavior in the DOM where an event triggered on a child element first, runs its handler, then bubbles up and triggers handlers on its parent, grandparent, and so on up to the root.

```js
<div id="parent">
  <button id="child">Click Me</button>
</div>;

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

// OUTPUT:
// Child clicked
// Parent clicked
```

- Happens by default for most events like click, input, etc.
- Can be stopped using: `event.stopPropagation();`

Comes to Event Delegation

**Why use it?**

- Better performance (especially with many dynamic elements).
- Handles dynamic content added later.
- Cleaner code (fewer event listeners)

```js
<ul id="parent">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>;

document.getElementById("parent").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("Clicked:", event.target.textContent);
  }
});
```

- Uses event.target to identify the actual element clicked.
- Often used with lists, tables, menus, or dynamically added elements.
- Event must bubble (e.g., click, not focus).
