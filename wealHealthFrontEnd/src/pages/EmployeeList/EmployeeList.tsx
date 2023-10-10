import { useSelector } from 'react-redux';
import Table from '../../components/Table/Table';
import './employeeList.scss'
import { Link } from 'react-router-dom';



const EmployeeList = () => {

    const employees = useSelector((state) => state.employees)

    return (


        <div className='EmployeeList'>
            <Table employees={employees} />
            <Link to='/Home'>Home</Link>
        </div>
    );
};

export default EmployeeList;