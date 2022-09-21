import React, { useEffect } from "react";
import { useNavigate } from "react-router";

function Protected(props) {
  const { Component } = props;
  const Navigate = useNavigate();
  useEffect(() => {
    const login = localStorage.getItem("login");
    if (!login) {
      Navigate("/login");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
}

export default Protected;
