
import { useState } from 'react';
import './App.css';

function App() {

  let [num, setNum]= useState(0);

  function increment(){
    setNum(num+1);
  }

  function decrement(){
    setNum(num-1);
  }

  return (
    <div className="App">
      <div id="showcase">
        <p>{num}</p>
        <div className="btn_collection">
          <button onClick={increment}>ADD</button>
          <button onClick={decrement}>SUB</button>
        </div>
      </div>    
    </div>
  );
}

          

export default App;

