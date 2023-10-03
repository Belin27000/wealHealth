import React from 'react';

import { FaPlusCircle, FaThList } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './navBar.scss'
const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/home'><FaPlusCircle /> Create Employee</Link>
            <Link to='/EmployeeList'><FaThList /> Employee List</Link>
        </nav>
    );
};

export default NavBar;