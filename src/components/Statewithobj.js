import React, { useContext, useState } from "react";
import { Global } from "../App";

function Statewithobj() {
  const {colors, getDay} = useContext(Global)
  const [data, setData] = useState({ name: "vivek", age: 34 });
  const day='sunday'
  return (
    <div>
      <input
        type="text"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        type="text"
        value={data.age}
        onChange={(e) => setData({ ...data, age: e.target.value })}
      />
      <h1 style={{color:colors}}>Name:{data.name}</h1>
      <h1>Age:{data.age}</h1>
      <button onClick={()=>{getDay(day)}}>clcik h</button>
    </div>
  );
}

export default Statewithobj;
