import React, { Component } from "react";
import "./Hello.css";

//Think of React as creating functions that take parameters

const Hello = (props) => {
  return (
    <div className="f1 tc">
      <h1>Hello World</h1>
      <p>Welcome to React</p>
      <p>{props.greeting}</p>
    </div>
  );
  //   render() {
  //     //   adding html to js
  //     //   class is a reserved keyword in javascript, that's why we can't use it
  //     //   because this is JS, that's why we have to use className
  //     return (
  //       <div className="f1 tc">
  //         <h1>Hello World</h1>
  //         <p>Welcome to React</p>
  //         <p>{this.props.greeting}</p>
  //       </div>
  //     );
  //   }
};

//React uses JSX to create a virtual DOM
//export default means export only one thing
export default Hello;
