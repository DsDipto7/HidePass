// import logo from './logo.svg';
//import { Button } from 'bootstrap';
import './App.css';
import { useState } from 'react';
import btnModule from "./Button.module.css";

function App() {

  let [pState, setState] = useState(false);
  
  return (

   
    <div className="App">
      <br/>
      <br/>
      <input type={pState ? 'text' : 'password'}/>
      <button onClick={()=>setState(!pState)}>
        {pState ? 'Hide' : 'Show'}
      </button>
      <br/>
      <br/>
 
      <button className={btnModule.error} >Error</button> 
      <button className={btnModule.warning} >Demo</button> 
    </div>
  );
}

export default App;
