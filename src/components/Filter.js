import React from "react";
import { useSearchParams } from "react-router-dom";

function Filter() {
  const [params, setParams] = useSearchParams();
  console.log(params.get("age"));
  const age = params.get("age");
  const city = params.get("city");

  return (
    <div>
      <h1>the params:{age}</h1>
      <h1>the params:{city}</h1>
      {/* <input type="text" placeholder='type here' onChange={(e)=>setParams({text:e.target.value,age:65,city:'jalandhar'})} /> */}
      <input
        type="text"
        placeholder="text here"
        onChange={(e) => {
          setParams({ text: e.target.value, age: 34, city: "ludhiana" });
        }}
      />
      <button
        onClick={() => {
          setParams({ age: 45, city: "pathankot" });
        }}
      >
        click here
      </button>
    </div>
  );
}

export default Filter;
