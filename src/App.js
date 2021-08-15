import React from 'react';
import './App.css';
import Child from './child'
 import {TranstionProvider} from './transContext'

function App() {
  return (
    <TranstionProvider>
       <Child />
    </TranstionProvider>
  );
}

export default App;
