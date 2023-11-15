import { LoginRequest } from "../types/LoginRequest";

//const BASE_URL = 'https://fakestoreapi.com';
const BASE_URL = 'http://localhost:8080';


export const AuthService = {
  login: async (loginRequest: LoginRequest): Promise<void> => {
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginRequest),
      });

      if (!response.ok) {
        throw new Error('Inicio de sesión fallido, intenta nuevamente');
      }

      // Recuperar el token de las cabeceras de la respuesta
      const token = response.headers.get('Authorization');

      if (!token) {
        throw new Error('No se encontró el token en las cabeceras de la respuesta');
      }

      // Almacena el token en localStorage
      localStorage.setItem('token', token);


    } catch (error) {
      console.error('Error al iniciar sesión:');
      throw error; // Re-lanza el error para que pueda ser manejado por el código que llama a esta función
    }
  },
};