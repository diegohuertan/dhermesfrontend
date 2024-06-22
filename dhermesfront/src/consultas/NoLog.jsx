import axios from 'axios';


const dataExample = [{
    "Datos": {
      "esterilizacion": {
        "fecha": "20/02/2023",
        "lugar": "clinica 1"
      },
      "Adopcion": {
        "Persona": {
          "nombre": "",
          "rut": "",
          "direccion": "",
          "telefono": "",
          "correo": "",
          "retorno": ""
        },
        "fecha": ""
      },
      "fechaIngreso": "5 años",
      "fechaNacimiento": "10 años"
    },
    "Vacunas": {
      "vacuna1": "si",
      "vacuna2": "si",
      "Antirabica": "si",
      "vacunaAnual": "si",
      "antiparasitarioInterno": "si",
      "antiparasitarioExterno": "si"
    },
    "_id": "65b18c06203680dc64febb51",
    "nombre": "inu",
    "imagen": "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
    "Tratamientos": [
      "659ee41f20f00c8d58ce98b9",
      "65a565ac9c90ba20a3ffad6e"
    ],
    "__v": 0
  }]

const API_URL = 'http://localhost:3000/api/';

function convertDataUtil(data) {
    return {
        nolist: {
            nombre: data.nombre || 'Nombre no disponible',
            imagen: data.imagen || 'Imagen no disponible',
            descripcion: data.descripcion || "Perro rescatado por la fundacion D'Hermes, se encuentra en busca de un hogar amoroso."
        },
        listaDatos: [
            { data: (data.Vacunas && Object.keys(data.Vacunas).length > 0) ? 'Vacunado' : 'No Vacunado' },
            { data: data.Datos.fechaNacimiento || 'Fecha de nacimiento no disponible' },
            { data: (data.Datos.esterilizacion && Object.keys(data.Datos.esterilizacion.fecha).length > 0) ? 'Esterilizado' : 'No Esterilizado' }
        ]
    };
}


export async function getPerros() {
    try {
        const response = await axios.get(`${API_URL}perros`);
        const perros = response.data.map(perro => ({
            id: perro._id,
            nombre: perro.nombre,
            imagen: perro.imagen
        }));

        return perros;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getPerro(idperro) {
    try {
        const response = await axios.post(API_URL + 'filtrarId',
            {
                id: idperro
            }
        );
        return convertDataUtil(response.data);
    } catch (error) {
        console.error(error);
        return {};
    }
}