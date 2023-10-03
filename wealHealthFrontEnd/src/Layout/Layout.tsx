import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Layout = () => {
    return (
        <div className='Layout'>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;