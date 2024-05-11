import React from "react";
import './Loginint.css';

function Loginint() {
  return (
    <>
    <div class="h-screen w-screen relative">
      <div class="absolute inset-0 LoginBg z-30">
        Capa 1
      </div>
      <div class="absolute inset-0 bg-green-500 z-20">
        Capa 2
      </div>
      <div class="absolute inset-0 bg-yellow-500 z-10">
        Capa 3
      </div>
    </div>

    </>
  );
}



export default Loginint;