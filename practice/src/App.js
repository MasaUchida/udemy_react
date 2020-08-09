import React from 'react';

const User = (props) => {
  return(
  <div>
    <p>名前：{props.name}</p>
    <p>性別：{props.sex}</p>
    <p>年齢：{props.age}</p>
    <br/>
  </div>
  );
}

const App = () => {
  const profiles = [
    {name: "太郎",sex: "男",age: 300},
    {name: "次郎",sex: "男",age: 298},
  ]

  return(
    <div>
      <h1>User Plofiles</h1>
      {
        profiles.map((profile)=>{
          return <User name={profile.name} sex={profile.sex} age={profile.age}/>
        })
      }
    </div>
  );
}

export default App;
