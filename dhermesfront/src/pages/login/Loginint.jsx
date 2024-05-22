import React from "react";
import './Loginint.css';

function Loginint() {
  return (
    <>
    <div class="conatinerLog relative">
      <div class="absolute inset-0 LoginBg z-30">
      </div>
      <div class="absolute inset-0 z-40">
        <img className="imagen-responsiva object-contain bg-Move" src={process.env.PUBLIC_URL + '/pattern1.svg'} alt="Mi Icono" />
      </div>
      <div class="absolute inset-0 bg-yellow-500 z-10">
        Capa 3
      </div>
    </div>

    </>
  );
}



export default Loginint;