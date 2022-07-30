import React from 'react';
import Card from "./components/Card";
import Data from "./data.json"
import List from "./components/UniqueList/List";
import NestedMapping from "./components/UniqueList/NestedMapping";
import ClassComponent from "./components/ClassComponent";
import Card3 from "./components/Card3";
import State from "./components/State";
import ConditionalRendering from "./components/ConditionalRendering/Index";
import EventHandler from "./components/EventHandler/index";
import HookUseState from "./components/HookUseState/index";
import Index2 from "./components/HookUseState/Index2";
import FormIndex from "./components/Form/FormIndex";
import Child from "./components/StateLifting/Child";

function Welcome(){
    return React.createElement("h1",{},"Welcome function component");
}

function App() {
    // let items = [];
    //start for loop
        // for (let x = 0; x<Data.length; x++){
        //     items.push(<Card title={Data[x].title} detail={Data[x].description} stock={Data[x].stock}/>)
        // }
    //end for loop
    //start map
    //    items = Data.map((item, index) => <Card key={index} titel={item.title} detail={item.description} stock={item.stock}/>)
    //end map

  //  method for props which receive data from child component
    const handleChildData = (childData) =>{
        console.log("App: " + childData)
    }

  return (
      <div>
        <h1 className="headingStyle">Welcome to React Js</h1>
          <FormIndex />
          <Child onChildData={handleChildData}/>
          {/*<HookUseState />*/}
          {/*<Index2 />*/}
          {/*<EventHandler />*/}
          {/*<ConditionalRendering />*/}
          {/*<State />*/}
          {/*/!*<Card title={Data[0].title} detail={Data[0].description} stock={Data[0].stock}/> *!/*/}
          {/*{items}*/}
          {/*<br/>*/}
          {/*<List />*/}
          {/*<br/>*/}
          {/*<NestedMapping />*/}
          {/*<ClassComponent name="This is class component using props"/>*/}
          {/*<br/>*/}
          {/*<Welcome />*/}
          {/*<Card3 />*/}
      </div>
  );
}

export default App;
