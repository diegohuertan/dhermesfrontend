import React, { useEffect, useState } from 'react';
import '../perrosContainer.css';
import { getPerro } from '../../../consultas/NoLog';
import { useParams } from 'react-router-dom';

const Perfilperrocontainer = () => {
    let id = useParams().id;
    const [data, setData] = useState(null); // Initial state set to null
    
    useEffect(() => {
        async function fetchData() {
            const data = await getPerro(id);
            setData(data);
            console.log(data);
        }
        fetchData();
    }, [id]);

    if (!data) {
        return <div>Loading...</div>; // Loading state while data is being fetched
    }

    return (
        <>
            <div className='pt-12 pb-12'>
                <div className='flex justify-center items-center pb-8'>
                    <div className="flex items-center contenedroPerfilEsp">
                        <div className="flex imgRounded contenedroPerfilBg">
                            <div className="contenedorimgperfil pt-4 pl-4 pb-4 p">
                                <img src={data.nolist?.imagen || null} alt="Perro" className="w-full h-full object-cover imgRounded" />
                            </div>
                            <div className="pt-4 pr-8 pl-12">
                                <p className="font-bold perfilnombretext">{data.nolist?.nombre}</p>
                                <p className="perfiltext">
                                    {data.nolist?.descripcion}
                                </p>
                                <ul className='grid grid-cols-3 gap-6 mt-4'>
                                    {data.listaDatos.map((dato, index) => (
                                        <li className='flex items-center' key={index}>
                                            <img className='mr-2' width={30} height={30} src={process.env.PUBLIC_URL + '/pataIcono.svg'} alt="Mi Icono" />
                                            {dato.data}
                                        </li>
                                    ))}
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
