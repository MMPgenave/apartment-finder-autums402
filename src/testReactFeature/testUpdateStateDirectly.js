import React,{useState} from 'react'
// This component rendered in Features Page
function TestUpdateStateDirectly() {
    let [value,setValue]=useState(9);
    const handler=()=>{
      value=value+10;
       alert(value);
    }
  return (<>
    <div>value:{value}</div>
    <button type='button' onClick={handler}>click</button>
    </>
  )
}

export default TestUpdateStateDirectly