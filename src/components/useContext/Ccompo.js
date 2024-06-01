import React, { useContext } from "react";
import { titleContext } from "./TextContext";

function Ccompo() {
  const { title } = useContext(titleContext);
  return (
    <div>
      <h1>c components:{title}</h1>
    </div>
  );
}

export default Ccompo;
