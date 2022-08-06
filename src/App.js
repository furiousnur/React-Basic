import React from 'react';
import Faqs from "./components/Faq/Faqs";

function Welcome(){
    return React.createElement("h1",{},"Welcome function component");
}

function App() {
  return (
      <div>
          <h1 className="headingStyle">Welcome to React Js</h1>
          <Faqs />
      </div>
  );
}

export default App;
