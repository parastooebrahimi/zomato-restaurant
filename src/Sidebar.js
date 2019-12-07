import React from 'react';
import './Sidebar.css'

class Sidebar extends React.Component{
    render(){
        return(
            <div className="sidebar">
              <ul className="sidebar-header">
                  <p>{this.props.name}</p>
              </ul>
              
            </div>
        )
    }

}
export default Sidebar;