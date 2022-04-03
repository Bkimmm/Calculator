
function App() {

  const handleNumbers = ()=>{
    const nums = []
    for(let i = 0; i<10;i++){
      nums.push(<button key={i} className = {i}>{i}</button>)
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
            <button>Clear</button>
            <button>( )</button>
            <button>/</button>
            <button>X</button>
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
