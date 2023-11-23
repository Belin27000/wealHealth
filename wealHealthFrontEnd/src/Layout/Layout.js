import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
const Layout = () => {
    return (_jsxs("div", { className: 'Layout', children: [_jsx(Header, {}), _jsx("main", { children: _jsx(Outlet, {}) })] }));
};
export default Layout;
