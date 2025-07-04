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

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "This is React Basics."),
      React.createElement("h2", {}, "Learning React."),
    ]),
  ],
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I am h1 tag."),
      React.createElement("h2", {}, "I am h2 tag."),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
