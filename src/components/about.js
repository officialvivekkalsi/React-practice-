import React from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
// import '../App.css'
function About() {
  // const Navigate=useNavigate()
  // const fun=()=>{
  //   Navigate('/used')
  // }
  const { name } = useParams();
  return (
    <div className="App">
      this is about page import React from 'react'
      <NavLink to="/Forparams/vivek">vivek</NavLink>
      <br />
      <NavLink to="/Forparams/Smile">Smile</NavLink>
      <br />
      <NavLink to="/Forparams/Vansh">Vansh</NavLink>
      <br />
      <NavLink to="/Forparams/Aman">Aman</NavLink>
      <br />
    </div>
  );
}

export default About;
