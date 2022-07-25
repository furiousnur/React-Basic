import React from 'react';
import Card from "./components/Card";
import Data from "./data.json"

function App() {
  return (
      <div>
        <h1 className="headingStyle">Welcome to React Js</h1>
        <Card title={Data[0].title} detail={Data[0].description} stock={Data[0].stock}/>
        <Card title={Data[1].title} detail={Data[1].description} stock={Data[1].stock}/>
        <Card title={Data[2].title} detail={Data[2].description} stock={Data[2].stock}/>
      </div>
  );
}

export default App;
