import './header.scss'
import Logo from '../../assets/wealHealthLogo.jpeg'
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <div className='Header'>
            <div className='Header-img-container'>
                <img src={Logo} width='300' height='276' alt='Wealth Health company' />
            </div>
            <NavBar />
            <h1>HRnet</h1>
        </div>
    );
};

export default Header;