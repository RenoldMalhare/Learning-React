// import React from "react";
// import ReactDOM from "react-dom/client";

// // const heading = React.createElement(
// //   "h1",
// //   { id: "heading" },
// //   "Hello World form React."
// // );
// // console.log(heading);
// // const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(heading);

// //<div id="parent">
// //   <div id="child">
// //      <h1></h1>
// //      <h2></h2>
// //   </div>
// //   <div id="child">
// //      <h1></h1>
// //      <h2></h2>
// //   </div>
// // </div>

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   [
//     React.createElement("div", { id: "child" }, [
//       React.createElement("h1", {}, "This is React Basics."),
//       React.createElement("h2", {}, "Learning React."),
//     ]),
//   ],
//   [
//     React.createElement("div", { id: "child" }, [
//       React.createElement("h1", {}, "I am h1 tag."),
//       React.createElement("h2", {}, "I am h2 tag."),
//     ]),
//   ]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

//ReactElement =>{object}=>render(converts)=>HtmlElements=>pushcode to html file ;

// const heading = React.createElement("h1", { id: "heading" }, "React ch3"); //REact element = object;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading);
// root.render(heading); //rendering converts react object to html elements and pushes the code to html

// JSX = is transpiled into React element using Bable => then same as reactelement is used for rendering.
//bable is present in PARcel;
//JSX is not html its html like syntax.
//ReactElement
const jsxHeading = //use paranthysis to write it in multiple line and bable uses it to understand start and end point in code.
  (
    <h1 id="heading" className="head">
      React using JSX
    </h1>
  );
const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(jsxHeading);

root.render(jsxHeading);

//React Component
const Title = () => {
  return <h1>React from Component</h1>;
};
//to write proper js code curly bracket is used
// Title is a js fuction at the end of the day so it is executed link Title()
//we can call React element to the React Function using curlybrace{}
const Test = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Title />
      {123 + 231}
      {Title()}
      <Title></Title>
    </div>
  );
};
root.render(<Test />);
