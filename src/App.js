// import React, { Component } from 'react'
// export default class App extends Component {
//   constructor(){
//     super()
//       this.state={
//         color:'red'
//       }

//   }
//   render() {
//     return (
//       <div><h1>{this.state.color}</h1>
//         <button onClick={()=>{this.setState({color:'blue'})}}>change</button>
//       </div>
//     )
//   }
// }

// import React from "react";
// import Used from "./used";
// function App(props) {
//   return (
//     <>
//       im the {props.name}<br></br>
//       im the <Used name='erkej' object='defination of object ' objects={{ name:'god', color:'this is best color'}}/>
//     </>
//   );
// }

// export default App;

// import React, { useState } from 'react'

// function App() {
//   const [state,setState] = useState(null)
//   const [print,setPrint] = useState(false)

//   const fun=(e)=>{
//     setState(e.target.value)
//   }

//   return (
//     <div>
//       {print ? <h1>{state}</h1> : null}
//       <input type="text" onChange={fun} />
//       <button type="submit" onClick={()=>{setPrint(true)}}>click here</button>
//     </div>
//   )
// }

// export default App

// toggle
// import React, { useState } from 'react'

// function App() {
//   const [state,setState] = useState(null)
//   const [show,setShow] = useState(false)
//   return (
//     <div>
//       {show ? <h1>hello</h1> : <h1>hey</h1> }
//       <button type="submit" onClick={()=>{setShow(!show)}}>show</button>
//       <button type="submit" onClick={()=>{setShow(false)}}>hide</button>
//     </div>
//   )
// }
// export default App

// import React, { useState } from 'react'

// function App() {
//   const [state,setState] = useState('')
//   const [opt,setOption] = useState('')
//   const [tick,setTick] = useState(false)
//   const Form = (e) => {
//     console.log(state,opt,tick)
//     e.preventDefault()
//   }

//   return (
//     <div>
//       <form >
//         <input type="text" value={state} onChange={(e)=>{setState(e.target.value)}} />
//         <select value={opt} onChange={(e)=>{setOption(e.target.value)}}>
//           <option>Captain Rogers</option>
//           <option>Thor</option>
//           <option>ironman</option>
//         </select>
//         <input type="checkbox" className="chekbox" value={tick} onChange={(e)=>{setTick(true)}}/>
//         <button type="submit" onClick={Form}>click</button>
//       </form>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// function App() {

//  const good = [{
//     name:'vive kalsi1',
//     class:[3,5,3,4,6,]

//    },{
//       name:'vive kalsi1',

//      },{
//         name:'vive kalsi1',

//        },{
//           name:'vive kalsi1',

//          }]

//   const [nice,setNice] = useState(2)
//   return (
//     <>
//       {nice===1 ? 'good' : nice===2 ? 'ok' : 'bad'}
//       {good.map(g=>(
//         <>
//         <h1>{g.name},{g.class}</h1>
//         <h1>{g.class}</h1>
//         </>
//       ))}
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'

// function App() {
//   const [text,setText]=useState()
//   const [pass,setPass]=useState()
//   const [texterr,setTexterr]=useState(false)
//   const [passerr,setPasserr]=useState(false)
//   const Text=(e)=>{
//     const len=e.target.value.length
//     if (len <5 ){
//       setTexterr(true)
//     } else {
//       setTexterr(false)
//     }
//     console.log(e.target.value)
//     setText(e.target.value)
//   }
//   const Pass=(e)=>{
//     const len=e.target.value.length
//     if (len <5 ) {
//       setPasserr(true)
//     }else {
//        setPasserr(false)
//     }
//     setPass(e.target.value)
//     console.log(e.target.value)
//   }
//   const Submit=(e)=>{
//     if (text.length<5 || pass.length<5){
//       alert('chek values')
//     } else {
//        console.warn(text,pass)
//        e.preventDefault()
//     }
//   }
//   return (
//     <div>
//       <form onSubmit={Submit}>
//         <input type="text" onChange={Text}  /> <span>{texterr ? <h3> enter valid number </h3> : '' }</span>
//         <input type="text" onChange={Pass} /><span>{passerr ? <h3> enter valid number </h3> : ''}</span>
//         <button>click here</button>
//       </form>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Used from './used'
// function App() {
//   const Data =()=>{
//     console.log('the data')
//   }
//   return (
//     <div><Used  data={Data} name='vivek' object='objects'/></div>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import Used from './used'

// export default function App() {
//   const [state,setState]=useState(false)
//     return (
//       <div>
//         {state ? <Used/> : <h1>student will show</h1> }
//         {/* <Used name={state}/> */}
//         <button onClick={()=>setState(!state)}>click here</button>
//       </div>
//   )
// }

// useStatehook
// import React, { useState } from 'react'

// function App() {
//   const [state,setState]= useState(0)
//   return (
//     <div>
//       <button onClick={()=>setState(1)}>{state===1 ? 'clicked' : 'one'}</button>
//       <button onClick={()=>setState(2)}>{state===2 ? 'clicked' : 'two'}</button>
//       <button onClick={()=>setState(3)}>{state===3 ? 'clicked' : 'three'}</button>
//     </div>
//   )
// }

// export default App

// useEffectHook with state
// import React, { useEffect, useState } from 'react'
// import Used from './used'
// function App() {
//   const [count1,setCount1] = useState(10)
//   const [count2,setCount2] = useState(100)

//   useEffect(()=>{
//     console.log('useEffect called'+count1)
//   },[count1])

//   useEffect(()=>{
//     console.log('useEffect Called'+count2)
//   },[count2])

//   return (
//     <div>
//      <Used name='vivek' roll='34'/>
//     <h1>{count1}</h1>
//     <h1>{count2}</h1>
//       <button onClick={()=>{setCount1(count1+1)}}>click count1</button>
//       <button onClick={()=>{setCount2(count2+1)}}>click count2</button>
//     </div>
//   )
// }

// export default App

// Nested List@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// import React from "react";

// function App() {
//   const Information = [
//     {
//       name: "vivek",
//       class: "45",
//       address: { dist: "ptk", teh: "sujanpur", country: "india" },
//     },
//     {
//       name: "vivek",
//       class: "45",
//       address: { dist: "ptk", teh: "amritsar", country: "india" },
//     },
//     {
//       name: "vivek",
//       class: "45",
//       address: { dist: "ptk", teh: "delhi", country: "india" },
//     },
//   ];
//   return (
//     <div>
//       <table border="1">
//         <tbody>
//           <tr>
//             <th>name</th>
//             <th>class</th>
//             <th>address</th>
//           </tr>
//           {Information.map((info) =>
//             <tr>
//               <td>
//                 {info.name}
//               </td>
//               <td>
//                 {info.class}
//               </td>
//               <td><table border={1}><tbody>
//                 <tr><td>{info.address.teh}</td></tr>
//                 <tr><td>{info.address.dist}</td></tr>
//                 <tr><td>{info.address.country}</td></tr>
//                 </tbody></table>
//                 </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;

// reuse of component
// import React from 'react'
// import Used from "./used";

// function App() {
//     const Information = [
//         {
//           name: "vivek",
//           class: "45",
//           address: { dist: "ptk", teh: "sujanpur", country: "india" },
//         },
//         {
//           name: "vivek",
//           class: "45",
//           address: { dist: "ptk", teh: "amritsar", country: "india" },
//         },
//         {
//           name: "vivek",
//           class: "45",
//           address: { dist: "ptk", teh: "delhi", country: "india" },
//         },
//       ];
//   return (
//     <>
//         {Information.map((info)=>(
//             <Used data={info}/>
//         ))}
//         <h1>hello fragment tool</h1>
//     </>
//   )
// }

// export default App

// import React from "react";
// import Used from "./used";

// function App() {
//   const Data = (data) => {
//     alert('good'+data.kalsi)
//   };
//   return (
//     <div>
//       <Used name={Data} />
//     </div>
//   );
// }

// export default App;

// import React, { PureComponent } from 'react'
// import Used from "./used";

// export default class App extends PureComponent {
//   constructor(){
//     super()
//     this.state={count:0}
//   }
//   render() {
//     console.log('render')
//     return (
//       <div>{this.state.count}
//       <Used counting={this.state.count}/>
//         <button onClick={()=>{this.setState({count:this.state.count+1})}}>You can click here</button>
//       </div>
//     )
//   }
// }

// import React, { useMemo, useState } from 'react'

// function App() {
//   const [data,setData]=useState(12)
//   const [data1,setData1]=useState(23)
//   const memo=useMemo(function good(){
//     console.log('function')
//    return data
//   },[data])

//   return (
//     <div>
//       <h1>{data}</h1>
//       <h1>{data1}</h1>
//       <h1>{memo}</h1>
//       <button onClick={()=>{setData(data+1)}}>click here for data</button>
//       <button onClick={()=>{setData1(data1+1)}}>click here for data</button>
//     </div>
//   )
// }

// export default App

// createRef hook
// import React, { Component ,createRef} from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.refer=createRef()
//   }
//   // componentDidMount(){
//   //   console.log(this.refer.current.value=1000)
//   // }
//   gulf(e){
//     console.log(this.refer.current.value)
//     this.refer.current.style.color='red'
//     e.preventDefault()
//     }
//   render() {
//     return (
//       <div><h1>createRef</h1>
//         <form action="">
//           <input type="text"  ref={this.refer}/>
//           <button onClick={()=>this.gulf()}>click here to change </button>
//         </form>
//       </div>
//     )
//   }
// }

// import React, { useRef } from 'react'

// function App() {
//   const refer=useRef()
//   const good=()=>{
//     console.log('good')
//     console.log(refer.current.value)
//     refer.current.style.color='red'
//     refer.current.focus()
//   }
//   return (
//     <div>
//  <input type="text"  ref={refer}/>
//  <button onClick={good}>clik here</button>
//     </div>
//   )
// }

// export default App

// useFarward hook @@@@@@@@@@@@@@@@@@@@@@@ not success @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// import React, { useRef } from 'react'
// import Used from "./used";

// function App() {
//   const refer=useRef()
//   const fun=()=>{
//     console.log('good')
//     refer.current.style.color='red'
//   }
//   return (
//     <div className="App">
//         <Used refers={refer}/>
//         <button onClick={fun}>click here</button>
//     </div>
//   )
// }

// export default App

// controled comp
// import React, { useState } from 'react'

// function App() {
//   const [val,setValue]=useState()
//   return (
//     <div>App
//       <input type="text"  value={val} onChange={(e)=>{setValue(e.target.value)}}/>
//       value:{val}
//     </div>

//   )
// }

// export default App

// uncontroled comp
// import React, { useRef } from 'react'

// function App() {
//   const inputRef=useRef()
//   const inputRef1=useRef()
//   const inputRef2=useRef()
//   const getData=(e)=>{
//       e.preventDefault()
//       console.log('inputRef',inputRef.current.value='34')
//       console.log('inputRef1',inputRef1.current.value='34')
//       console.log('inputRef2',inputRef2.current.value='34')
//       const go=document.getElementById('idno3')
//       console.log('inputRef3',go.value='34')
//       inputRef.current.style.color='red'
//       inputRef1.current.style.color='blue'
//       inputRef2.current.style.color='orange'
//   }
//   return (
//     <div><form onSubmit={getData}>
//       <input type="text" ref={inputRef} />
//       <input type="text" ref={inputRef1} />
//       <input type="text" ref={inputRef2} />
//       <input  id='idno3' type="text" />
//       <button>Submit</button>
//     </form>

//     </div>
//   )
// }

// export default App

// hight order comp
// import React, { useState } from 'react'

// function App() {
//   return (
//     <div>
//       <HOCred/>
//       <HOCorange/>
//       <HOCblue/>
//       <HOCgreen/>
//       <HOCred/>
//     </div>
//   )
// }

// function HOCred() {
//   return (
//     <div>
//       <h1 style={{color:'red'}}><Counters/></h1>
//     </div>
//   )
// }
// function HOCorange() {
//   return (
//     <div>
//       <h1 style={{color:'orange'}}><Counters/></h1>
//     </div>
//   )
// }function HOCblue() {
//   return (
//     <div>
//       <h1 style={{color:'blue'}}><Counters/></h1>
//     </div>
//   )
// }function HOCgreen() {
//   return (
//     <div>
//       <h1 style={{color:'green'}}><Counters/></h1>
//     </div>
//   )
// }

// function Counters() {
//   const [counter,setCounter]=useState(0)
//   return (
//     <div><h1>{counter}</h1>
//       <button onClick={()=>{setCounter(counter+1)}}>click</button>
//     </div>
//   )
// }

// export default App

// import React, { Component } from "react";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = { count: 6 };
//   }
//   componentDidUpdate(preProp, preState) {
//     console.log("good", preState);
//     if (preState === this.state.count) {
//       alert("matched");
//     } else {
//       alert("good");
//     }
//   }
//   render() {
//     console.log("render");
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button
//           onClick={() => {
//             this.setState({ count: this.state.count });
//           }}
//         >
//           click here
//         </button>
//       </div>
//     );
//   }
// }

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/about";
import Contacts from "./components/Contacts";
import ForParams from "./components/Forparams";
import Filter from "./components/Filter";
import NestedRoute from "./components/NestedRoute";
import Homepage from "./components/Homepage";
import "./App.css";
import Protected from "./components/Protected";
import Login from "./components/Login";
import Dynamic from "./components/Dynamic";
import User from "./components/User";
import { Aray } from "./components/data";
import Statewithobj from "./components/Statewithobj";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* <Route path='/' element={<Homepage/>} /> */}
          <Route path="/" exact element={<Protected Component={Homepage} />} />
          <Route path="/about/" element={<Protected Component={About} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/Forparams/:name" element={<ForParams />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/dynamic" element={<Dynamic />} />
          <Route path="/statewithobj" element={<Statewithobj />} />
          <Route path="/user/:id/:name" element={<User />} />
          <Route path="/*" element={<h1>Not Found</h1>} />
          <Route path="/NestedR" element={<NestedRoute />}>
            {/* <Route path='/about' element={<About/>} /> */}
            <Route path="contacts" element={<Contacts />} />
            {/* <Route path='/params/:name' element={ <ForParams/> } /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
