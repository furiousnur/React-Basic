import React from 'react';
import CounterView from "./features/counter/counterView";
import TodosView from "./features/todos/todosView";  

function App() {  
    return (
      <div> 
           {/*<CounterView />*/}
          <TodosView />
      </div>
  );
}

export default App;
