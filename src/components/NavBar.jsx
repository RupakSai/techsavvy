import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'
import logo from './images/logo.png'
import { FiShoppingCart } from "react-icons/fi"


const NavBar = () => {
  return (
    <div className='navbar'>
      <div className="navtitle flexall">
        <img src={logo} alt="" />
        <p>TrendSavvy</p>
      </div>
      <div className="navitems flexall">
        <Link to='/'>Home</Link>
        <Link to='/products'>Shop</Link>
        <Link to='/cart'><FiShoppingCart size={25}/></Link>
      </div>
    </div>
  )
}

export default NavBar;
