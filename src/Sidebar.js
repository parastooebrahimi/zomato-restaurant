import React from 'react';
import './Sidebar.css'

class Sidebar extends React.Component{
    render(){
        return(
            <div className="sidebar" onClick={this.props.clicked}>
              <ul className="sidebar-header">
                  <p>{this.props.name}</p>
              </ul>
              
            </div>
        )
    }

}
export default Sidebar;