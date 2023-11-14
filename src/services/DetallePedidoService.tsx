import { detallesPedido } from "../types/DetallePedido";


//const BASE_URL = 'https://fakestoreapi.com';
const BASE_URL = 'https://sprint5-back-seguridad.onrender.com';

export const DetallePedidoService = {
    
    getAllDetallesPedido: async (): Promise<detallesPedido[]> => {
        const response = await fetch(`${BASE_URL}/api/v1/detallePedido/paged`);
        const data = await response.json();
        return data;
    },

    getDetallePedido: async (id: number): Promise<detallesPedido> => {
        const response = await fetch(`${BASE_URL}/api/v1/detallePedido/${id}`);
        const data = await response.json();
        return data;
    },

    createDetallePedido: async (detallesPedido: detallesPedido): Promise<detallesPedido> => {
        const response = await fetch(`${BASE_URL}/api/v1/detallePedido`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(detallesPedido)
        });

        const data = await response.json();
        return data;
    },

    updateDetallePedido: async (id: number, detallePedido: detallesPedido): Promise<detallesPedido> => {
        const response = await fetch(`${BASE_URL}/api/v1/detallePedido/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(detallePedido)
        });

        const data = await response.json();
        return data;
    },

    deleteDetallePedido: async (id: number): Promise<void> => {
        await fetch(`${BASE_URL}/api/v1/detallePedido/${id}`, {
            method: "DELETE"
        });
    }
}