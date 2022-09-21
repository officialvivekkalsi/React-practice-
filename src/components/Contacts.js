import React from 'react'
import { useNavigate } from 'react-router'

function Contacts() {
  const Navigate=useNavigate()
  const Navigateto=(url)=>{
    // const x=false;
    // if(x){
    //   Navigate('/filter')
    // } else {
    //   Navigate('/params/vansh')
    // }
    Navigate(url)
  }
  return (
    <div> <h1>Contacts</h1>
    <button onClick={()=>Navigateto('/filter')}>filter</button>
    <button onClick={()=>Navigateto('/params/vivek')}>params</button>
    </div>
  )
}

export default Contacts