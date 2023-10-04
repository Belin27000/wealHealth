import Table from '../../components/Table';
import './employeeList.scss'
import { Link } from 'react-router-dom';
const EmployeeList = () => {
    return (


        <div className='EmployeeList'>
            <Table />
            <Link to='/Home'>Home</Link>
        </div>
    );
};

export default EmployeeList;