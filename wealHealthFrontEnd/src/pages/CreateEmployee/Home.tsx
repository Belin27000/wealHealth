import React from 'react';
import './home.scss'
const Home = () => {
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
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
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
            <div className='form-button'>
                <button className='form-button_color'>View Current Employees</button>
                <button className='form-button_color'>Save</button>
            </div>
        </div>
    );
};

export default Home;