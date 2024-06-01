import React from "react";
import Acompo from "./components/useContext/Acompo";
import Bcompo from "./components/useContext/Bcompo";
import TitleContextProvider from "./components/useContext/TextContext";

function App() {
  return (
    <TitleContextProvider>
      <div className="container">
        <h1 className="text-center text-color-red">Context API</h1>
        <Acompo />
        <Bcompo />
      </div>
    </TitleContextProvider>
  );
}

export default App;
