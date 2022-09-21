import React from "react";
import { useParams } from "react-router";

function User() {
  const params = useParams();
  console.log(params, "params");
  return (
    <div>
      User {params.id}
      <h1>{params.name}</h1>
    </div>
  );
}

export default User;
