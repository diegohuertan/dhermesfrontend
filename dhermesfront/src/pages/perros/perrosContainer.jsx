import React from "react";
import AdoptionCard from "./AdoptionCard";
import './perrosContainer.css';
import HeaderPerros from "./HeaderPerros";
import BuscadorPerros from "./BuscadorPerros";

function PerrosContainer() {
  return (
    <>
      <HeaderPerros />
      <div className="perros p-4">
        <BuscadorPerros />
        <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4">
          <AdoptionCard
            gender="Macho"
            name="Cooper"
            imageSrc={process.env.PUBLIC_URL + '/perroTest.png'}
          />
          <AdoptionCard
            gender="Macho"
            name="Cooper"
            imageSrc={process.env.PUBLIC_URL + '/perroTest.png'}
          />
          <AdoptionCard
            gender="Macho"
            name="Cooper"
            imageSrc={process.env.PUBLIC_URL + '/perroTest.png'}
          />
          <AdoptionCard
            gender="Macho"
            name="Cooper"
            imageSrc={process.env.PUBLIC_URL + '/perroTest.png'}
          />
          <AdoptionCard
            gender="Macho"
            name="Cooper"
            imageSrc={process.env.PUBLIC_URL + '/perroTest.png'}
          />
          <AdoptionCard
            gender="Macho"
            name="Cooper"
            imageSrc={process.env.PUBLIC_URL + '/perroTest.png'}
          />
          <AdoptionCard
            gender="Macho"
            name="Cooper"
            imageSrc={process.env.PUBLIC_URL + '/perroTest.png'}
          />
          <AdoptionCard
            gender="Macho"
            name="Cooper"
            imageSrc={process.env.PUBLIC_URL + '/perroTest.png'}
          />
          <AdoptionCard
            gender="Macho"
            name="Cooper"
            imageSrc={process.env.PUBLIC_URL + '/perroTest.png'}
          />
        </div>
      </div> 
    </>
  );
}

export default PerrosContainer;
