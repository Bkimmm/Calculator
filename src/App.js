// import { react } from "@babel/types";

function App() {
  
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
  
  return (
    <div className="App">
      <header className="App-header">
        Calcualtor!
      </header>
      <div className="calculator">
        <div className="base">
          <div>
            <button onClick={handleClick}>Clear</button>
            <button>( )</button>
            <button>/</button>
            <button>*</button>
            <button>+</button>
            <button>-</button>
            <button>=</button>
          </div>
              
            <div>
              {handleNumbers()}
            </div>
        </div>

      </div>
    </div>
  );
}

export default App;
