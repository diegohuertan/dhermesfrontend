import React from "react";
import PageContainer from "../../components/container/PageContainer";

function Home() {
  const volunteers = [
"https://randomuser.me/api/portraits/men/32.jpg",
"https://randomuser.me/api/portraits/women/44.jpg",
"https://randomuser.me/api/portraits/men/46.jpg",
"https://randomuser.me/api/portraits/women/47.jpg",
"https://randomuser.me/api/portraits/men/48.jpg",
"https://randomuser.me/api/portraits/women/49.jpg",
"https://randomuser.me/api/portraits/men/50.jpg",
"https://randomuser.me/api/portraits/women/51.jpg",
"https://randomuser.me/api/portraits/men/52.jpg",
"https://randomuser.me/api/portraits/women/53.jpg",
"https://randomuser.me/api/portraits/men/54.jpg",
"https://randomuser.me/api/portraits/women/55.jpg",
// Agrega más URLs de imágenes aquí...
  ];
  return (
    <>
      <PageContainer>
    <div className="grid grid-cols-2 bg-dhermesblue" style={{
 backgroundImage: "url('./pattern1.svg')",
 backgroundRepeat: 'repeat',
 backgroundPosition: "center",
 backgroundSize: "cover",
 padding: "0px",
}}>
  <div className="w-full" id="inicio">
    <img className="perrologin w-s" src={process.env.PUBLIC_URL + '/perrologin.png'} alt="Perro de Login" />
  </div>

  <div className="w-full p-4">
    <h1 className="text-letterwhite text-6xl mt-40">Bienvenidos Al Refugio</h1>
    <h1 className="text-letterblue text-6xl">Dhermes</h1>
    <p className="text-grey-200 max-w-xl text-4xl">Donde cada perro encuentra un hogar amoroso. Nos dedicamos a rescatar y realojar a perros necesitados.</p>
  </div>
</div>
<div className="bg-dhermeswhite flex justify-center items-center h-screen" style={{ position: "relative" }}>
  <div style={{
    backgroundImage: "url('./pattern1.svg')",
    backgroundRepeat: 'repeat',
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    transform: "rotate(180deg)"
  }}></div>
 <div className="flex justify-between items-center">
  <img className="ml-40" src="https://storage.googleapis.com/petfamily/imagenes/fundacion_dhermes/aurora.jpg" alt="Imagen redonda" style={{borderRadius: "50%", width: "25%", aspectRatio: "1/1", objectFit: "cover" }} />
  <div className="text-left m-20" style={{width: "50%"}}>
    <h1 className="text-grey-300 text-3xl">¿Quiénes somos?</h1>
    <p className="text-grey-100  mx-auto" style={{ fontSize: "1.5rem" }}>
      Somos una organización sin fines de lucro que se dedica a rescatar y realojar a perros necesitados. Nuestro objetivo es encontrar un hogar amoroso para cada perro que llega a nuestras instalaciones.
    </p>
  </div>
</div>
</div>
        <div className="bg-dhermesblue flex justify-center items-center h-screen"style={{ position: "relative" }}>
  <div style={{
    backgroundImage: "url('./pattern1.svg')",
    backgroundRepeat: 'repeat',
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "absolute",
    
    width: "100%",
    height: "100%",
    
    transform: "rotate(360deg)"
  }}></div>
          <div className="text-center">
  <h1 className="text-grey-300 text-3xl">Nuestros Voluntarios</h1>
  <p className="text-grey-100 text-xs">Trabajando por un mundo mejor</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
    {volunteers.map((volunteer, index) => (
      <img key={index} src={volunteer} alt="Volunteer" className="w-full h-auto object-cover rounded-full m-2" />
    ))}
  </div>
</div>
        </div>

        <div className="flex justify-center items-center bg-dhermeswhite h-screen"style={{ position: "relative" }}>
  <div style={{
    backgroundImage: "url('./pattern1.svg')",
    backgroundRepeat: 'repeat',
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "absolute",
    
    width: "100%",
    height: "100%",
    
    transform: "rotate(180deg)"
  }}></div>
          <div className="flex flex-col items-center">
            <h1 className="text-grey-300 text-5xl p-6 mb">¿Quieres hacer una donacion?</h1>
            <button className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce mb-4">
              ¡Dona aquí!
            </button>
          </div>
        </div>


        <div className="bg-dhermeshblue flex flex-row items-center p-4">
  <img src="/iconoTemp.svg" alt="Icono Temporal" className="h-20 w-20 mr-4" />
 <div>
 <h2 className="text-black text-xl mb-2">Redes Sociales</h2>
<div className="flex space-x-4">
  <img src={process.env.PUBLIC_URL + '/instagram.svg'} alt="Instagram" className="h-6 w-6 text-gray-500" />
  <img src={process.env.PUBLIC_URL + '/facebook.svg'} alt="Facebook" className="h-6 w-6 text-gray-500" />
</div>
</div>
</div>
      </PageContainer>
    </>
  );
}

export default Home;