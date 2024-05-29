import React from 'react';
import './perrosContainer.css';

const BuscadorPerros = () => {
  return (
    <>
        <div className="rounded-full largoinput"> {/* Add w-full for full width */}
        <div className="flex">
            <div className="flex-grow border-2 rounded-l-lg"> {/* flex-grow replaces w-lg */}
            <input 
                className="px-4 py-2 w-full focus:outline-none inputSearch"
                type="text"
                placeholder="Buscar por nombre"
            />
            </div>
            <button className="flex items-center justify-center px-4 border-l buscarNabvar border-none -ml-2 rounded-r-lg">
            <span className="text-lg text-white font-bold">Buscar</span>
            </button>
        </div>
        </div>

    </>
  );
};

export default BuscadorPerros;