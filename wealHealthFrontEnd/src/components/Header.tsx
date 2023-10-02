import React from 'react';
import './header.scss'
import Logo from '../assets/wealHealthLogo.jpeg'

const Header = () => {
    return (
        <div className='Header'>
            <img src={Logo} alt='Wealth Health company' />
            <h2>Create Employee</h2>
            <h1>HRnet</h1>
        </div>
    );
};

export default Header;