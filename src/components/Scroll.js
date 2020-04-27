import React from "react";
import styled from "styled-components";

const ScrollBox = styled.div`
  overflow-y: scroll;
  border: 1px solid black;
  height: 70vh;
  margin: 0 10rem;
`;

const Scroll = (props) => {
  return <ScrollBox>{props.children}</ScrollBox>;
};

export default Scroll;
