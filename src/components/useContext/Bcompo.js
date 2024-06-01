import React,{ useContext } from "react";
import Ccompo from "./Ccompo";
import { titleContext } from "./TextContext";

function Bcompo() {
  const { title, changeTitle } = useContext(titleContext);
  return (
    <div>
      <h1>b componetnts:{title}</h1>
      <button onClick={changeTitle}>Click Me</button>
      <Ccompo />
    </div>
  );
}

export default Bcompo;
