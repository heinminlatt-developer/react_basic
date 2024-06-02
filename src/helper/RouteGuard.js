import React from "react";
import { useLoginContext } from "../store/LoginContextAPI";
import { Navigate } from "react-router-dom";

function RouteGuard({ children }) {
  const { loggined } = useLoginContext(); // Destructure loggined from the context value

  if (loggined) {
    return children;
  } else {
    return <Navigate to="/" />; // Add return statement here
  }
}

export default RouteGuard;
