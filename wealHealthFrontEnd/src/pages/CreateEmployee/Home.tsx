import React, { useState } from 'react';
import './home.scss'

import Department from '../../assets/data/dropdownData.json'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const Home = () => {
    console.log(Department);

    const [birthDate, setBirthDate] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date())

    function onChangeBirthDateHandler(value: Date) {
        setBirthDate(value)
    }
    function onChangeStartDateHandler(value: Date) {
        setStartDate(value)
    }
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
                    <DatePicker selected={birthDate} onChange={onChangeBirthDateHandler} dateFormat="dd/MM/yyyy" />

                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker className="test" selected={startDate} onChange={onChangeStartDateHandler} dateFormat="dd/MM/yyyy" />
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