// dynamic routing
import React from "react";
import { Link } from "react-router-dom";
import { Aray } from "./data";
function Dynamic() {
  return (
    <div>
      {Aray.map((A) => (
        <div key={A.id}>
          <Link to={"/user/" + A.id + "/" + A.name}>{A.name}</Link>
          <h1>{A.roll}</h1>
        </div>
      ))}
    </div>
  );
}

export default Dynamic;
