import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Five from "../images/five.jpg";

const FlexDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 0 20px;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.primary};
`;

const Flex = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Button = styled.button`
  background-color: hotpink;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: indigo;
  }
`;

function Home() {
  return (
    <>
      <Nav />
      <FlexDiv>
        <Flex>
          <h1>Brighter Myanmar</h1>
          <h4 style={{ marginTop: "20px" }}>
            Professional Programming Class Training
          </h4>
          <Button>Download Apk</Button>
        </Flex>
        <Flex>
          <img src={Five} width="80%" alt="Five" />
        </Flex>
      </FlexDiv>
      <FlexDiv>
        <Flex>
          <img src={Five} width="80%" alt="Five" />
        </Flex>
        <Flex>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Flex>
      </FlexDiv>
      <FlexDiv>
        <Flex>
          <img src={Five} width="80%" alt="Five" />
        </Flex>
        <Flex>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Flex>
      </FlexDiv>
      <FlexDiv>
        <Flex>
          <img src={Five} width="80%" alt="Five" />
        </Flex>
        <Flex>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Flex>
      </FlexDiv>
    </>
  );
}

export default Home;
