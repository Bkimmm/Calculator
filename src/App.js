// import { react } from "@babel/types";
// import React from "react"
import {useState} from 'react';
function App() {
  //hooks
  const [calc,setCalc] = useState('')
  const [result,setResult] = useState('')
  
  // functional operations
  const ops = ['/','*','+','-']
  // onclick function that allows for the calculator to update based on user input
  const updateCalc =value=>{
    if(calc==='' && ops.includes(value) || ops.includes(value)&&ops.includes(calc.slice(-1))){
      return
    }
    setCalc(calc + value);
    console.log(typeof calc)
  }
  // const handleClick=(e)=>{
  //     console.log('hello')
  // }
  // 
  const handleNumbers = ()=>{
    const nums = []
    for(let i = 0; i<10;i++){
      nums.push(<button onClick={()=>updateCalc(i.toString())} className = {i} key={i}>{i}</button>)
    }
    return nums;
  }
  const handleOps = ()=>{
    const jsxOps = []
    for(let i = 0; i < ops.length; i++){
      jsxOps.push(<button onClick={()=>updateCalc(ops[i])} key={ops[i]}>{ops[i]}</button>)
    }
    return jsxOps
  }
  // Need to figure out functionality for the calculator ////////////!!!!!!!!!!!!!!!!!!!!!!
  // const handleResult =(calc)=>{
  //   console.log(calc)
  //   // eslint-disable-next-line no-eval
  //   // return setResult(eval("(" + calc + ")"))
  //   // console.log(typeof clac)
  // }
  
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

          </div>
          <div className="digits">
            {handleNumbers()}
          </div>
        </div>
        <button /*onClick={()=>handleResult(calc)}*/>=</button>

      </div>
    </div>
  );
}

export default App;
