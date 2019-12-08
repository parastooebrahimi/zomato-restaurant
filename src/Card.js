import React from 'react';
import './Card.css';
import axios from 'axios';


class Card extends React.Component {
    state={
        loadedPost:null
        
    }

    componentDidUpdate(){
        if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id))
        {
            axios.get( `https://developers.zomato.com/api/v2.1/restaurant?res_id=${this.props.id}&search?entity_id=297&entity_type=city&q=Adelaide&apikey=07f3b7cdf9aab5e68f4dfbb516560b4d`).then(
            response=>{

                this.setState({loadedPost:response.data})
            }
        )
        }

    }
   
    render() {
        if(this.props.id && this.state.loadedPost){
            return (

                <div className="container">
       
                    <div className="res-img">
                        <img className="image-style"
                        src={this.state.loadedPost.featured_image}
                            
                        />
                    </div>
    
                    <div className="res-info">
                        <p className="resName" >
                            <h3>{this.state.loadedPost.name}</h3>
                            <h15 className="adressStyle">{this.state.loadedPost.location.address}</h15>
                        </p>
                        <br/>
                        <p style={{lineHeight:'8px'}}>
                        <label style={{fontSize:'11px', color:'#484848', fontWeight:'bold'}}><strong>CUISINES</strong></label>
                        <br/>
                        <h12 style={{color:'#4E5456'}}>{this.state.loadedPost.cuisines}</h12>
                        </p>
    
                        <p style={{lineHeight:'8px'}}>
                        <label style={{fontSize:'11px', color:'#484848', fontWeight:'bold'}}><strong>PHONE NUMBER</strong></label>
                        <br/>
                        <h12 style={{color:'#4E5456'}}>{this.state.loadedPost.phone_numbers}</h12>
                        </p>
    
                        <p style={{lineHeight:'8px'}}>
                        <label style={{fontSize:'11px', color:'#484848', fontWeight:'bold'}}><strong>OPENING HOURS</strong></label>
                        <br/>
                        <h12 style={{color:'#4E5456'}}>{this.state.loadedPost.timings}</h12>
                        </p>
                        
                        
                    </div>
    
                </div>
    
            );
        }
        else{
            return (

                <div className="container">
       
                    <div className="res-img">
                        <img
                            className="image-style"
                            src="https://b.zmtcdn.com/data/reviews_photos/5ca/7404b97b7fed01e71c099258199455ca_1533127254.JPG?fit=around%7C640%3A640&crop=640%3A640%3B%2A%2C%2A"
                            
                        />
                    </div>
    
                    <div className="res-info">
                        <p className="resName" >
                            <h3>Madame Hanoi</h3>
                            <h15 className="adressStyle">Adelaide Casino, City Centre, Adelaide</h15>
                        </p>
                        <br/>
                        <p style={{lineHeight:'8px'}}>
                        <label style={{fontSize:'11px', color:'#484848', fontWeight:'bold'}}><strong>CUISINES</strong></label>
                        <br/>
                        <h12 style={{color:'#4E5456'}}>French, Vietnamese</h12>
                        </p>
    
                        <p style={{lineHeight:'8px'}}>
                        <label style={{fontSize:'11px', color:'#484848', fontWeight:'bold'}}><strong>PHONE NUMBER</strong></label>
                        <br/>
                        <h12 style={{color:'#4E5456'}}>08 8218 4166</h12>
                        </p>
    
                        <p style={{lineHeight:'8px'}}>
                        <label style={{fontSize:'11px', color:'#484848', fontWeight:'bold'}}><strong>OPENING HOURS</strong></label>
                        <br/>
                        <h12 style={{color:'#4E5456'}}>"11 AM to 11 PM (Mon, Tue, Wed, Thu, Sun), 11 AM to 2 AM (Fri-Sat)"</h12>
                        </p>
                        
                        
                    </div>
    
                </div>
    
            );
        }
    }
}
export default Card;