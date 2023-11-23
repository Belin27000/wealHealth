import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/Table/Table';
import './employeeList.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchEmployees } from '../../Store/EmployeeSlice';
const EmployeeList = () => {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees.EmployeeList);
    const fetchData = async () => {
        await dispatch(fetchEmployees());
    };
    useEffect(() => {
        fetchData();
    }, [dispatch]);
    // console.log(fetchEmployees());
    // console.log('EmployeeList Fetch', employees);
    return (_jsxs("div", { className: 'EmployeeList', children: [_jsx(Table, { employees: employees }), _jsx(Link, { to: '/Home', children: "Home" })] }));
};
export default EmployeeList;
