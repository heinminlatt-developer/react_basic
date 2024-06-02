import React from "react";
import { Container } from "./styles/Share";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalCss } from "./styles/GlobalCss";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginContextProvider from "./store/LoginContextAPI";
import RouteGuard from "./helper/RouteGuard";

const theme = {
  colors: {
    primary: "grey",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <LoginContextProvider>
        <Container>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route
                path="/home"
                element={
                  <RouteGuard>
                    <Home />
                  </RouteGuard>
                }
              />
            </Routes>
          </Router>
        </Container>
      </LoginContextProvider>
    </ThemeProvider>
  );
}
export default App;
