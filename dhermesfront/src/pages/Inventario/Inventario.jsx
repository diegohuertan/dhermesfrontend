import React from "react";
import Tabla from '../../components/TablaGenerica/Tabla';

const encabezados = ['Nombre', 'Cantidad', 'Tipo', 'Ingreso', 'Vencimiento', 'Estado', 'Acciones'];
const datos = [
  ['Artismi', 50, 'Pastilla', '20/02/2002', '20/02/2022', 'Valido'],
  ['Artismi', 50, 'Pastilla', '20/02/2002', '20/02/2022', 'Vencido'],
  ['Artismi', 50, 'Pastilla', '20/02/2002', '20/02/2022', 'Valido'],
  ['Artismi', 50, 'Pastilla', '20/02/2002', '20/02/2022', 'Proximo'],
  ['Artismi', 50, 'Jarabe', '20/02/2002', '20/02/2022', 'Valido'],
  ['Artismi2', 50, 'Pastilla', '20/02/2002', '20/02/2022', 'Valido'],
  ['Artismi', 50, 'Pastilla', '20/02/2002', '20/02/2022', 'Valido'],
  ['Artismi', 50, 'Pastilla', '20/02/2002', '20/02/2022', 'Valido'],
  ['Artismi', 50, 'Pastilla', '20/02/2002', '20/02/2022', 'Valido'],
  ['Artismi', 50, 'Pastilla', '20/02/2002', '20/02/2022', 'Valido'],
  ['Artismi', 50, 'Pastilla', '20/02/2002', '20/02/2022', 'Valido']
];

function Inventario() {

  const handleEliminarClick = () => {
    console.log('Eliminar');
  };
  
  const handleEditarClick = () => {
    console.log('Editar');
  };

  const handleNuevoMedicamentoClick = () => {
    console.log('Nuevo medicamento');
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
            }
        ]}
        agregar={[{
            texto: 'Agregar Medicamento',
            onClick: handleNuevoMedicamentoClick
            }]}
        />

    </>
  );
}

export default Inventario;
