import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
function Homepage() {
  return (
    <div><h1>Homepage</h1>
      <h1><Link to='/statewithobj'>state</Link></h1>
    </div>
  )
}

export default Homepage