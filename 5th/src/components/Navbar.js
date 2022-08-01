import React from 'react'
import logo from '../images/logo.svg'

export default function () {
  return (
    <nav>
        <div className='nav--container'>
            <div className='icon--container'>
                <img src={logo} alt = "Travel Journal Logo"/>
            </div>
            <h3>TravelBuds</h3>
        </div>
    </nav>
  )
}
