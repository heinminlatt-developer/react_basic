import React,{useContext} from "react";
import { titleContext } from "./TextContext";


function Acompo() {
  const {title}=useContext(titleContext)
  return (
    <div>
      <h1>a components:{title}</h1>
    </div>
  );
}

export default Acompo;
