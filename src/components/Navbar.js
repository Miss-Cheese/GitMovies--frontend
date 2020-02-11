import React from 'react';
import {Link, Router} from 'react-router-dom'


const link = {
    width: '100px',
    padding: '5px',
    margin: '0 6px 6px',
    background: 'white',
    textDecoration: 'none',
    color: 'black'
  }

const Navbar = () => {
  return (
    <div className="navbar">
      |<Link to="/login" style={link} > Login </Link>|
      |<Link to="/profile" style={link}> User Profile </Link>|
      |<Link to="/movies" style={link}> Movies Page </Link>|
      |<Link to="/logout" style={link}> Logout </Link>|
    </div>
  )
}

export default Navbar

