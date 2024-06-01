import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 350px;
  height: 150px;
  background-color: grey;

  h1 {
    color: ${(props) => props.theme.colors.accent};
    font-size: ${(props) => props.theme.font.h1size};
  }

  h2 {
    color: steelblue;
    font-size: ${(props) => props.theme.font.h2size};
  }
`;

function ComponentsA() {
  return (
    <Container>
      <h1>ComponentsA</h1>
      <h2>compoA child</h2>
    </Container>
  );
}

export default ComponentsA;
