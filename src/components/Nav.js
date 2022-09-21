// import React, { Component } from "react";

// // this is uselifecyclemethod in class component
// export default class Used extends Component {
//   constructor(){
//     super()
//      this.state={
//       count:0
//     }
//     console.log('constructor')
//   }
//   // componentDidUpdate(preState,preProp){
//   //   componentDidMount(){
//   //   console.log('component did update',preProp,this.state.count)
//   //   if (preProp===this.state.count){
//   //     alert('preprop and count is same')
//   //   }else {
//   //     alert ('good')
//   //   }
//   // }
//   // shouldComponentUpdate(){
//   //   console.log('shouldcomponentupdate',this.state.count)
//   //   if (this.state.count>5 && this.state.count<10){
//   //     return(true)
//   //   } else {
//   //     return(false)
//   //   }
//   // }
//   componentWillUnmount(){
//     alert('Component Will Unmount')
//   }
//   render() {
//     console.log('render method')
//     return (
//       <div>
//        <h1>this is used component</h1>  
//        {/* <h1>{this.state.count}</h1>  */}
//         {/* <h1>hello {this.props.name} </h1> */}
//         {/* <button onClick={()=>this.setState({ count:this.state.count+1})}>Click Used</button>
//         <button onClick={()=>this.setState({ count:this.state.count-1})}>Click Used</button> */}
//         </div>
//     );
//   }
// }

// useEffect use in props
// import React, { useEffect } from 'react'

// function Used(props) {
//   useEffect(()=>{
//     console.log('useEffect called of Used Props'+props.name)
//   },[props.name])
//   useEffect(()=>{
//     console.log('useEffect is called of Used Props'+ props.roll)
//   },[props.roll])
//   return (
//     <div>
//       <h1>this is my name :{props.name}</h1>
//       <h1>this is my roll :{props.roll}</h1>
//     </div>
//   )
// }

// export default Used

// import React from 'react'

// function Used(props) {
//   return (
//     <div className='Container' style={{backgroundColor:'red',  position:'relative'}}>
//       <span>{props.data.name}</span>
//       <span>{props.data.class}</span>
//       <span>{props.data.address.teh}</span>
//     </div>
//   )
// }

// export default Used

// import React from 'react'

// function Used(props) {
//   const data={kalsi:'vive'}
//   return (
//     <div>
//     <button onClick={()=>props.name(data)}>click here</button>
//     </div>

//   )
// }

// export default Used

// import React, { PureComponent } from 'react'

// export default class Used extends PureComponent {
//   render() {
//     console.log('render used')
//     return (
//       <div>Used : {this.props.counting}</div>
//     )
//   }
// }

// useFarward hook @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
import React from "react";
import {NavLink} from 'react-router-dom'
import '../App.css'
function Nav() {
  // const Navigate=useNavigate()
  // const fun=()=>{
  //   Navigate('/about')
  // }
  return (
    <div className="navlinks">
      <NavLink className="diff" to='/'><h1 >Vivek kalsi</h1></NavLink>
      <div className="links">
      <NavLink className="navlinksli" to='/'>Home</NavLink>
      {/* <NavLink className="navlinksli" to='/login/'>Login</NavLink> */}
      <NavLink className="navlinksli" to='/about/'>About</NavLink>
      <NavLink className="navlinksli" to='/contacts'>contact</NavLink>
      <NavLink className="navlinksli" to='/filter' state={{name:'vivek',class:34}}>filter</NavLink>
      <NavLink className="navlinksli" to='/NestedR'>NestedR</NavLink>
      <NavLink className="navlinksli" to='/dynamic'>Dynamic</NavLink>
      {/* <button onClick={fun}>Navigate</button> */}
      </div>
    </div>
    
  );
}

export default Nav;
