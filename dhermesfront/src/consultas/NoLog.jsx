import axios from 'axios';

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

export async function login(correo, password) {
    try {
      console.log(correo, password);
        const response = await axios.post(API_URL + 'validarsesion',
            {
              correo: correo,
              contraseña: password
            }
        );
        if (response.success) {
            localStorage.setItem('token', response.token);
        }
        return response.data.success;
    } catch (error) {
        console.error(error);
        return {};
    }
}

export async function getMedicamentos() {
    try {
        const response = await axios.get(`${API_URL}medicamentos`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getTratamientos() {
    try {
        const response = await axios.get(`${API_URL}tratamientos`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}