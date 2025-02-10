**Video Link:** https://youtu.be/eBTBG4nda2A?si=q4-QCgl92qq7ckEo

## Problem 1

```js
function x() {
	var i = 1;
	setTimeout(function(){
		console.log(i);
	}, 1000);
}

x();
```

**OUTPUT**

```js
1000 // simple right
```

But `setTimeout` is non-blocking statement. If `console.log("hello")` is written after the setTimeout the output look like below

```js
hello
1
```

The `setTimeout` takes the function and attach it with the timer, when the timer ends the function will execute.

## Problem 2

```js
function x() {
	for(var i=1; i<=5; i++) {
		setTimeout(function(){
			console.log(i);
		}, i*1000);
	}
	console.log("Namaste JavaScript");
}

x();
```

**OUTPUT**

```js
Namaste JavaScript
6
6
6
6
6
```

When the loop runs the `setTimeout` take the `function` and attach the timer to it with the reference to the `i`. 

Here in every iteration `i` is reference to the same memory space.

Solution using `let` or `const` that is `block scoped`.

Solution using `var`

```js
function x() {
	for(var i=1; i<=5; i++) {
		function close(x) {
			setTimeout(function(){
				console.log(x);
			}, i*1000);
		}
		close(i);
	}
	console.log("Namaste JavaScript");
}

x();
```

**OUTPUT**

```js
Namaste JavaScript
1
2
3
4
5
```
