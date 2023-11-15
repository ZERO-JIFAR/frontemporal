import { RegisterRequest } from "../types/RegisterRequest";

//const BASE_URL = 'https://fakestoreapi.com';
const BASE_URL = 'http://localhost:8080';


export const AuthService = {
  login: async (registerRequest: RegisterRequest): Promise<void> => {
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerRequest),
      });

      if (!response.ok) {
        throw new Error('Registro fallido, intenta nuevamente');
      }


    } catch (error) {
      console.error('Error al iniciar sesión:');
      throw error; // Re-lanza el error para que pueda ser manejado por el código que llama a esta función
    }
  },
};