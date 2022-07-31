import React from 'react'
import logo from './logo.png';

export default function Navbar() {
  return (
    <nav>
      <div className='project-logo'>
         <img src={logo} alt = "react-logo" width='70em'/>
         <h2>ReactFacts</h2>
      </div>
      <div className='project-title'>
        <h4>React Course - Project 1</h4>
      </div>
    </nav>
  )
}
