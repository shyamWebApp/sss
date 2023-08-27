import React from 'react'
import Logo from './logo.png'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
       <img src={Logo} alt="" className='logo'/>
       <button className="red-btn">Contact</button>
    </div>
  )
}
export default Navbar;
