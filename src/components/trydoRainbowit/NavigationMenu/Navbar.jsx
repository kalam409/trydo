import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
      <div className="navigationMenu">
        <div className="logo">
          <img
            src="http://trydo.rainbowit.net/assets/images/logo/logo.png"
            alt=""
            srcset=""
          />
        </div>
        <div className='menu'>
          <Link to="/">Home</Link>
          <Link to="/services">Service</Link>
          <Link to="/about">About</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    );
};

export default Navbar;