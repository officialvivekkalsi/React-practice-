import React from 'react'
import { useParams } from 'react-router'

function Forparams() {
  const {name}=useParams()
  return (
    <div>
      <h1>My name is {name} kalsi</h1>
    </div>
  )
}

export default Forparams