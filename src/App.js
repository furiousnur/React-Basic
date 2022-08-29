import React, {Suspense} from 'react'; 
const UseContext1 = React.lazy(()=>import('./components/UseContext/UseContext1'));

function App() {  
    return (
      <div>
          <Suspense fallback={<div>Loading...</div>}>
              <UseContext1 />
          </Suspense> 
      </div>
  );
}

export default App;
