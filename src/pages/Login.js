import React, { useRef } from "react";
import Nav from "../components/Nav";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../store/LoginContextAPI";

const Div = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
`;
const Input = styled.input`
  display: block;
  width: 250px;
  padding: 10px 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  background-color: hotpink;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
`;

function Login() {
  const navigate = useNavigate();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const { setLoggined } = useLoginContext();

  const login = (e) => {
    e.preventDefault();
    let data = {
      phone: phoneRef.current.value,
      password: passwordRef.current.value,
    };
    passwordRef.current.value = "";
    phoneRef.current.value = "";
    setLoggined(true);
    navigate("/home");
  };
  return (
    <>
      <Nav />
      <Div>
        <h1 style={{ marginBottom: "20px" }}>GO TO HOME PAGE</h1>
        <form onSubmit={login}>
          <Input type="tel" placeholder="phone" ref={phoneRef} />
          <Input type="password" placeholder="password" ref={passwordRef} />
          <Button type="submit">Login</Button>
        </form>
      </Div>
    </>
  );
}

export default Login;
