import React from 'react';
import '../perrosContainer.css';

const Perfilperrocontainer = ({id}) => {
  return (
    <>
        <div className='pt-12 pb-12'>
            <div className='flex justify-center items-center pb-8'>
                <div class="flex items-center contenedroPerfilEsp">
                    <div class="flex imgRounded contenedroPerfilBg">
                        <div class="contenedorimgperfil pt-4 pl-4 pb-4 p">
                            <img src={process.env.PUBLIC_URL + '/perroTest.png'} alt="Perro" class="w-full h-full object-cover imgRounded" />
                        </div>
                        <div class="pt-4 pr-8 pl-12">
                            <p class="font-bold perfilnombretext">Copper</p>
                            <p class="perfiltext">
                                Mauris commodo lacinia nisl, ut sodales ex vestibulum sed. Sed condimentum, nibh vitae dignissim laoreet, ex nisl imperdiet ex, at varius magna velit quis purus. Suspendisse at magna congue, rhoncus ligula tincidunt, efficitur purus. Vestibulum in vulputate odio.
                            </p>
                            <ul className='grid grid-cols-3 gap-6 mt-4'>
                                <li className='flex items-center'>
                                    <img className='mr-2 ' width={30} height={30} src={process.env.PUBLIC_URL + '/pataIcono.svg'} alt="Mi Icono" />
                                    Macho 
                                </li>
                                <li className='flex items-center'>
                                    <img className='mr-2' width={30} height={30} src={process.env.PUBLIC_URL + '/pataIcono.svg'} alt="Mi Icono" />
                                    3 años 
                                </li>
                                <li className='flex items-center'>
                                    <img className='mr-2' width={30} height={30} src={process.env.PUBLIC_URL + '/pataIcono.svg'} alt="Mi Icono" />
                                    Vacunado
                                </li>
                                <li className='flex items-center'>
                                    <img className='mr-2' width={30} height={30} src={process.env.PUBLIC_URL + '/pataIcono.svg'} alt="Mi Icono" />
                                    Casa con patio
                                </li>
                                <li className='flex items-center'>
                                    <img className='mr-2' width={30} height={30} src={process.env.PUBLIC_URL + '/pataIcono.svg'} alt="Mi Icono" />
                                    No apto para niños
                                </li>
                                <li className='flex items-center'>
                                    <img className='mr-2' width={30} height={30} src={process.env.PUBLIC_URL + '/pataIcono.svg'} alt="Mi Icono" />
                                    No vacunado
                                </li>
                                <li className='flex items-center font-medium'>
                                    <img className='mr-2' width={30} height={30} src={process.env.PUBLIC_URL + '/pataIcono.svg'} alt="Mi Icono" />
                                    Pelo Corto
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className="bg-black hover:bg-gray-800 text-white font-bold py-8 px-24 rounded-full">
                    <div className="flex items-center">
                        <i className="fas fa-heart text-white mr-4 text-4xl"></i>
                        <p className="text-white text-4xl">Adoptar</p>
                    </div>
                </button>
            </div>
        </div>
    </>
  );
};

export default Perfilperrocontainer;