import React from "react";
import Tabla from '../../components/TablaGenerica/Tabla';

const encabezados = ['ID','Nombre', 'Cantidad', 'Tipo', 'Ingreso', 'Vencimiento', 'Estado', 'Acciones'];
const datos = [
  [1,'Artismi', 50, 'Pastilla', '20/02/2002', '20/02/2022', 'Valido'],
  [2,'Artismi', 50, 'Pastilla', '20/02/2002', '20/02/2022', 'Vencido'],
  [3,'Artismi', 50, 'Pastilla', '20/02/2002', '20/02/2022', 'Valido'],
  [4,'Artismi', 50, 'Pastilla', '20/02/2002', '20/02/2022', 'Proximo'],
  [5,'Artismi', 50, 'Jarabe', '20/02/2002', '20/02/2022', 'Valido'],
  [6,'Artismi2', 50, 'Pastilla', '20/02/2002', '20/02/2022', 'Valido'],
  [7,'Artismi', 50, 'Pastilla', '20/02/2002', '20/02/2022', 'Valido'],
  [8,'Artismi', 50, 'Pastilla', '20/02/2002', '20/02/2022', 'Valido'],
  [9,'Artismi', 50, 'Pastilla', '20/02/2002', '20/02/2022', 'Valido'],
  [10,'Artismi', 50, 'Pastilla', '20/02/2002', '20/02/2022', 'Valido'],
  [11,'Artismi', 50, 'Pastilla', '20/02/2002', '20/02/2022', 'Valido']
];

function Inventario() {

  const handleEliminarClick = (rowIndex) => {
    console.log(datos[rowIndex][0]);
  };
  
  const handleEditarClick = (rowIndex) => {
    console.log('Editar');
  };

  const handleNuevoMedicamentoClick = (rowIndex) => {
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
