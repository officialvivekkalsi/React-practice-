import React, { useContext } from "react";
import { useParams } from "react-router";
import { Global } from "../App";

function User() {
  const {colors} = useContext(Global)
  const params = useParams();
  console.log(params, "params");
  return (
    <div>
      {/* User {params.id}
      <h1>{params.name}</h1> */}
      <h1 style={{color:colors}}>color</h1>
    </div>
      );
}

export default User;
