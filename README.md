# Portfolio Website created using React



## Q & A

### 1. What is NPM?
NPM which stands for Node Package Manager is like a library for JavaScript, where you can borrow code written by others. It’s used with Node.js, which lets JavaScript run outside a web browser.

### 2. What is SPA?
SPA stands for Single Page Application. It’s a type of web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of the browser loading entire new pages. This leads to a faster, more seamless user experience, similar to a desktop application.

### 3. What is the event loop?
The event loop is a key part of JavaScript’s concurrency model. It’s responsible for executing code, collecting and processing events, and executing queued sub-tasks.

### 4. What is the difference between export x and export default x? How do you import them differently?
In JavaScript, export and export default are used to share code between different files, but they are used in slightly different ways.

`export x`: This is known as a named export. You can have multiple named exports in a file. When you want to import functions or variables exported this way, you have to use the same name and enclose it in curly braces {}.
`export default x`: This is a default export and you can only have one default export per file. When you import, you don’t need to use curly braces {} and you can name the import whatever you want.

### 5. Why do you use className as a property in React and not class?
In JavaScript, class is a reserved keyword used for class declarations. Since JSX is an extension of JavaScript, using class as an attribute name would conflict with this reserved keyword. That’s why React uses className instead of class to define CSS class names. This way, it avoids any confusion with the class keyword in JavaScript.

### 6. Why should you not write the following? What will happen? 
```jsx
<button onClick={setCounter(counter + 1)}> +1 </button>
```
It will cause the setCounter function to be invoked every time React re-renders the component, not just when the button is clicked. This is because setCounter(counter + 1) is an invocation of the function, not a reference to it. Instead, you should pass a function to the onClick handler that will be invoked when the button is clicked.

### 7. What is object deconstruction and how is it connected to React components (example)?
Object destructuring is a feature in JavaScript that allows you to extract properties from an object and bind them to variables.
Here’s an example of how you might use destructuring with props in a functional React component:
```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage
<Greeting name="John" />

```

### 8. How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?
In React, you can use HTML and JavaScript together in the same function thanks to a syntax extension for JavaScript called JSX. JSX looks like HTML, but it’s actually JavaScript.
Here’s how it works:
JSX: JSX allows you to write HTML-like syntax in your JavaScript code. This syntax is used to define the structure of the user interface. For example, 
```jsx
<div>Hello, world!</div> 
```
is valid JSX.

Components: In React, you build user interfaces using components. A component is a JavaScript function that returns JSX. For example:

```jsx
function Greeting() {
  return <h1>Hello, world!</h1>;
}

```

In this example, Greeting is a React component that returns a JSX element.

Babel: Under the hood, a tool called Babel is used to transform JSX into regular JavaScript. This is necessary because browsers can’t understand JSX. Babel takes care of this transformation during the build process.So, when you’re writing a React component, you’re actually writing JavaScript, not HTML. The HTML-like syntax is just JSX, which gets transformed into JavaScript by Babel.

### 9. What is async/await? Bring an example
`async`: This keyword is used before a function to indicate that the function will return a promise. Even if it returns a non-promise value, JavaScript automatically wraps it in a resolved promise.
```jsx
async function f() {
  return 1;
}
// This function returns a resolved promise with the result of 1
f().then(alert); // Outputs: 1
```
`await`: This keyword can only be used inside an async function and makes JavaScript wait until a promise settles, and then resumes the function execution with the promise result.
```jsx
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves
  alert(result); // Outputs: "done!"
}
f();

```

### 10. What is a Promise? Bring an example
A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It’s a way to handle asynchronous operations without blocking the rest of your code.
```jsx
let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;
  // The producing code (this may take some time)
  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) { console.log(value); }, // Outputs: "OK"
  function(error) { console.log(error); }
);

```





