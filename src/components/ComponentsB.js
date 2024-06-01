import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: blue;
  width: 350px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: red;
    margin: 0;
  }

  h2 {
    color: gray;
    margin: 0;
  }
`;

const Button = styled.button`
  background-color: hotpink;
  color: white;
  padding: 10px 20px;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    background-color: deeppink;
  }
`;

function ComponentsB() {
  return (
    <Div>
      <h1>compoB</h1>
      <h2>compoB child</h2>
      <Button>Click Me</Button>
    </Div>
  );
}

export default ComponentsB;
