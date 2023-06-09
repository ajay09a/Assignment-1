import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src='https://startupz.world/images/white-logo.png' alt='logo'/>
        </div>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/startup'>Startup</NavLink>
            </li>
            <li>
                <NavLink to='/investor'>Investor</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About Us</NavLink>
            </li>
            <li>
                <NavLink to='/login'>Log in</NavLink>
            </li>
            <li>
                <NavLink to='/register'><button>Add Listing &gt;</button></NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar