import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import './home.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useDispatch } from 'react-redux';
import data from '../../assets/data/data_service';
import FullScreenModal from 'fullscreenreact-modal';
// import Modal from '../../components/Modale/Modal';
// import testImg from '../../assets/wealHealthLogo.jpeg'
const Home = () => {
    const dispatch = useDispatch();
    // const departmentCollectionRef = collection(db, "Department")
    const departmentCollectionRef = data.getDepartment();
    // const StateCollectionRef = collection(db, "States")
    const StateCollectionRef = data.getStates();
    const [departmentList, setDepartmentList] = useState([]);
    const [stateList, setStateList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false);
        window.location.reload(); // Actualiser la page
    };
    useEffect(() => {
        const getDeptList = async () => {
            try {
                const Depdata = await departmentCollectionRef;
                const fiteredDataDep = Depdata.docs.map((doc) => ({ ...doc.data() }));
                setDepartmentList(fiteredDataDep);
            }
            catch (err) {
                console.error(err);
            }
        };
        const getStateList = async () => {
            try {
                const StatesData = await StateCollectionRef;
                // console.log(StatesData.docs[0]);
                const fiteredDataStates = StatesData.docs.map((doc) => ({ ...doc.data() }));
                // console.log(fiteredDataStates);
                setStateList(fiteredDataStates);
            }
            catch (err) {
                console.error(err);
            }
        };
        getDeptList();
        getStateList();
    }, [dispatch]);
    const departmentValues = departmentList.map((item) => Object.values(item))[0];
    const statesValues = stateList.map((item) => Object.values(item))[0];
    // console.log(stateList);
    const [firstName, setFirstName] = useState('Yann');
    const [lastName, setLastName] = useState('LECERF');
    const [birthDate, setBirthDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [department, setDepartment] = useState('Engineering');
    const [street, setStreet] = useState('Nemours');
    const [city, setCity] = useState('La genevraye');
    const [State, setState] = useState('Florida');
    const [zipCode, setZipCode] = useState('77690');
    // // console.log(department);
    function onChangeBirthDateHandler(value) {
        setBirthDate(value);
    }
    function onChangeStartDateHandler(value) {
        setStartDate(value);
    }
    function handleSaveEmployee() {
        const newEmployee = {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: birthDate.toDateString(),
            startDate: startDate.toDateString(),
            department: department,
            street: street,
            city: city,
            state: State,
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
    return (_jsxs("div", { className: 'form', children: [_jsxs("form", { className: 'form-container', children: [_jsxs("div", { className: 'form-identity', children: [_jsxs("div", { className: 'form-identity-name', children: [_jsx("label", { htmlFor: "first-name", children: "First Name" }), _jsx("input", { type: "text", id: "first-name", value: firstName, onChange: (e) => setFirstName(e.target.value) }), _jsx("label", { htmlFor: "last-name", children: "Last Name" }), _jsx("input", { type: "text", id: "last-name", value: lastName, onChange: (e) => setLastName(e.target.value) })] }), _jsx("label", { htmlFor: "date-of-birth", children: "Date of Birth" }), _jsx(DatePicker, { id: "date-of-birth", selected: birthDate, onChange: onChangeBirthDateHandler, dateFormat: "dd/MM/yyyy" }), _jsx("label", { htmlFor: "start-date", children: "Start Date" }), _jsx(DatePicker, { id: "start-date", className: "test", selected: startDate, onChange: onChangeStartDateHandler, dateFormat: "dd/MM/yyyy" }), _jsx("label", { htmlFor: "department", children: "Department" }), _jsx(Dropdown, { options: departmentValues, onChange: (e) => setDepartment(e.value) })] }), _jsxs("fieldset", { className: "address", children: [_jsx("legend", { children: "Address" }), _jsx("label", { htmlFor: "street", children: "Street" }), _jsx("input", { id: "street", value: street, type: "text", onChange: (e) => setStreet(e.target.value) }), _jsx("label", { htmlFor: "city", children: "City" }), _jsx("input", { id: "city", value: city, type: "text", onChange: (e) => setCity(e.target.value) }), _jsx("label", { htmlFor: "state", children: "State" }), _jsx(Dropdown, { options: statesValues }), _jsx("label", { htmlFor: "zip-code", children: "Zip Code" }), _jsx("input", { id: "zip-code", value: zipCode, type: "number", onChange: (e) => setZipCode(e.target.value) })] }), _jsx(FullScreenModal, { isActive: showModal, text: "Employee registered", imgPath: '', onClose: handleCloseModal })] }), _jsx("button", { className: 'form-button_color', onClick: handleSaveEmployee, children: "Save" })] }));
};
export default Home;
