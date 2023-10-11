import { useEffect, useState } from 'react';
import './home.scss'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { db } from '../../config/firebase';
import { getDocs, collection } from 'firebase/firestore'



const Home = () => {

    const departmentCollectionRef = collection(db, "Department")
    const StateCollectionRef = collection(db, "States")

    const [departmentList, setDepartmentList] = useState([])
    const [stateList, setStateList] = useState([])

    useEffect(() => {
        const getDeptList = async () => {
            try {
                const Depdata = await getDocs(departmentCollectionRef)
                const fiteredDataDep = Depdata.docs.map((doc) => ({ ...doc.data() }))
                setDepartmentList(fiteredDataDep)

            } catch (err) {
                console.error(err);
            }
        };
        const getStateList = async () => {
            try {
                const StatesData = await getDocs(StateCollectionRef)
                // console.log(StatesData.docs[0]);
                const fiteredDataStates = StatesData.docs.map((doc) => ({ ...doc.data() }))
                // console.log(fiteredDataStates);
                setStateList(fiteredDataStates)
            } catch (err) {
                console.error(err);
            }
        };
        getDeptList();
        getStateList()
    }, [])

    const departmentValues = departmentList.map((item) => Object.values(item))[0];
    const statesValues = stateList.map((item) => Object.values(item))[0];
    console.log(stateList);





    // statesValues.sort((a, b) => (a as string).localeCompare(b as string));
    // const getSortStates = async () => {
    //     try {
    //         const sortStates = await statesValues.sort((a, b) => (a as string).localeCompare(b as string));
    //     } catch (err) { 
    //         console.error(err);

    //     }

    // }
    // getSortStates()
    // // console.log(sortStates);


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthDate, setBirthDate] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date())
    const [department, setDepartment] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [State, setState] = useState('')
    const [zipCode, setZipCode] = useState('')

    // // console.log(department);

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
                        <input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <DatePicker id="date-of-birth" selected={birthDate} onChange={onChangeBirthDateHandler} dateFormat="dd/MM/yyyy" />

                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker id="start-date" className="test" selected={startDate} onChange={onChangeStartDateHandler} dateFormat="dd/MM/yyyy" />

                    <label htmlFor="department">Department</label>
                    {/* <Dropdown options={department} onChange={(selectedOption) => setDepartment(selectedOption.value)} /> */}
                    <Dropdown options={departmentValues} onChange={(e) => setDepartment(e.value)} />
                </div>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" value={street} type="text" onChange={(e) => setStreet(e.target.value)} />

                    <label htmlFor="city">City</label>
                    <input id="city" value={city} type="text" onChange={(e) => setCity(e.target.value)} />

                    <label htmlFor="state">State</label>
                    <Dropdown options={statesValues} />
                    {/* <select name="state" id="state"></select> */}

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" value={zipCode} type="number" onChange={(e) => setZipCode(e.target.value)} />
                </fieldset>


            </form>
            <button className='form-button_color'>Save</button>
            <div className='form-button'>
            </div>
        </div>
    );
};

export default Home;