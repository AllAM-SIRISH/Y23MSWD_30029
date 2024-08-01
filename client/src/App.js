import React from 'react';
import './App.css';
import User from './components/User';
const user=(props)=>{
    return (
  <div>
  <h2>Name of the user{props.name} logged in as {props.type}</h2>
  </div>
  );
}
export default App;