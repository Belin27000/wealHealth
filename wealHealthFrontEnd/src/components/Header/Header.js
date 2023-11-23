import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './header.scss';
import Logo from '../../assets/wealHealthLogo.jpeg';
import NavBar from '../NavBar/NavBar';
const Header = () => {
    return (_jsxs("div", { className: 'Header', children: [_jsx("div", { className: 'Header-img-container', children: _jsx("img", { src: Logo, width: '300', height: '276', alt: 'Wealth Health company' }) }), _jsx(NavBar, {}), _jsx("h1", { children: "HRnet" })] }));
};
export default Header;
