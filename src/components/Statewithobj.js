import React, { useState } from "react";

function Statewithobj() {
  const [data, setData] = useState({ name: "vivek", age: 34 });
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
      <h1>Name:{data.name}</h1>
      <h1>Age:{data.age}</h1>
    </div>
  );
}

export default Statewithobj;
