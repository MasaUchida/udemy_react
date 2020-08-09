import React from 'react';

function App() {
  const dom = <h1 className="hoge">yes</h1>
  const form = <input type="text" onChange={(e) => {console.log(e.target.value);}}></input>

  return (
    <div>
      {form}
      {dom}
      <h1>Hellow world!</h1>
    </div>
  );
}

export default App;
