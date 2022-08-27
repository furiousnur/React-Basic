import React from 'react';
import CounterView from "./features/counter/counterView"; 
import PostsView from "./features/posts/PostsView";
import Temp from "./components/Weather/temp";  

function App() {  
    return (
      <div> 
           {/*<CounterView />*/}
          {/*<PostsView />*/}
          <Temp/>
      </div>
  );
}

export default App;
