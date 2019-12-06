import React from 'react';
import axios from 'axios';
import './App.css';
import './Card.js';
import Card from './Card.js';
class App extends React.Component {
  render(){
    return (
     
      <div className="App">
        <div className="header">
             <div className="header-left">category
  
             </div>
  
             <div className="header-right">rating
  
             </div>
  
        </div>
  
  
        <div className="sideBar">sidebar
  
        </div>
  
        <div className="content">
        <Card/>
        </div>
        
      </div>
    );
  }
}

export default App;
