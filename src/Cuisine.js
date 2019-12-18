import React from 'react';
import './Cuisine.css';
class Cuisine extends React.Component {
        
    render() {

        return (
           
                    <label><input type="checkbox" onChange={this.props.clicked} style={{marginRight:'5px'}}/>{this.props.name}</label> 
                    
                    
                   
                    
                            )
                        }
                    
                    }

                
export default Cuisine;