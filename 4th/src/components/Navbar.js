import React from 'react'
import logo from '../images/logo.svg';

export default function Navbar() {
  return (
    <nav>
        <div className='navbar-container'>
        <img src={logo} alt="Catbnb"/>
        <h3>Catbnb</h3>
        </div>
    </nav>
  )
}
