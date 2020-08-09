import React from 'react';

const Test = () => {
  return(
    <div>
      <h1 className="hoge">yes</h1>
      <input type="text" onChange={(e) => {console.log(e.target.value);}}></input>
    </div>
  );
}

const App = () => {
  
  return (
    <div>
      <Test/>
      <h1>Hellow world!</h1>
    </div>
  );
}

export default App;
