import React, { useEffect, useState } from "react";
import AdoptionCard from "./AdoptionCard";
import './perrosContainer.css';
import HeaderPerros from "./HeaderPerros";
import BuscadorPerros from "./BuscadorPerros";
import { getPerros } from "../../consultas/NoLog";

function PerrosContainer() {
  const [perros, setPerros] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPerros();
      setPerros(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <HeaderPerros />
      <div className="perros p-4">
        <BuscadorPerros/>
        <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-6">
          {perros.map(perro => (
            <AdoptionCard
              key={perro.id}
              id={perro.id}
              name={perro.nombre}
              imageSrc={perro.imagen}
              gender="macho" 
            />
          ))}
        </div>
      </div> 
    </>
  );
}

export default PerrosContainer;
