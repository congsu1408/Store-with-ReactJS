import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/signup'}>Signup</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/privacy'}>Privacy</Link>
        <Link to={'/loginform'}>Loginform</Link>

    </div>
  );
};

export default Navbar;
