import React from 'react';
import axios from 'axios';
import './App.css';
import Card from './Card.js';
import Sidebar from './Sidebar.js'

class App extends React.Component {
  state={
    resturants:[]
  }

  componentDidMount(){
    axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&q=Adelaide&apikey=07f3b7cdf9aab5e68f4dfbb516560b4d`).then(
      response=>{ this.setState({
        resturants : response.data.restaurants})
      }
    )
  }

  render(){
    
    let resturantMenu= this.state.resturants.map((item,index)=> <Sidebar key={index} name={item.restaurant.name} 
      />);
    return (
     
      <div className="App">
        <div className="header">
             <div className="header-left">category
  
             </div>
  
             <div className="header-right">rating
  
             </div>
  
        </div>
  
  
        <div className="sideBar">
          {resturantMenu}
          
  
        </div>
  
        <div className="content">

        <Card/>
          
        
        </div>
        
      </div>
    );
  }
}

export default App;
