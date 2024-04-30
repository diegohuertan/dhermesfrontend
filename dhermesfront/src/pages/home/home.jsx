import React from "react";
import PageContainer from "../../components/container/PageContainer";

function Home() {
const volunteers = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  // Agrega más URLs de imágenes aquí...
];
  return (
    <PageContainer>
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
  
    
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Inicio
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Rescatados
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Nosotros
      </a>
      
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Donar</a>
    </div>
  </div>
</nav>
      <div className="md:container md:mx-auto grid grid-cols-2" >
        <div className="w-1/2 h-1/2">

        <img src="https://images.vexels.com/media/users/3/199967/isolated/preview/20ca9ef19d267deb71300eb91748b98a-ilustracion-de-perro-weimaraner-feliz.png" alt="perro"  />
        </div>
        <div className="p-4 " >
        <h1 className="text-letterblue text-4xl">Bienvenidos Al Refugio</h1>
        <h1 className="text-letterblue text-4xl">Dhermes</h1>
        <p className="text-grey-300 max-w-xl">Donde cada perro encuentra un hogar amoroso. Nos dedicamos a rescatar y realojar a perros necesitados.</p>

        </div>
      </div>

     <div className="bg-dhermeswhite w-full:container md:mx-auto flex justify-center items-center">

  <div className="text-center">
    <h1 className="text-grey-300 text-3xl">¿Quiénes somos?</h1>
    <p className="text-grey-300 max-w-xl mx-auto" style={{
      fontSize: "1.5rem"

    }} >Somos una organización sin fines de lucro que se dedica a rescatar y realojar a perros necesitados. Nuestro objetivo es encontrar un hogar amoroso para cada perro que llega a nuestras instalaciones. </p>
  </div>
</div>

<div className="bg-dhermesblue w-full:container md:mx-auto flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-grey-300 text-3xl">Nuestros Voluntarios</h1>
        <p className="text-grey-100 text-xs">Trabajando por un mundo mejor</p>
        <div className="flex justify-center flex-wrap">
          {volunteers.map((volunteer, index) => (
            <img key={index} src={volunteer} alt="Volunteer" className="w-24 h-24 object-cover rounded-full m-2" />
          ))}
        </div>
      </div>
    </div>



      

      <div className=" w-full:container md:mx-auto flex justify-center items-center">
       
        <div className="flex flex-col items-center">
        <h1 className="text-grey-300 text-5xl p-4 mb">¿Quieres hacer una donacion?</h1>
        <button className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce mb-4">
       ¡Dona aquí!
        </button>
      </div>
      </div>
        
      <div className="bg-dhermesblue w-full:container md:mx-auto flex justify-center items-center"><h1>footer</h1></div>
        
      
    </PageContainer>
  );
}



export default Home;