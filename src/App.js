import React from 'react';

import './App.css';
import  Auth from './components/Auth';
import { Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
     <Route path='/signup'><Auth /></Route> 
    </div>
  );
  
}

export default App;
