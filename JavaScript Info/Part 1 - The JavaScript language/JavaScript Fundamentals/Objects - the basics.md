## What is an Object?

- Objects store **keyed collections** of data and complex entities.    
- Almost everything in JavaScript revolves around objects.
- Objects are created using **curly brackets** `**{}**` (object literal) or `new Object()`.
## Creating an Object

```js
let user = {};  // Object literal {...optional properties}
let user = new Object();  // Object constructor
```
## Properties in Objects

- **Syntax:** `key: value` pairs.
- Keys are strings (or symbols), values can be any type.

```js
let user = {
  name: "John",
  age: 30
};
```

- **Access properties:**
    - Dot notation: `user.name`
    - Bracket notation: `user["age"]`
## Modifying Objects

```js
user.isAdmin = true;  // Add property
delete user.age;  // Remove property
```

**Multiword properties** must be quoted:

```js
user["likes birds"] = true;
```

Use bracket notation for dynamic keys:

```js
let key = "likes cats";
user[key] = true;
```
## Special Features

**Computed Properties:**

Keys can be dynamic:

```js
let fruit = "apple";
let bag = { [fruit]: 5 }; // { apple: 5 }
```

**Property Value Shorthand**

When key and variable name are the same:

```js
function makeUser(name, age) {
  return { name, age };
}
```
## Property Names

- Can be any string, including reserved keywords or numbers:

```js
let obj = { for: 1, 0: "zero" };
```

- Special case: `__proto__` behaves differently (will explore later).
## Property Existence

- Use `"key" in object` to check for a property:

```js
let user = { age: undefined }; 
alert("age" in user); // true
```
## Looping Through Properties

- Use `for..in` to iterate over all keys:

```js
let user = { name: "John", age: 30 };
for (let key in user) {
  alert(key); // Outputs keys
  alert(user[key]); // Outputs values
}
```

- **Order**: Integer keys are sorted; others follow creation order.

## Property Order in Objects

- Integer keys are sorted in ascending order.
- Other keys appear in creation order.

```js
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "1": "USA",
  "44": "UK"
};
for (let code in codes) {
  console.log(code); // "1", "41", "44", "49" (sorted numerically)
}
```

- To **preserve order**, use non-integer keys:

```js
let codes = { "+49": "Germany", "+41": "Switzerland" };
```
