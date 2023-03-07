import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Auth from './components/Auth';


function App() {

  return (
    <div className="App">
     <Route path='/signup'><Auth /></Route> 
    </div>
  );
  
}

export default App;
