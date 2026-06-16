import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './css/reset.css';
import './css/main.css';
import { Header, Footer } from './component/index';
import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';

function App() {
    const [openMenu, setOpenMenu] = useState(null);
    const [user, setUser] = useState(null);
    const location = useLocation();

    const toggleMenu = (menu) => {
        if (openMenu === menu) {
            setOpenMenu(null);
        } else {
            setOpenMenu(menu);
        }
    };

    return (
        <>
            <Header 
                openMenu={openMenu} 
                toggleMenu={toggleMenu} 
                setOpenMenu={setOpenMenu}
                user={user} 
                setUser={setUser}   
            />

            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/Login" element={<Login setUser={setUser} />}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Cart" element={<Cart/>}/>
            </Routes>

            {location.pathname !== '/Login' && location.pathname !== '/Register' && <Footer />}
        </>
    );
}

export default App;