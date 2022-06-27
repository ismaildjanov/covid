import React from 'react'
import "./style.css";
import logo from "../../assets/icons/logo.svg";

const Header = () => {
  return (
    <div className='header'>
        <img className='logo' src={logo} alt='' />
    </div>
  )
}

export default Header