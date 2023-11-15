import { detallesPedido } from "../types/DetallePedido";


//const BASE_URL = 'https://fakestoreapi.com';
const BASE_URL = 'http://localhost:8080';


export const DetallePedidoService = {
    
    getAllDetallesPedido: async (): Promise<detallesPedido[]> => {
        const response = await fetch(`${BASE_URL}/api/v1/detallePedidos`);
        const data = await response.json();
        return data;
    },

    getDetallePedido: async (id: number): Promise<detallesPedido> => {
        const response = await fetch(`${BASE_URL}/api/v1/detallePedidos/${id}`);
        const data = await response.json();
        return data;
    },

    createDetallePedido: async (detallesPedido: detallesPedido): Promise<detallesPedido> => {
        const response = await fetch(`${BASE_URL}/api/v1/detallePedidos`, {
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
        const response = await fetch(`${BASE_URL}/api/v1/detallePedidos/${id}`, {
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
        await fetch(`${BASE_URL}/api/v1/detallePedidos/${id}`, {
            method: "DELETE"
        });
    }
}