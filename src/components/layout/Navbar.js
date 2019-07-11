import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <div className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">MarioPlan</Link>
      </div>
    </div>
  )
}

export default Navbar;