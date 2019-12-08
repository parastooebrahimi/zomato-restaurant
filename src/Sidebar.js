import React from 'react';
import './Sidebar.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

class Sidebar extends React.Component{
    render(){
        return(
        
            
        
                <div  className="sidebar" >
                  
                <ul  className="sidebar-header ">
                  <p onClick={this.props.clicked}>{this.props.name}</p>
                  </ul>
             
              
            </div>
         
        )
    }

}
export default Sidebar;