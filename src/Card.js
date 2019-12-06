import React from 'react';
import './Card.css';


class Card extends React.Component {
    render() {
        return (

            <div className="container">
                <div className="res-img">
                    <img
                        className="img-res"
                        src="https://roocket.ir/public/image/2018/6/7/pwa-1.png"

                    />

                </div>
                <div className="res-info">
                   <div> <text>Resturant name here</text></div>
                    <div><text>Resturant Address here!</text></div>
                    <div> <text>CUISINEs</text></div>
                    <div><text>PHONE NUMBER</text></div>
                    <div><text>OPENING HOURS</text></div>


                   
                    
                    
                </div>


            </div>

        );
    }
}
export default Card;