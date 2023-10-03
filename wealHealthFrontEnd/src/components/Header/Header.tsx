import React from 'react';
import './header.scss'
import Logo from '../../assets/wealHealthLogo.jpeg'
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <div className='Header'>
            <img src={Logo} alt='Wealth Health company' />
            <NavBar />
            <h1>HRnet</h1>
        </div>
    );
};

export default Header;