import React from 'react';
import staricon from '../images/star.svg';




export default function Card(props) {
  var img = props.img;
  var name = props.name;
  var ratings = props.ratings;
  var price = props.price;

  return (
    <div className='card-container'>
        <img className="card-image" src={img} alt="catterou"/>
        <div className='stars-container'>
            <img src={staricon} alt="star icon"/>
            <p>{ratings} stars</p>
        </div>  
        <h3>{name}</h3>
        <p>Price: {price} catfood/s</p> 
    </div>
  )
}
