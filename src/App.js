import React from 'react';
import Card from "./components/Card";

function App() {
  return (
      <div>
        <h1 className="headingStyle">Welcome to React Js</h1>
        <Card title="Card 1" detail="If you don’t experience the problems described above or don’t feel comfortable using JavaScript tools yet"/>
        <Card title="Card 2" detail="If you don’t experience the problems described above or don’t feel comfortable using JavaScript tools yet"/>
        <Card title="Card 3" detail="If you don’t experience the problems described above or don’t feel comfortable using JavaScript tools yet"/>
      </div>
  );
}

export default App;
