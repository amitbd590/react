import React from 'react';
import './HomeCardSingle.css'

function HomeCardSingle(props) {
    const{name,image,country,price,publish,stock}=props.data;
    return (
        <div >
      <div className="card">
        <img
          className="card-img-top img-fluid"
          src={image}
          alt="Card image cap"
        />
        <div className="card-body">
        <h4 className="card-title text-light">Name : {name}</h4>
          <h5 className=" text-light">Publish : {publish}</h5>
          <h5 className=" text-light">Price : $ {price}</h5>
          <h5 className=" text-light">Country : {country}</h5>
          <h5 className=" text-light">Stock : {stock}</h5>
          <p className="card-text text-light">
            
          </p>
          <a href="#" className="btn-formate my-3">
            More Info
          </a>
        </div>
      </div>
    </div>
    );
}

export default HomeCardSingle;