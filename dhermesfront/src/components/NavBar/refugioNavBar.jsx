import * as React from 'react';
import { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const RefugioNavBar = () => {

    const pages = ['Inicio', 'Rescatados', 'Nosotros','Donaciones'];

    const [isNavOpen, setIsNavOpen] = useState(false);


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
                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
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
                <ul className="flex navbarTextColor navbarTextSize justify-start "> {/* Cambio aquí */}
                    <li><a href="#inicio" className="font-bold text-lg px-4">Inicio</a></li>
                    <li><a href="#oerris" className="font-bold text-lg px-4">Acerca de</a></li>
                    <li><a href="#b" className="font-bold text-lg px-4">Servicios</a></li>
                    <li><a href="#c" className="font-bold text-lg px-4">Contacto</a></li>
                </ul>
            </div>
        </div>
        <div className='px-2'>
            <Link to="/login"><img width={60} height={60} src={process.env.PUBLIC_URL + '/casasf.png'} alt="Mi Icono" /></Link>
            
        </div>
        
    </div>
    <div className={`${isNavOpen ? '' : 'hidden'} md:hidden`}>
        <div className='flex justify-center'>
            <div className="px-2 pt-2  pb-3 space-y-1 sm:px-3 flex-row">
            {pages.map((page) => (
                <a
                key={page}
                href="#"
                className="navbarTextColor text-lg hover:text-white block px-3 py-2 rounded-md text-base font-bold"
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

export default RefugioNavBar;
