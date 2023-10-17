import { useEffect, useState } from 'react';
import './home.scss'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { useDispatch } from 'react-redux';

import data from '../../assets/data/data_service'
import Modal from '../../components/Modale/Modal';


const Home = () => {

    const dispatch = useDispatch()
    // const departmentCollectionRef = collection(db, "Department")
    const departmentCollectionRef = data.getDepartment()
    // const StateCollectionRef = collection(db, "States")
    const StateCollectionRef = data.getStates()

    const [departmentList, setDepartmentList] = useState([])
    const [stateList, setStateList] = useState([])
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
        window.location.reload(); // Actualiser la page
    };


    useEffect(() => {
        const getDeptList = async () => {
            try {
                const Depdata = await departmentCollectionRef
                const fiteredDataDep = Depdata.docs.map((doc) => ({ ...doc.data() }))
                setDepartmentList(fiteredDataDep)

            } catch (err) {
                console.error(err);
            }
        };
        const getStateList = async () => {
            try {
                const StatesData = await StateCollectionRef
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
    }, [dispatch])

    const departmentValues = departmentList.map((item) => Object.values(item))[0];
    const statesValues = stateList.map((item) => Object.values(item))[0];
    // console.log(stateList);




    const [firstName, setFirstName] = useState('Yann')
    const [lastName, setLastName] = useState('LECERF')
    const [birthDate, setBirthDate] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date())
    const [department, setDepartment] = useState('Engineering')
    const [street, setStreet] = useState('Nemours')
    const [city, setCity] = useState('La genevraye')
    const [State, setState] = useState('Florida')
    const [zipCode, setZipCode] = useState('77690')

    // // console.log(department);

    function onChangeBirthDateHandler(value: Date) {
        setBirthDate(value)
    }
    function onChangeStartDateHandler(value: Date) {
        setStartDate(value)
    }

    function handleSaveEmployee() {
        const newEmployee = {
            FirstName: firstName,
            LastName: lastName,
            dateOfBirth: birthDate.toDateString(),
            startDate: startDate.toDateString(),
            department: department,
            street: street,
            city: city,
            State: State,
            zipCode: zipCode,
        };

        // Ajoutez le nouvel employé à Firebase
        data
            .addEmployees(newEmployee)
            .then(() => {
                // Réinitialisez les champs du formulaire après l'ajout
                setFirstName('');
                setLastName('');
                setBirthDate(new Date());
                setStartDate(new Date());
                setDepartment('');
                setStreet('');
                setCity('');
                setState('');
                setZipCode('');
                setShowModal(true);

            })
            .catch((error) => {
                console.error('Erreur lors de l\'ajout de l\'employé :', error);
            });


    }



    return (
        <div className='form'>
            {/* <Modal text="Vas-y coco" imgPath="" /> */}
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


                {/* <Modal text="Vas-y coco" imgPath="" /> */}
                <Modal isActive={showModal} text="Employee registered" imgPath='' onClose={handleCloseModal} />
            </form>
            <button className='form-button_color' onClick={handleSaveEmployee}>Save</button>
        </div>
    );
};

export default Home;