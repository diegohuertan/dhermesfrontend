import React, { useState } from "react";
import PropTypes from 'prop-types';
import './Inventario.css';

function Tabla({filaspagina, encabezados, datos, acciones, agregar }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchColumn, setSearchColumn] = useState(encabezados[0]);
  const itemsPerPage = filaspagina;

  const columnIndices = encabezados.reduce((acc, encabezado, index) => {
    acc[encabezado] = index;
    return acc;
  }, {});

  const filteredData = datos.filter(row => 
    row[columnIndices[searchColumn]].toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const maxVisibleButtons = 3;
  const startButton = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
  const endButton = Math.min(
    Math.ceil(filteredData.length / itemsPerPage),
    startButton + maxVisibleButtons - 1
  );

  return (
    <div className="mx-16 mt-24">
        <div className="mb-4 flex" >
            <div className="relative w-1/1">
                <select
                value={searchColumn}
                onChange={(e) => setSearchColumn(e.target.value)}
                className="bg_buscador appearance-none px-4 py-2 border border-r-2 rounded-l-md focus:outline-none w-full"
                >
                {encabezados.slice(0, -1).map((encabezado, index) => (
                    <option key={index} value={encabezado}>
                    {encabezado}
                    </option>
                ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <img src={`${process.env.PUBLIC_URL}/iconobusinv.svg`} alt="icon" className="h-4 w-4" />
                </div>
            </div>
            <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg_buscador px-4 py-2 border border-l-0 rounded-r-md w-200 focus:outline-none focus:ring-0"
            />
            {agregar.map((accion, index) => (
              <button key={index} className="bg_nuevomed text-lg font-bold text-white px-4 py-2 ml-4 rounded-full" onClick={accion.onClick}>
                {accion.texto}
              </button>
            ))}
        </div>
      <div className="overflow-x-auto redondeo mt-16">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg_header">
            <tr>
              {encabezados.map((encabezado, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 text-center text-lg font-bold text-gray-700 tracking-wider"
                >
                  {encabezado}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.map((fila, rowIndex) => (
              <tr key={rowIndex}>
                {fila.map((celda, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-6 py-4 whitespace-nowrap text-lg  text-center"
                  >
                    {celda === 'Valido' || celda === 'Vencido' || celda === 'Proximo' ? (
                        <span
                        className={`px-9 py-2 inline-flex text-lg leading-5 font-bold rounded-full ${
                            celda === 'Valido' ? 'bg-green-100 text-green-800' : 
                            celda === 'Vencido' ? 'bg-red-100 text-red-800' : 
                            celda === 'Proximo' ? 'bg-yellow-100 text-yellow-800' : '' // Color amarillo para 'Proximo'
                            }`}
                        >
                        {celda}
                      </span>
                    ) : celda}
                  </td>
                ))}
                <td className="flex align-middle items-center justify-center px-4 py-2 whitespace-nowrap text-lg font-bold">
                <div className="flex space-x-2">
                  {acciones.map((accion, index) => (
                    <button key={index} className="focus:outline-none" onClick={() => accion.onClick(rowIndex)}>
                      <img src={`${process.env.PUBLIC_URL}/${accion.icono}`} alt={accion.texto} className="h-12 w-12 cursor-pointer" />
                    </button>
                  ))}
                </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-center">
        {Array.from({ length: endButton - startButton + 1 }, (_, index) => (
          <button
            key={index + startButton}
            onClick={() => paginate(index + startButton)}
            className={`px-3 py-1 mx-1 rounded-md ${
              currentPage === index + startButton ? 'bg_header text-white' : 'bg-gray-200'
            }`}
          >
            {index + startButton}
          </button>
        ))}
      </div>
    </div>
  );
}

Tabla.propTypes = {
  encabezados: PropTypes.array.isRequired,
  datos: PropTypes.array.isRequired,
  acciones: PropTypes.arrayOf(
    PropTypes.shape({
      texto: PropTypes.string.isRequired,
      icono: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default Tabla;
