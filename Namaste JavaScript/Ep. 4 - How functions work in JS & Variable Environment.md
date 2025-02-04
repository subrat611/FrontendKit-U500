Let's debug the below code ⬇️.

```js
var x = 1;
a();
b();
console.log(x);

function a() {
	var x = 10;
	console.log(x);
}

function b() {
	var x = 100;
	console.log(x);
}
```

By understanding above code and how the whole program works behind the scene, are helpful for learning scope, closure etc.

**Output of above code**

```js
10 // a() -> console.log(x)
100 // b() -> console.log(x)
1 // console.log(x)
```

### How the call stack works behind the scenes

![callstack-1](asset/Pasted%20image%2020250204212802.png)

A global execution context moved into the stack.

![callstack-2](asset/Pasted%20image%2020250204213025.png)

After the execution of function `a()` it will removed from the call stack.
Here the created context have it's own local variable (the variables that are within scope of a), Which is `x` inside the function `a()`.

![callstack-3](../Pasted%20image%2020250204213202.png)

![callstack-4](../Pasted%20image%2020250204213550.png)

After the execution of whole program the `global execution context` is also removed from the call stack.
