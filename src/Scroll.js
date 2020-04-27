import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "600px",
        width: "70vw",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
