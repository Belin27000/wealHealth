import React from 'react';
import './home.scss'
import { Link } from 'react-router-dom';
import Department from '../../assets/data/dropdownData.json'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const Home = () => {
    console.log(Department);

    return (
        <div className='form'>
            <form className='form-container'>
                <div className='form-identity'>
                    <div className='form-identity-name'>

                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" />

                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" />
                    </div>

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="text" />

                    <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="text" />
                    <label htmlFor="department">Department</label>

                    <Dropdown options={Department.DEPARTMENT} />
                </div>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state"></select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </fieldset>


            </form>
            <button className='form-button_color'>Save</button>
            <div className='form-button'>
            </div>
        </div>
    );
};

export default Home;