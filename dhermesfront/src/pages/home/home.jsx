import React from "react";
import "./home.css";
import PageContainer from "../../components/container/PageContainer";

function Home() {
const volunteers = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",

  // Agrega más URLs de imágenes aquí...
];
  return (
    <>
    <PageContainer>
      <div>
        <div className="h-[600px] relative bg-teal-100 grid grid-cols-3 overflow-hidden">
          <div className="col-span-1 hidden md:block bg-cover bg-center " style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "perrologin.png"})` }}>
          </div>
          <div className="col-span-2 flex mt-40 ml-20 ">
            <div >
              <div className="text-7xl mb-3">
                <h1 className="color2">Bienvenido al refugio</h1>
                <h1 className="color1">D'Hermes</h1>
              </div>
              <p className="text-3xl">Donde cada perro encuentra un hogar amoroso. Nos dedicamos a rescatar y realojar a perros necesitados.</p>
            </div>
          </div>
        </div>


      <div className="h-[500px] relative bg-green-100 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <img className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover" src={process.env.PUBLIC_URL + "PerroNosotros.jpeg"} alt="Imagen" />

            <div>
              <h1 className="text-3xl md:text-5xl mb-6">¿Quiénes somos?</h1>
              <p className="text-base md:text-xl">Mauris commodo lacinia nisl, ut sodales ex vestibulum sed. Sed condimentum, nibh vitae dignissim laoreet, ex nisl imperdiet ex, at varius magna velit quis purus. Suspendisse at magna congue, rhoncus ligula tincidunt, efficitur purus. Vestibulum in vulputate odio.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="relative bg-teal-100 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl mb-8 text-center">Nuestros voluntarios</h1>
          <p className="opacidad1 text-sm md:text-lg mb-12 text-center">Trabajando por un mundo mejor</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {volunteers.map((volunteer, index) => (
              <div key={index} className="flex flex-col items-center">
                <img className="rounded-full w-24 h-24 sm:w-32 sm:h-32 object-cover mb-4" src={volunteer} alt={`Voluntario ${index + 1}`} />
                <h1 className="text-sm sm:text-base text-center font-semibold">{`Voluntario ${index + 1}`}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>


        <div className="h-[700px] relative bg-green-100 grid grid-cols-4 grid-rows-3 overflow-hidden">
          <div className="col-span-1 row-start-1 row-end-3 hidden xl:block">  {/* Oculta en pantallas pequeñas */}
            <img 
              className="imgPerro2 absolute bottom-[174px] right-left" 
              src={process.env.PUBLIC_URL + "PerroDonaciones.png"} 
            />
          </div>
          <div className="col-span-4 xl:col-span-3 flex items-center justify-center row-start-1 row-end-3 z-10"> 
            <div className="text-4xl md:text-7xl mb-8 text-center">
              <h1 className="font-semibold color3">¿Quieres hacer una donación?</h1>
              <button className="bg-teal-500 hover:bg-teal-300 py-2 px-4 rounded-3xl mt-8">
                <h1 className="text-white font-bold text-3xl md:text-5xl">¡Dona aquí!</h1>
              </button>
            </div>
          </div>
          <div className="bg-teal-500 col-span-4 row-start-3 row-end-3"> </div>
        </div>
      </div>
    </PageContainer>
    </>
  );
}



export default Home;