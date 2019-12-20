import React from 'react';
import './Cuisine.css';

function Cuisine(props){

    const{clicked,id,unclicked}=props

    let clickHandler = e => {
        
        e.target.checked ?
        clicked(id)
        : unclicked(id)

    }
    return (
        
           
        <label><input type="checkbox"
         onClick={clickHandler } 
         style={{marginRight:'5px'}}/>{props.name}</label> 
        
        
       
        
                )

}

                
export default Cuisine;