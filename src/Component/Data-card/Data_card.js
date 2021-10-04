import React from 'react';
import './Data_card.css';

function Data_card(props) {
    const{name,data,image}=props.cardData;
    return (
        <div>
            <div className="data-card">
                <img src={image} alt="" />
              <h4>{name}</h4>
              <p>{data}</p>
            </div>
        </div>
    );
}

export default Data_card;