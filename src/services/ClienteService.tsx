import { Cliente } from "../types/Cliente";

//const BASE_URL = 'https://fakestoreapi.com';
const BASE_URL = 'https://sprint5-back-seguridad.onrender.com';

export const ClienteService = {
    getAllClientes: async (): Promise<Cliente[]> => {
        const response = await fetch(`${BASE_URL}/api/v1/cliente/paged`);
        const data = await response.json();
        return data;
    },

    getCliente: async (id: number): Promise<Cliente> => {
        const response = await fetch(`${BASE_URL}/api/v1/cliente/${id}`);
        const data = await response.json();
        return data;
    },

    createCliente: async (cliente: Cliente): Promise<Cliente> => {
        const response = await fetch(`${BASE_URL}/api/v1/cliente`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });

        const data = await response.json();
        return data;
    },

    updateCliente: async (id: number, cliente: Cliente): Promise<Cliente> => {
        const response = await fetch(`${BASE_URL}/api/v1/cliente/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });

        const data = await response.json();
        return data;
    },

    deleteCliente: async (id: number): Promise<void> => {
        await fetch(`${BASE_URL}/api/v1/cliente/${id}`, {
            method: "DELETE"
        });
    }
};