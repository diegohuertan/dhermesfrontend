import React from 'react';
import './perrosContainer.css';

const BuscadorPerros = () => {
  return (
    <>
        <div className='rounded-full'>
            <div class="flex">
                <div class="flex border-2 rounded-l-lg">
                    <input class="px-4 py-2 w-lg focus:outline-none inputSearch" type="text" placeholder="Buscar por nombre"></input>
                </div>
                <button class="flex items-center justify-center px-4 border-l buscarNabvar border-none -ml-2 rounded-r-lg">
                    <span class="text-lg text-white font-bold">Buscar</span>
                </button>
            </div>
        </div>
    </>
  );
};

export default BuscadorPerros;