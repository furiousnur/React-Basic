import React, {Suspense} from 'react'; 
const RefExample = React.lazy(()=> import('../src/components/RefExample/RefExample'));

function App() {  
    return (
      <div>
          <Suspense fallback={<div>Loading...</div>}>
              <RefExample/>
          </Suspense> 
      </div>
  );
}

export default App;
