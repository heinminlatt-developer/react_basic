import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

const LoginContextProvider = (props) => {
  const [loggined, setLoggined] = useState(false);
  const value = { loggined, setLoggined };

  return (
    <LoginContext.Provider value={value}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
