> Everything in JavaScript happens inside an `Execution context`

Components of Execution context - `memory(variable environment)` & `code(thread of execution)`

When JavaScript code runs what happens?

#### **Step 1 -> A Global execution context created (which has memory & code component).**

*When the below JavaScript code runs a global execution context is created which has two components memory & code.*

It is created in two phases - `memory creation`, `code execution`.

![global-execution-context-created](asset/Pasted%20image%2020250128205706.png)

#### **Step 1.1 -> This is the `first phase` called `Memory creation`. JavaScript allocate memory to variables & functions.**

*In the **`First phase`**, JavaScript skims through the whole program line by line and it allocates memory to the variables & functions. In `first phase` the variable holds the value `undefined` & the function holds the value as the `function definition` (whole function)*

![step-2-first-phase](asset/Pasted%20image%2020250128215424.png)

#### **Step 2 -> Code Execution phase**

*Once again JavaScript skims through the whole program line by line and execute the code. Where the every calculation happens*.

*Here the values are got assigned to the identifiers(also knows as variables/placeholders).*

*If you see the square function is already assigned with the function definition (i.e nothing to execute) that's why the pointer moves to the line square2.*

![step-2-code-execution-variable-assigned-with-actual-value](asset/Pasted%20image%2020250128220935.png)

*At the point square2 the function call or invoke happen.*

> When a function invocation happens a new execution context is created.

![code-execution-square-2-function-invoke](asset/Pasted%20image%2020250128221618.png)

*Above the same is going again memory creation & code execution*.

*On the code execution phase, when the line `return` comes. The whole control returns to the execution context from where the function invoked.*

![code-execution-return-statement](asset/Pasted%20image%2020250128222223.png)

*After the control returns to the execution context from where the function invoked the newly created execution context completely deleted*

![code-execution-delete-execution-context](asset/Pasted%20image%2020250128222400.png)

Same is for the next line square3.

After the whole program executed the `global execution context` is also deleted.

## Call Stack

*At the bottom of the stack or the first entry is `global execution context`*.

Whenever a new function invoke a new execution context is push to the stack. After the completion of the function invocation it get pop out from the stack.

After the completion of whole program the `global execution context` get removed from stack.

***Call stack maintains the order of execution of execution context***

**Some other names of call stack :**

- Execution context stack
- Program stack
- Control stack
- Runtime stack
- Machine stack