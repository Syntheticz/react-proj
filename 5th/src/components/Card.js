import React from 'react';
import location from '../images/location.svg';

export default function Card(props) {
    var image = props.img;
    var name = props.name;
    var desc = props.description;
  return (
    <div className='card--container'>
        <div className='image--container'>
            <img src={image} alr ="japan"/>
        </div>
        <div className='data--container'>
            <div className='location--container'>
                <img src={location} alt='location--icon'/>
                <h3>{name}</h3>
            </div>
            <p>&emsp;&emsp;&emsp;{desc}</p>
        </div>
    </div>
  )
}
