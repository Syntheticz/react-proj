import React from 'react'
import dp from '../images/dp.jpg'

export default function Header() {
  return (
    <div className='header'>
        <img src={dp} alt='A Handsome Young Man.'/>
        <h1>Jhon Philip Guiang</h1>
        <h4>Senior Developer</h4>
        <div className='button-container'>
            <button className='email-button'>📩 Email</button>
            <button className='facebook-button'>Facebook</button>
        </div>
    </div>
  )
}
