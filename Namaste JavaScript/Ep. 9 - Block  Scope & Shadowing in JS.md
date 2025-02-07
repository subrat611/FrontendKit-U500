Video Link - https://youtu.be/lW_erSjyMeM?si=iKP1ZQbukPSfyNiw

A **block** in JavaScript refers to the code enclosed within `{}` (curly braces), such as inside an `if` statement, loop, or function.

- **`let` and `const` have block scope**, meaning they are accessible only within the block they are declared in.
- **`var` does NOT have block scope**, meaning it is accessible outside the block if declared inside one.

**Block Scope:** What all variables & functions we can access inside the block.

![demo-block-scope-1](asset/Pasted%20image%2020250207084628.png)

#### Example 1: Block Scope with `let` and `const`

```js
{
  let a = 10;
  const b = 20;
  console.log(a, b); // ✅ 10, 20 (Inside the block)
}
console.log(a, b); // ❌ ReferenceError (Outside the block)
```

#### Example 2: `var` is NOT block-scoped

```js
{
  var c = 30;
}
console.log(c); // ✅ 30 (Accessible outside the block)
```

- `var c` is **function-scoped**, not block-scoped, so it leaks outside.

## Shadowing

**Shadowing** occurs when a variable in an inner scope **has the same name** as a variable in an outer scope. The inner variable **overrides (shadows)** the outer variable **within that block**.

#### Example 3: Shadowing with `let`

```js
let x = 5;
{
  let x = 10; // Shadows the outer x
  console.log(x); // ✅ 10 (Inner `x` is used)
}
console.log(x); // ✅ 5 (Outer `x` is still accessible)
```

```js
const x = 100;
{
    const x = 10; // Shadows the outer x
    console.log(x); // ✅ 10 (Inner `x` is used)
}
console.log(x); // ✅ 100 (Outer `x` is still accessible)
```

- The `x` inside the block **shadows** the `x` outside.

#### Example 4: Shadowing with `var`

```js
var y = 15;
{
  var y = 25; // Shadows outer `y`
  console.log(y); // ✅ 25
}
console.log(y); // ✅ 25 (Outer `y` is also changed)
```

- Since `var` is **not block-scoped**, the change inside the block **modifies the outer `y`**.

#### Example 5: Shadowing across function scope

```js
let z = 50;
function test() {
  let z = 100; // Shadows the global z
  console.log(z); // ✅ 100 (Inner z is used)
}
test();
console.log(z); // ✅ 50 (Outer z is still accessible)
```

- The `z` inside `test()` **shadows** the global `z`.

### Illegal Shadowing

Shadowing `let` or `const` using `var` **inside the same scope** is **not allowed** and causes an error.

#### Example 6: Illegal Shadowing

```js
let p = 30;
{
  var p = 40; // ❌ SyntaxError: Identifier 'p' has already been declared
}
```

- `let` cannot be shadowed by `var` in the same scope.
- However, **shadowing `var` with `let` is allowed**:

```js
var q = 60;
{
  let q = 70; // ✅ Allowed
  console.log(q); // 70
}
```

### Key Takeaways

|Concept|`var`|`let` / `const`|
|---|---|---|
|Scope|Function-scoped|Block-scoped|
|Accessible outside block?|✅ Yes|❌ No|
|Can shadow outer variable?|✅ Yes, but modifies outer variable|✅ Yes, limited to the block|
|Can be shadowed by `var`?|✅ Yes|❌ No (SyntaxError)|

✅ **Best Practice:**

- Use `let` and `const` to **avoid accidental global modifications**.
- Avoid **shadowing unless necessary** for readability.