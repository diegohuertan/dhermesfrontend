import React, { useEffect, useState } from "react";
import Tabla from '../../components/TablaGenerica/Tabla';
import { getTratamientos } from "../../consultas/NoLog";

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
  const [trata, setTrata] = useState(datos); // Initialize with datos for testing

  useEffect(() => {
    const cargarMedicamentos = async () => {
      const data = await getTratamientos();
      console.log(data);
      const format = data.map((tratamiento) => [
        tratamiento.diagnostico || '',
        tratamiento.codigo || '',
        tratamiento.duracion || '',
        tratamiento.ultimaActualizacion || ''
      ]);
      console.log(format);
      setTrata(format);
    };

    cargarMedicamentos();
  }, []); // The empty array ensures this runs only once when the component mounts

  const handleEliminarClick = (rowIndex) => {
    console.log(trata[rowIndex][0]); // Assuming trata contains the relevant data
  };
  
  const handleEditarClick = (rowIndex) => {
    console.log('Editar');
  };

  const handleListarPerrosClick = (rowIndex) => {
    console.log('Listar Perros');
  };

  const handleNuevoTratamientoClick = () => {
    console.log('Nuevo Tratamiento');
  }

  return (
    <>
      <Tabla
        filaspagina={6}
        encabezados={encabezados}
        datos={trata} // Use the state variable
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
