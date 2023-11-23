import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Suspense, lazy } from 'react';
const Home = lazy(() => import('./pages/CreateEmployee/Home'));
const Layout = lazy(() => import('./Layout/Layout'));
const EmployeeList = lazy(() => import('./pages/EmployeeList/EmployeeList'));
function App() {
    return (_jsx("div", { className: 'App', children: _jsx(BrowserRouter, { children: _jsx(Suspense, { fallback: _jsx("h1", { children: "Loading..." }), children: _jsx(Routes, { children: _jsxs(Route, { element: _jsx(Layout, {}), children: [_jsx(Route, { index: true, element: _jsx(Home, {}) }), _jsx(Route, { path: '/home', element: _jsx(Home, {}) }), _jsx(Route, { path: '/employeeList', element: _jsx(EmployeeList, {}) })] }) }) }) }) }));
}
export default App;
