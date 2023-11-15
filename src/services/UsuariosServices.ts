import { Usuario } from "../types/Usuarios";

//const BASE_URL = 'https://fakestoreapi.com';
const BASE_URL = 'http://localhost:8080';


export const UsuarioService = {

    getUsuarios: async (): Promise<Usuario[]> => {
        const response = await fetch(`${BASE_URL}/api/v1/usuarios`);
        const data = await response.json();
        return data;
    },

    getUsuario: async (id: number): Promise<Usuario> => {
        const response = await fetch(`${BASE_URL}/api/v1/usuarios/${id}`);
        const data = await response.json();
        return data;
    },

    createUsuario: async (usuario: Usuario): Promise<Usuario> => {
        const response = await fetch(`${BASE_URL}/api/v1/usuarios`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });

        const data = await response.json();
        return data;
    },

    updateUsuario: async (id: number, usuario: Usuario): Promise<Usuario> => {
        const response = await fetch(`${BASE_URL}/api/v1/usuarios/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });

        const data = await response.json();
        return data;
    },

    deleteUsuario: async (id: number): Promise<void> => {
        await fetch(`${BASE_URL}/api/v1/usuarios/${id}`, {
            method: "DELETE"
        });
    }

}