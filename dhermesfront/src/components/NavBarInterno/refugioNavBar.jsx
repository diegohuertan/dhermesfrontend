import * as React from 'react';
import { useState, useEffect } from 'react';
import './navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import imglogout from '../../assets/logoutimg.png';
import { useAuth } from '../../Context';

const RefugioNavBarInterno = () => {
    const pages = ['Tratamientos', 'Inventario'];
    const links = ['/Tratamientos', '/Inventario'];

    const [isNavOpen, setIsNavOpen] = useState(false);
    const location = useLocation(); 
    const {logout} = useAuth();
    const navigate = useNavigate(); 

    const handlelogout = () => {
        sessionStorage.clear();
        logout();
    };

    useEffect(() => { 
        if (location.hash) {
            const elementId = location.hash.substring(1);
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const handleNavigation = (link) => {
        if (link.startsWith('/')) { 
            navigate(link);
        } else { 
            const elementId = link.substring(1);
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                navigate('/'); // Navegar a la página principal antes de hacer scroll si el elemento no se encuentra
                setTimeout(() => {
                    const element = document.getElementById(elementId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100); // Pequeño retraso para asegurar que la navegación se complete
            }
        }
    };

    return (
        <>
            <nav className="navbarbg py-1">
                <div className="container flex items-center justify-between">
                    <div className="lg:hidden flex justify-between items-center">
                        {/* Este div solo se muestra en pantallas pequeñas (menos de lg, según Tailwind) */}
                        <div className="-mr-2 flex md:hidden items-center">
                            <button
                                onClick={() => setIsNavOpen(!isNavOpen)}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <img width={60} height={60} src={process.env.PUBLIC_URL + '/iconoTemp.svg'} alt="Mi Icono" />
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        {/* Este div solo se muestra en pantallas grandes (lg o más, según Tailwind) */}
                        <div className='flex items-center justify-center'>
                            <img width={60} height={60} src={process.env.PUBLIC_URL + '/iconoTemp.svg'} alt="Mi Icono" />
                            <ul className="flex navbarTextColor navbarTextSize justify-start ">
                                {pages.map((page, index) => (
                                    <li key={page} className="font-bold text-lg px-2">
                                        <a onClick={() => handleNavigation(links[index])} className="font-bold text-lg px-4 cursor-pointer">
                                            {page}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='px-2'>
                        <button onClick={handlelogout}><Link to="/Inicio"><img width={60} height={60} src={imglogout} alt="Mi Icono" /></Link></button>
                    </div>
                </div>
                <div className={`${isNavOpen ? '' : 'hidden'} md:hidden`}>
                    <div className='flex justify-center'>
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex-row">
                            {pages.map((page, index) => (
                                <a
                                    key={page}
                                    onClick={() => handleNavigation(links[index])}
                                    className="navbarTextColor text-lg hover:text-white block px-3 py-2 rounded-md text-base font-bold cursor-pointer"
                                >
                                    {page}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default RefugioNavBarInterno;
