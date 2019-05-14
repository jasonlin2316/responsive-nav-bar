import React from 'react'
import './Button.css'
//Hamburger nav button
const Button = (props) => (
  <button className='toggle-button' onClick={props.click}>
      <div className='toggle-button__line'></div>
      <div className='toggle-button__line'></div>
      <div className='toggle-button__line'></div>
  </button>
)

export default Button
