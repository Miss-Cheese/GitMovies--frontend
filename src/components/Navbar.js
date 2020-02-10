import React from 'react';
import {Link, Router} from 'react-router-dom'


const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

const Navbar = () => {
  return (
  <div className="navbar">
    {/* <Link to="/login">Login</Link>
    <Link to="/movies">Movies Page</Link> */}
    {/* <Link to="/user">User Page</Link> */}
  </div>
  )
}

export default Navbar

