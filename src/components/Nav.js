import React from "react";
import Logo from "../images/two.jpg";
import styled from "styled-components";
import { useLoginContext } from "../store/LoginContextAPI";
import { useNavigate } from "react-router-dom"; // Assuming you use v6 of react-router-dom

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 45px;
  background-color: ${(props) => props.theme.colors.primary};
  padding-left: 20px;
  padding-right: 20px;
`;

const LeftDiv = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UIDiv = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StyledH1 = styled.h1`
  margin-left: 10px;
  color: #ff8800;
`;

const StyledLi = styled.li`
  margin: 0 10px;
  position: relative;

  &:after {
    background: hotpink;
    content: "";
    display: block;
    height: 5px;
    width: 100%;
    position: absolute;
    bottom: -5px;
    left: 0;
    transform: scaleX(0);
    transition: transform 300ms;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;

function Nav() {
  const { loggined, setLoggined } = useLoginContext();
  const navigate = useNavigate();

  const logout = () => {
    setLoggined(false);
    navigate("/");
  };

  return (
    <FlexDiv>
      <LeftDiv>
        <img src={Logo} width="30px" height="30px" alt="Logo" />
        <StyledH1>Brighter Myanmar</StyledH1>
      </LeftDiv>
      <RightDiv>
        <UIDiv>
          <StyledLi>
            <a href="#">Download</a>
          </StyledLi>
          <StyledLi>
            <a href="#" onClick={logout}>
              {loggined ? "Logout" : "Login"}
            </a>
          </StyledLi>
        </UIDiv>
      </RightDiv>
    </FlexDiv>
  );
}

export default Nav;
