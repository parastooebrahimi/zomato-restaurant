import React from 'react';
import axios from 'axios';
import './HeaderLeft.css';
class HeaderLeft extends React.Component {
    state = {
        category: []
    }
    componentDidMount() {
        axios.get(`https://developers.zomato.com/api/v2.1/categories?apikey=07f3b7cdf9aab5e68f4dfbb516560b4d`).then(
            response => {
                this.setState({
                    category: response.data.categories.splice(0,4)
                })

            }
        )

    }
    render() {

        return (
            <div className="container">
               
                <div>
                    
                    <div >
                    <label style={{ fontSize: '15px', color: '#484848', fontWeight: 'bold' }}>CATEGORY</label> 
                    
                    </div>
                    <div className="left">
                    {this.state.category.map((item) =>
                    
                    <label><input type="checkbox" style={{marginRight:'5px'}}/>{item.categories.name}</label> 
                   
                
            )}
            
                    </div>
                
               
                </div>

                                <div className="right">
                                </div>
            </div>
                            )
                        }
                    
                    }
export default HeaderLeft;