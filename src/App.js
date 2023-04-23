import React from 'react'
// Component
import Home from "./component/Home"
// Context DataProvider import
import DataProvider from './context/DataProvider';

function App() {
  return (
    // if we wrapp the dataprovider in the home component, then all the components that are being routed
    // from the home component can have the state of the data provider in it. 

    // if we pass oping tag and clossing tag between anything they call children and whnever you pass must forward
    <DataProvider> 
      <Home />
    </DataProvider>
  );
}

export default App;