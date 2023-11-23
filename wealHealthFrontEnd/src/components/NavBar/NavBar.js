import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaPlusCircle, FaThList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navBar.scss';
const NavBar = () => {
    return (_jsxs("nav", { className: 'NavBar', children: [_jsxs(Link, { to: '/home', children: [_jsx(FaPlusCircle, {}), " Create Employee"] }), _jsxs(Link, { to: '/EmployeeList', children: [_jsx(FaThList, {}), " Employee List"] })] }));
};
export default NavBar;
