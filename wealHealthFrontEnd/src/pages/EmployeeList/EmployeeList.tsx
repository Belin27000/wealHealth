import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/Table/Table';
import './employeeList.scss'
import { Link } from 'react-router-dom';
// import { RootState } from '../../Store/Index'
import { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import { getDocs, collection } from 'firebase/firestore'



const EmployeeList = () => {

    // const dispatch = useDispatch()
    const [employee, setEmployee] = useState([])
    // const employees = useSelector((state: RootState) => state.employees)
    const employeeCollectionRef = collection(db, "Employees")

    useEffect(() => {
        const getEmployeeList = async () => {
            try {
                const data = await getDocs(employeeCollectionRef)
                const fiteredData = data.docs.map((doc) => ({ ...doc.data() }))
                console.log(fiteredData);
                setEmployee(fiteredData)

            } catch (err) {
                console.error(err);
            }
        };
        getEmployeeList()
    }, [])
    // console.log(employeeCollectionRef);

    if (!employee) {
        return <div>Loading...</div>
    }
    return (


        <div className='EmployeeList'>
            <Table employees={employee} />
            <Link to='/Home'>Home</Link>
        </div>
    );
};

export default EmployeeList;