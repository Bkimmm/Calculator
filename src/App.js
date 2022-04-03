// import { react } from "@babel/types";
// import React from "react"
import {useState} from 'react';
function App() {
  const [calc,setCalc] = useState('')
  const [result,setResut] = useState('')

  const ops = ['/','*','+','-']
  const updateCalc =value=>{
    setCalc(calc + value);
  }
  const handleClick=(e)=>{
      console.log('hello')
    }

  const handleNumbers = ()=>{
    const nums = []
    for(let i = 0; i<10;i++){
      nums.push(<button onClick = {handleClick}key={i} className = {i}>{i}</button>)
    }
    return nums;
  }
  const handleOps = ()=>{
    const jsxOps = []
    for(let i = 0; i < ops.length; i++){
      jsxOps.push(<button onClick={()=>updateCalc(ops[i])} key={i}>{ops[i]}</button>)
    }
    return jsxOps
  }
  
  return (
    <div className="App">
      <header className="App-header">
        Calcualtor!
      </header>
      <div className="calculator">
        <div className='display'>
          {result ? <span>(0)</span> : ''}{calc||'0'}
        </div>
        <div className="base">
          <div className="operators">
            {handleOps()}
            {/* <button>/</button>
            <button>*</button>
            <button>+</button>
            <button>-</button>
            <button>=</button> */}
          </div>
            <div className="digits">
              {handleNumbers()}
            </div>
        </div>

      </div>
    </div>
  );
}

export default App;
