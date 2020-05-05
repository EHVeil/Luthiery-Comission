import React from 'react';
import { NavLink } from 'react-router-dom';
import './Stylesheets/Title.css';
import Elephant from './images/logos/geometric-elephant.png'

function Title() {
  return(
    <div className="title p-3">
      <img className="elephant" src={Elephant} alt=""/>
      <div>
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
        <NavLink className="nav-link" to="/comission">Comissions</NavLink>
      </div>
    </div>
  )
}

export default Title
