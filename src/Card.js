import React from 'react';
import './Card.css';


class Card extends React.Component {
    render() {

        return (

            <div className="container">

                <div className="res-img">
                    <img
                        className="image-style"
                        src="https://roocket.ir/public/image/2017/8/9/react-native.png"
                    />
                </div>

                <div className="res-info">
                    <label>Name:</label>
                    <text>it is in Adelaide city center between two streets</text>
                    <br/>
                    <label>Address:</label>
                    <br/>

                    
                </div>

            </div>

        );
    }
}
export default Card;