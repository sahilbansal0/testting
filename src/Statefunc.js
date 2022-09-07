import React,{useState,useEffect} from 'react';

const Statefunc = () => {

const [state, setstate] = useState(1);
useEffect(()=>{
    console.log("state changed");
})
  return (
    <div>
        <h1>Functional component</h1>
      <h1>{state}</h1>
      <button onClick={()=>setstate(2)}>change</button>
    </div>
  );
}

export default Statefunc;
