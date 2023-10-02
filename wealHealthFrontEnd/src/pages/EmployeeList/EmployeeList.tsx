import './employeeList.scss'
import { Link } from 'react-router-dom';
const EmployeeList = () => {
    return (


        <div className='EmployeeList'>
            <table className='EmployeeList-table'>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Start Date</th>
                    <th>Department</th>
                    <th>Date of Birth</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                </tr>
            </table>
            <Link to='/Home'>Home</Link>
        </div>
    );
};

export default EmployeeList;