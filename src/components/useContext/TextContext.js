import React, { useState, createContext } from "react";

export const titleContext = createContext();

function TitleContextProvider(props) {
  const [title, setTitle] = useState("Testing");

  const changeTitle = () => {
    const dd = "Testing" + Math.ceil(Math.random() * 1000);
    setTitle(dd);
  };

  return (
    <titleContext.Provider value={{ title, changeTitle }}>
      {props.children}
    </titleContext.Provider>
  );
}

export default TitleContextProvider;
