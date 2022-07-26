import React from 'react';
import Card from "./components/Card";
import Data from "./data.json"
import List from "./components/UniqueList/List";

function App() {
    let items = [];
    //start for loop
        // for (let x = 0; x<Data.length; x++){
        //     items.push(<Card title={Data[x].title} detail={Data[x].description} stock={Data[x].stock}/>)
        // }
    //end for loop
    //start map
       items = Data.map((item, index) => <Card key={index} titel={item.title} detail={item.description} stock={item.stock}/>)
    //end map
  return (
      <div>
        <h1 className="headingStyle">Welcome to React Js</h1>
        {/*<Card title={Data[0].title} detail={Data[0].description} stock={Data[0].stock}/> */}
          {items}
          <br/>
          <List />
      </div>
  );
}

export default App;
