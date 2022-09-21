import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css";
function NestedRoute() {
  return (
    <div className="App">
      <h1>Nested Routes</h1>
      <Link to="/about/">About</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/params/Smile">params</Link>
      <Outlet />
    </div>
  );
}

export default NestedRoute;
