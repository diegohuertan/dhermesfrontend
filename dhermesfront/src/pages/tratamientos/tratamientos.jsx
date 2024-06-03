import React from "react";
import Tabla from '../../components/TablaGenerica/Tabla';

const encabezados = ['Diagnostico', 'Codigo', 'Duracion', 'Ultima actualizacion','Acciones'];
const datos = [
  ['Moquillo', 1050, '5 sem', '20/02/2002'],
  ['Hepatitis', 1055, '1 sem', '20/02/2002'],
  ['Toxoplasmosis', 2030, '2 sem', '20/02/2002'],
  ['Leptospirosis', 3030, '3 sem', '20/02/2002'],
  ['Parvovirus', 2222, '6 sem', '20/02/2002'],
  ['Moquillo', 1050, '5 sem', '20/02/2002'],
  ['Hepatitis', 1055, '1 sem', '20/02/2002'],
  ['Toxoplasmosis', 2030, '2 sem', '20/02/2002'],
  ['Leptospirosis', 3030, '3 sem', '20/02/2002'],
  ['Parvovirus', 2222, '6 sem', '20/02/2002'],
  ['Moquillo', 1050, '5 sem', '20/02/2002'],
  ['Hepatitis', 1055, '1 sem', '20/02/2002'],
  ['Toxoplasmosis', 2030, '2 sem', '20/02/2002'],
  ['Leptospirosis', 3030, '3 sem', '20/02/2002'],
  ['Parvovirus', 2222, '6 sem', '20/02/2002'],

];

function Tratamientos() {

  const handleEliminarClick = () => {
    console.log('Eliminar');
  };
  
  const handleEditarClick = () => {
    console.log('Editar');
  };

  const handleListarPerrosClick = () => {
    console.log('Listar Perros');
  };

  const handleNuevoTratamientoClick = () => {
    console.log('Nuevo Tratamiento');
  }

  return (
    <>
    <Tabla
        encabezados={encabezados}
        datos={datos}
        acciones={[
            {
            texto: 'Eliminar',
            icono: 'eliminar.svg',
            onClick: handleEliminarClick
            },
            {
            texto: 'Editar',
            icono: 'editar.svg',
            onClick: handleEditarClick
            },
            {
            texto: 'Ver',
            icono: 'listaicono.svg',
            onClick: handleListarPerrosClick
            }
        ]}
        agregar={[{
            texto: 'Agregar Tratamiento',
            onClick: handleNuevoTratamientoClick
            }]}
        />

    </>
  );
}

export default Tratamientos;
