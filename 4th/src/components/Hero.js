import React from 'react'
import hero from '../images/hero.png';

export default function Hero() {
  return (
    <div className='hero-container'>
        <div className='hero-subcontainer'>
           <img src={hero} alt ="Grid pics goes here."/>
        </div>
        <h1>Cat Experiences</h1>
        <p>&emsp;&emsp;&emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus ac magna at interdum. Phasellus iaculis accumsan ante, eget scelerisque magna sollicitudin sed. Nunc accumsan urna eu feugiat commodo. Nullam sodales odio vel nisl interdum, eget fermentum felis congue. Nam id facilisis justo, non commodo turpis. Nunc pulvinar nulla ac vehicula ultricies. Nulla lectus magna, dignissim quis maximus viverra, facilisis non nisl. Sed in semper velit. Aliquam imperdiet venenatis neque quis luctus. </p>
    </div>
  )
}
