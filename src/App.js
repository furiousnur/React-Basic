import React from 'react';
import Card from "./components/Card";
import Data from "./data.json"

function App() {
    let items = [];
    for (let x = 0; x<Data.length; x++){
        items.push(<Card title={Data[x].title} detail={Data[x].description} stock={Data[x].stock}/>)
    }
  return (
      <div>
        <h1 className="headingStyle">Welcome to React Js</h1>
        {/*<Card title={Data[0].title} detail={Data[0].description} stock={Data[0].stock}/> */}
          {items}
      </div>
  );
}

export default App;
