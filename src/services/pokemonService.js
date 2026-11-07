import axios from 'axios';

// Asegurar URL base válida y sin barras diagonales al final
const RAW_BASE_URL = import.meta.env.VITE_POKEAPI_URL || 'https://pokeapi.co/api/v2';
const BASE_URL = RAW_BASE_URL.replace(/\/+$/, '');

export const getPokemonList = async (limit = 20, offset = 0) => {
  try {
    // PokéAPI requiere la barra final '/' antes de los query params para evitar redirecciones 301 y errores 403
    const response = await axios.get(
      `${BASE_URL}/pokemon/?limit=${limit}&offset=${offset}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
    return response.data.results;
  } catch (error) {
    throw new Error('Error al obtener la lista de datos: ' + error.message);
  }
};

export const getPokemonDetails = async (nameOrId) => {
  try {
    // Se incluye la barra final '/' para evitar redirecciones
    const response = await axios.get(
      `${BASE_URL}/pokemon/${nameOrId.toString().toLowerCase()}/`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`No se pudo obtener la información de "${nameOrId}"`);
  }
};
