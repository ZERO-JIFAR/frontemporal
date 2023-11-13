import { Usuario } from "../types/Usuarios";


const BASE_URL = 'https://fakestoreapi.com'; // <<-----URL A CAMBIAR CON NUESTRA PROPIA API


export const UsuariosServices = {

    //METODO PARA OBTENER TODOS LOS USUARIOS
    getUsuarios: async (): Promise<Usuario[]> => {
        const response = await fetch(`${BASE_URL}/users`); /* ACA DEBERIA SER /EMPLEADOS PERO SERA PROBLEMA DEL FABRI DEL FUTURO */
        const data = await response.json();

        return data;
    },
    //METODO PARA OBTENER UN SOLO USUARIO PASANDOLE EL ID_USUARIO 
    getUsuario: async (id:number): Promise<Usuario> => {
        const response = await fetch(`${BASE_URL}/users/${id}`);
        const data = await response.json();

        return data;
    },
    //METODO PARA CREAR UN USUARIO NUEVO PASANDOLE LOS DATOS 
    createUsuario: async (usuario: Usuario): Promise<Usuario> => {
        const response = await fetch(`${BASE_URL}/users`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });

        const data = await response.json();
        return data;
    },
    //METODO PARA ACTUALIZAR UN USUARIO PASANDOLE UN ID_USUARIO y LOS DATOS DEL USUARIO NUEVOS
    updateUsuario: async (id: number,usuario: Usuario): Promise<Usuario> => {

        const response = await fetch(`${BASE_URL}/users/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });

        const data = await response.json();
        return data;
    },
    //METODO PARA ELIMINAR UN USUARIO PASANDOLE UN ID_USUARIO
    deleteUsuario: async (id: number): Promise<void> => {

        await fetch(`${BASE_URL}/users/${id}`, {
            method: "DELETE"
        });
    }
}